console.log("script running");
alert("test 76");

// Function to change the appearance and text of the Add to Automation button
function changeButtonAppearance(addToAutomationButton) {
    if (addToAutomationButton) {
        console.log('Add to Automation button found:', addToAutomationButton);

        // Change the button's appearance by updating its class
        addToAutomationButton.className = 'hl-btn inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-apple-500 hover:bg-apple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-apple-500';

        // Remove any existing icon inside the button
        const iconElement = addToAutomationButton.querySelector('i');
        if (iconElement) {
            iconElement.remove(); // Remove the old icon
        }

        // Change the text content to "Let's start"
        addToAutomationButton.textContent = "Add to Dialer";

        // Log the button's current text content after attempting to change it
        console.log('Button appearance and text after change:', addToAutomationButton.textContent);

        // Add the click event listener to handle the URL change when the button is clicked
        addToAutomationButton.addEventListener('click', function() {
            console.log('Start Dialer button clicked, waiting 5 seconds before URL change...');
            // Add a 5-second delay before the URL change occurs
            setTimeout(function() {
                changeUrl(); // Trigger the URL change functionality after delay
            }, 5000); // 5000 milliseconds = 5 seconds
        });
    } else {
        console.log('Add to Automation button not found.');
    }
}

// Function to start observing the "Add to Automation" button
function observeAddToAutomationButton() {
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1) {
                    const buttonSelector = 'button.btn.btn-light.btn-sm';
                    const buttons = node.querySelectorAll(buttonSelector);

                    buttons.forEach(button => {
                        if (button.getAttribute('data-original-title') === "Campaign Selection Modal") {
                            console.log('"Add to Automation" button detected.');
                            changeButtonAppearance(button); // Change button appearance
                            openDropdownAndSelectDialer();
                            removeElements(); // Call the removeElements function to remove both elements
                            fillAndHideInput(); // Call the fillAndHideInput function
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
