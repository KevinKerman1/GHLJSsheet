console.log("script running");

alert("test 121")

// Function to create the new button and add it after the existing button
function createNewButton() {
    // Use the selector to find the existing button
    const existingButton = document.querySelector('#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(2) > button');

    // Check if the existing button is found
    if (existingButton) {
        // Create a new button element
        const newButton = document.createElement('button');

        // Copy the same class and attributes as the existing button
        newButton.setAttribute('type', 'button');
        newButton.className = existingButton.className; // Copy the class name from the existing button

        // Set the new button's text
        newButton.textContent = 'Go to Dialer Settings';

        // Add the button after the existing button
        existingButton.parentNode.insertBefore(newButton, existingButton.nextSibling);

        // Add the event listener for the new button
        newButton.addEventListener('click', function() {
            console.log('Dialer Settings button clicked!');

            // Get the current URL
            const currentUrl = window.location.href;

            // Extract the location ID from the URL
            const locationId = currentUrl.match(/\/location\/([a-zA-Z0-9]+)\//)[1];

            if (locationId) {
                console.log('Location ID:', locationId);

                // Construct the new URL using the extracted location ID
                const newUrl = `https://app.gohighlevel.com/v2/location/${locationId}/conversations/manual_actions`;

                // Redirect to the new URL
                window.location.href = newUrl;
            } else {
                console.log('Location ID not found in the current URL.');
            }
        });

        console.log('New button created successfully.');
    } else {
        console.log('Existing button not found.');
    }
}

// Call the function to create the new button



// Function to remove the icon and replace it with text
function replaceIconWithText(selector, newText) {
    // Use the provided selector to find the icon
    const iconElement = document.querySelector(selector);

    // Check if the icon element exists
    if (iconElement) {
        // Get the parent button element
        const parentButton = iconElement.parentElement;

        // Remove the icon element
        iconElement.remove();

        // Replace it with the desired text
        parentButton.textContent = newText;

      
    } 
}


// Function to change the text content of the specific span element inside the #sb_contacts element
function changeTextContent(selector, newText) {
    // Use the provided selector to find the element
    const textElement = document.querySelector(selector);

    // Check if the element exists
    if (textElement) {
        // Change the text content to the new text
        textElement.textContent = newText;

        console.log(`Text changed to "${newText}" for selector: ${selector}`);
    } else {
        console.log(`Text element not found for selector: ${selector}`);
    }
}

// Change the text in the span element within the #sb_contacts













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
                            fillAndHideInput();// Call the fillAndHideInput function
                            
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
            "#message-composer > div > div.flex.items-center.pt-2\\.5.border-t > div:nth-child(1) > div:nth-child(2) > div",
            "#message-composer > div > div.flex.items-center.pt-2\\.5.border-t > div:nth-child(1) > div:nth-child(4) > div",
            "#message-composer > div > div.flex.items-center.pt-2\\.5.border-t > div:nth-child(1) > div:nth-child(5) > div",
            "#message-composer > div > div.flex.items-center.pt-2\\.5.border-t > div:nth-child(1) > div:nth-child(6) > div",
            "#contact-details > div > div.relative.p-0.hl_contact-details-left > div > div.h-full.overflow-y-auto > div.bg-gray-100 > div:nth-child(5) > div",
            "#ContactsClientPortal > div",
            "#contact-details > div > div.relative.p-0.hl_contact-details-left > div > div.h-full.overflow-y-auto > div.bg-gray-100 > div:nth-child(2)",
            "#contact-details > div > div.relative.p-0.hl_contact-details-left > div > div.h-full.overflow-y-auto > div.bg-gray-100",
            "#contact-details > div > div.relative.p-0.hl_contact-details-left > div > div.h-full.overflow-y-auto > div.px-4.pt-4.flex.justify-center.pb-4",
            "#sb_dashboard",
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
            "#sb_launchpad",
            "#sb_my-staff",
            "#sb_my-staff",
            "#sb_",
            "#sb_conversation_ai_settings",
            "#sb_location-email-services",
            "#sb_whatsapp",
            "#sb_reputation-management",
            "#sb_custom-fields-settings",
            "#sb_custom-values",
            "#sb_manage-scoring",
            "#sb_domains",
            "#sb_url-redirects",
            "#sb_integrations",
            "#sb_undefined",
            "#sb_conversations_providers",
            "#sb_tags",
            "#sb_labs",
            "#sb_audit-logs-location",
            "#sb_brand-boards",
            "#sb_business-settings-v2",
            "#sb_business-services",
            "#sb_other-settings",
            "#assignedUserPicker > div",
            "#tb_manial-actions",
            "#tb_conversations-tab",
            "#app > div > div > div > div.grid.columns-2.break-after-column.grid-cols-1.gap-4.overflow-scroll.lg\\:grid-cols-2 > div.column-span-1 > div:nth-child(3)",
            "#app > div > div > div > div.grid.columns-2.break-after-column.grid-cols-1.gap-4.overflow-scroll.lg\\:grid-cols-2 > div.column-span-1 > div:nth-child(3) > div:nth-child(1) > div.hl-card-content"
        ];

        selectors.forEach((selector, index) => {
            const element = document.querySelector(selector);
            if (element) {
                element.style.display = "none";
                
            }
        });
    }

    // Check if we should hide the elements based on the user ID
    if (shouldHideElements()) {
        // Create a Mutation Observer to watch for changes in the DOM
        const observer = new MutationObserver(function (mutations) {
            mutations.forEach(function () {
                hideTargetElements(); // Call the function whenever there's a change in the DOM
                // Replace the first icon with "Add to Dialer" text
                replaceIconWithText('#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(2) > button > i', 'Add to Dialer');

                // Replace the second icon with "Add Contact" text
                replaceIconWithText('#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span:nth-child(1) > button > i', 'Add Contact');
                changeTextContent('#sb_contacts span.nav-title', 'Contacts and Dialer');
                changeTextContent('#customers > div > div.hl_controls > div.hl_controls--left > h3', 'Dialer Settings');
                createNewButton();
                
            });
        });

        // Start observing the body for changes in child elements
        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });

        // Run the function once initially in case the elements are already present
        hideTargetElements();
        // Replace the first icon with "Add to Dialer" text
        replaceIconWithText('#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(2) > button > i', 'Add to Dialer');
        

        // Replace the second icon with "Add Contact" text
        replaceIconWithText('#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span:nth-child(1) > button > i', 'Add Contact');
        changeTextContent('#sb_contacts span.nav-title', 'Contacts and Dialer');
        changeTextContent('#customers > div > div.hl_controls > div.hl_controls--left > h3', 'Dialer Settings');
        createNewButton();
        
    } else {
        console.log("User ID matched, script will not hide elements.");
    }
})();
