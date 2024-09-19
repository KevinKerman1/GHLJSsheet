console.log("script running");
alert("test 79");

// Function to change the button text when it appears
function changeButtonText(addToAutomationButton) {
    if (addToAutomationButton) {
        console.log('Add to Automation button found:', addToAutomationButton);

        // Change the text content
        addToAutomationButton.textContent = "Start Dialer";
        addToAutomationButton.innerHTML = "Start Dialer";

        // Log the button's current text content after attempting to change it
        console.log('Button text after change:', addToAutomationButton.textContent);

        // Add the click event listener to handle the URL change when the button is clicked
        addToAutomationButton.addEventListener('click', function() {
            console.log('Start Dialer button clicked, waiting 5 seconds before URL change...');
            // Add a 5-second delay before the URL change occurs
            setTimeout(function() {
                 // Trigger the URL change functionality after delay changeUrl
            }, 5000); // 5000 milliseconds = 5 seconds
        });
    } else {
        console.log('Add to Automation button not found.');
    }
}

// Function to change the URL
function changeUrl() {
    console.log('Changing URL...');
    var currentUrl = window.location.href;
    var oldPart = "contacts/smart_list/All";
    var newPart = "conversations/manual_actions";
    var newUrl = currentUrl.replace(oldPart, newPart);

    // Redirect the user to the new URL
    window.location.href = newUrl;
}

// Function to try different selectors to find the dropdown input
function getDropdownInput() {
    let dropdownInput = null;

    try {
        dropdownInput = document.querySelector('#vs3__combobox > div.vs__selected-options > input'); // First selector
        if (!dropdownInput) throw new Error('Dropdown input not found using first selector.');
    } catch (e) {
        console.log(e.message);

        try {
            dropdownInput = document.querySelector('div.v-select.vs--searchable[name="workflow"] input.vs__search'); // Second selector
            if (!dropdownInput) throw new Error('Dropdown input not found using second selector.');
        } catch (e) {
            console.log(e.message);

            try {
                dropdownInput = document.querySelector('input[aria-controls="vs3__listbox"]'); // Third selector
                if (!dropdownInput) throw new Error('Dropdown input not found using third selector.');
            } catch (e) {
                console.log(e.message);
            }
        }
    }

    return dropdownInput;
}

// Function to force open the dropdown and select the "Dialer" option
function openDropdownAndSelectDialer() {
    let dropdownClicked = false; // Track whether the dropdown has been clicked
    const dropdownInterval = setInterval(function() {
        if (dropdownClicked) {
            clearInterval(dropdownInterval);
            return;
        }

        // Try to get the dropdown input using multiple selectors
        var dropdownInput = getDropdownInput();

        if (dropdownInput) {
            console.log('Dropdown input found, forcing the dropdown to open...');

            dropdownInput.click();
            dropdownInput.focus();
            dropdownClicked = true; // Mark the dropdown as clicked

            setTimeout(function() {
                var dropdownOptionsContainer = document.querySelector('#vs3__listbox');

                if (dropdownOptionsContainer) {
                    console.log('Dropdown options container found, looking for "Dialer"...');

                    // Use the specific selection technique provided
                    var dialerOption = Array.from(dropdownOptionsContainer.querySelectorAll("li.vs__dropdown-option"))
                                            .find(option => option.textContent.trim() === "Dialer");

                    if (dialerOption) {
                        dialerOption.click();
                        console.log('Option "Dialer" selected!');
                    } else {
                        console.log('Option "Dialer" not found in the dropdown.');
                        dropdownClicked = false; // Reset if Dialer is not found
                    }
                } else {
                    console.log('Dropdown options container not found.');
                    dropdownClicked = false; // Reset if options container is not found
                }
            }, 500); // Wait for 500ms to ensure the dropdown options have loaded
        } else {
            console.log('Dropdown input not found, retrying...');
        }
    }, 500); // Check every 500ms
}

// Function to remove specific elements when the "Add to Automation" button appears
function removeElements() {
    const elementToRemove1 = document.querySelector('div[data-v-3bc206a0][role="radiogroup"]'); // First element
    const elementToRemove2 = document.querySelector('div[data-v-3bc206a0].py-1.text-nowrap'); // Second element

    if (elementToRemove1) {
        console.log('First element found and will be removed:', elementToRemove1);
        elementToRemove1.remove(); // Remove the first element
    } else {
        console.log('First element to remove not found.');
    }

    if (elementToRemove2) {
        console.log('Second element found and will be removed:', elementToRemove2);
        elementToRemove2.remove(); // Remove the second element
    } else {
        console.log('Second element to remove not found.');
    }
}

// Updated function to fill a value in the input field and then hide it
function fillAndHideInput() {
    const inputElement = document.querySelector('input[name="description"]'); // Targeting the input element

    if (inputElement) {
        console.log('Input field found, filling value and hiding:', inputElement);

        // Fill the input with a specified value
        const value = "Action description for tracking report";
        inputElement.value = value;

        // Trigger input events to simulate user typing
        const event = new Event('input', { bubbles: true });
        inputElement.dispatchEvent(event);

        // Optionally trigger 'change' and 'blur' events if needed
        const changeEvent = new Event('change', { bubbles: true });
        inputElement.dispatchEvent(changeEvent);

        const blurEvent = new Event('blur', { bubbles: true });
        inputElement.dispatchEvent(blurEvent);

        // Hide the input field by setting visibility to hidden
        inputElement.style.visibility = 'hidden';
    } else {
        console.log('Input field not found.');
    }
}

// Function to start observing the "Add to Automation" button
function observeAddToAutomationButton() {
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1) {
                    const buttonSelector = 'button.hl-btn.text-curious-blue-500.border-curious-blue-400';
                    const buttons = node.querySelectorAll(buttonSelector);

                    buttons.forEach(button => {
                        if (button.textContent.trim() === "Add to Automation") {
                            console.log('"Add to Automation" button detected.');
                            changeButtonText(button);
                            openDropdownAndSelectDialer();
                            removeElements(); // Call the removeElements function to remove both elements
                            fillAndHideInput(); // Call the fillAndHideInput function
                            // URL change will be triggered by the specific "Start Dialer" button click event after delay
                        }
                    });
                }
            });
        });
    });

    // Start observing the entire body for added nodes
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    console.log('Observer initialized, watching for "Add to Automation" button...');
}

// Start observing when the script runs
observeAddToAutomationButton();
//GHL Customization code

(function () {
    // Function to check if the user ID is the one we want to exclude
    function shouldHideElements() {
        const storageKeys = Object.keys(localStorage);
        let userId = null;

        // Search for the key that contains "_pendo_visitorId"
        for (const key of storageKeys) {
            if (key.includes("_pendo_visitorId")) {
                try {
                    const userData = JSON.parse(localStorage.getItem(key)); // Parse the value as JSON
                    console.log("Found _pendo_visitorId key:", key); // Log the found key
                    if (userData && userData.value) {
                        userId = userData.value;  // Extract the user ID
                        console.log("Extracted User ID:", userId); // Log the found user ID
                    }
                } catch (error) {
                    console.error("Error parsing local storage item", error);
                }
                break; // Exit the loop once we find the key
            }
        }

        // Log whether or not we should hide the elements
        if (userId === "cfOqEnOZzOwGpq7yQeKd") {
            console.log("User ID matches cfOqEnOZzOwGpq7yQeKd, elements will not be hidden.");
            return false;
        } else {
            console.log("User ID does not match, elements will be hidden.");
            return true;
        }
    }

    // Function to hide all target elements when they appear
    function hideTargetElements() {
        const selectors = [
            "#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(14) > button", // First element
            "#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(6)", // Second element
            "#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(5)", // Third element
            "#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(1)",
            "#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(12)",
            "#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(4)",
            "#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--right > div:nth-child(3)",
            "#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(8)",
            "#tb_lists",
            "#tb_bulk-actions",
            "#tb_contacts-restore",
            "#colViewButton",
            "#tb_tasks",
            "#tb_business",
            "#tb_contacts-settings-top",
            "#tb_contact-custom-fields-settings",
            "#contact-details > div > div.hl_contact-details-right",
            "#contact-details > div > div.hl_contact-details-center > div.hl_conversations--message > div.hl_conversations--message-header-new",
            "#contact-details > div > div.hl_contact-details-center > div.hl_conversations--message > div.hl_conversations--message-body > div > div.message-input-wrap.overflowdisabled.new-channel-picker > div.flex.items-center > ul > li:nth-child(2)",
            "#contact-details > div > div.hl_contact-details-center > div.hl_conversations--message > div.hl_conversations--message-body > div > div.message-input-wrap.overflowdisabled.new-channel-picker > div.flex.items-center > ul > li:nth-child(3)",
            "#message-composer > div > div.flex.items-center.pt-2\.5.border-t > div:nth-child(1) > div:nth-child(5) > div",
            "#contact-details > div > div.relative.p-0.hl_contact-details-left > div > div.h-full.overflow-y-auto > div.bg-gray-100 > div:nth-child(5) > div",
            "#ContactsClientPortal > div",
            "#contact-details > div > div.relative.p-0.hl_contact-details-left > div > div.h-full.overflow-y-auto > div.bg-gray-100 > div:nth-child(2)",
            "#contact-details > div > div.relative.p-0.hl_contact-details-left > div > div.h-full.overflow-y-auto > div.bg-gray-100",
            "#contact-details > div > div.relative.p-0.hl_contact-details-left > div > div.h-full.overflow-y-auto > div.px-4.pt-4.flex.justify-center.pb-4",
            "#sb_location-mobile-app",
            "#sb_app-marketplace",
            "#sb_reporting",
            "#sb_reputation",
            "#sb_app-media",
            "#sb_memberships",
            "#sb_sites",
            "#sb_automation",
            "#sb_email-marketing",
            "#sb_payments",
            "#sb_opportunities",
            "#sb_calendars",
            "#sb_launchpad"
        ];

        selectors.forEach((selector, index) => {
            const element = document.querySelector(selector);
            if (element) {
                element.style.display = "none";
                console.log(`Element ${index + 1} hidden successfully`);
            }
        });
    }

    // Check if we should hide the elements based on the user ID
    if (shouldHideElements()) {
        // Create a Mutation Observer to watch for changes in the DOM
        const observer = new MutationObserver(function (mutations) {
            mutations.forEach(function () {
                hideTargetElements(); // Call the function whenever there's a change in the DOM
            });
        });

        // Start observing the body for changes in child elements
        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });

        // Run the function once initially in case the elements are already present
        hideTargetElements();
    } else {
        console.log("User ID matched, script will not hide elements.");
    }
})();
