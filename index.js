// Function to check if the specific element is displayed and modify the dropdown
function selectDialerOption() {
    // Define the selector for the specific element
    const specificElementSelector = '#__BVID__524___BV_modal_body_ > div > div > div.hl_rules--wrap > div.card > div > div:nth-child(1) > div > div:nth-child(3) > div';

    // Find the specific element using the selector
    const specificElement = document.querySelector(specificElementSelector);

    // Check if the specific element is displayed (i.e., it exists and is not hidden)
    if (specificElement && specificElement.style.display !== 'none') {
        // Find the dropdown element (your original element)
        const dropdownElement = document.querySelector('div.v-select.mt-1.vs--single.vs--searchable[name="workflow"]');

        if (dropdownElement) {
            // Modify the dropdown element to show "Dialer" as selected
            const selectedOptions = dropdownElement.querySelector('.vs__selected-options');

            // Remove any existing input element (if present)
            const existingInput = selectedOptions.querySelector('input.vs__search');
            if (existingInput) {
                existingInput.remove();
            }

            // Add the "Dialer" option as a selected span element
            const selectedSpan = document.createElement('span');
            selectedSpan.className = 'vs__selected';
            selectedSpan.textContent = 'Dialer';

            // Insert the new span into the selected options div
            selectedOptions.appendChild(selectedSpan);

            // Ensure the dropdown still has the search input field (hidden by default)
            const searchInput = document.createElement('input');
            searchInput.setAttribute('aria-autocomplete', 'list');
            searchInput.setAttribute('aria-labelledby', 'vs9__combobox');
            searchInput.setAttribute('aria-controls', 'vs9__listbox');
            searchInput.type = 'search';
            searchInput.autocomplete = 'off';
            searchInput.className = 'vs__search';
            searchInput.style.display = 'none'; // Hide the search input field

            // Add the search input field back to the selected options div
            selectedOptions.appendChild(searchInput);

            // Disconnect the observer after the element is found and modified
            observer.disconnect();
        }
    }
}

// MutationObserver callback function to check for the element
function checkForElement() {
    selectDialerOption();
}

// Create a new MutationObserver instance and start observing the document body
const observer = new MutationObserver(checkForElement);

observer.observe(document.body, { childList: true, subtree: true });
