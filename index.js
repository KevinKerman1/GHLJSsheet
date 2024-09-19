console.log("script running");

   
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
