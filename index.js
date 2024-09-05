
console.log("script running");
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



//2nd Script



// Function to hide the popup and begin the backend process
function handlePopup() {
    setTimeout(function() {
        // Check if the first popup (alert) is visible, and do nothing if it is
        var alertPopup = document.querySelector('#alertModal___BV_modal_content_');
        if (alertPopup && alertPopup.style.display !== 'none') {
            console.log('Alert popup is visible. No action needed.');
            return;
        }

        // Handle the "Add to Automation" popup if it's visible
        var modals = document.querySelectorAll('.modal-content');
        var automationPopup = null;

        modals.forEach(function(modal) {
            var titleElement = modal.querySelector('h4');
            if (titleElement && titleElement.textContent.trim() === "Add the following contacts") {
                automationPopup = modal;
            }
        });

        if (automationPopup) {
            console.log('"Add to Automation" popup detected.');

            // Hide the popup using an alternative method
            automationPopup.style.position = 'absolute';
            automationPopup.style.left = '-9999px';
            console.log('"Add to Automation" popup moved out of viewport.');

            // Show loading on the initial trigger button
            var triggerButton = document.querySelector('span[title="Add to Automation"] button');
            if (triggerButton) {
                triggerButton.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Loading...';
            }

            // Start the backend process
            processSteps();
        } else {
            console.log('"Add to Automation" popup not found.');
        }
    }, 1000); // Delay of 1000ms (1 second) before checking for the popup
}

// Function to process each step in the backend
function processSteps() {
    console.log('Processing steps started...');
    
    // Step 1: Click the first button ("Ok, proceed")
    var firstButton = Array.from(document.querySelectorAll('.hl-btn')).find(btn => btn.textContent.trim() === "Ok, proceed");
    if (firstButton) {
        firstButton.click();
        console.log('First button ("Ok, proceed") clicked.');
    } else {
        showError('First button not found.');
        return;
    }

    // Step 2: Wait and select the "Dialer" option in the dropdown, then click the second button ("Start Dialer")
    setTimeout(function() {
        openDropdownAndSelectDialer(function() {
            var secondButton = Array.from(document.querySelectorAll('.hl-btn')).find(btn => btn.textContent.trim() === "Start Dialer");
            if (secondButton) {
                secondButton.click();
                console.log('Second button ("Start Dialer") clicked.');

                // Step 3: Repeatedly check and click the third button ("Ok") when it appears
                const thirdButtonInterval = setInterval(function() {
                    var thirdButton = Array.from(document.querySelectorAll('.hl-btn')).find(btn => btn.textContent.trim() === "Ok");
                    if (thirdButton) {
                        thirdButton.click();
                        console.log('Third button ("Ok") clicked.');

                        // Change the URL after everything is done
                        setTimeout(changeUrl, 500);
                        clearInterval(thirdButtonInterval); // Stop checking once the button is clicked
                    } else {
                        console.log('Third button not found yet, retrying...');
                    }
                }, 500); // Check every 500ms for the third button
            } else {
                showError('Second button not found.');
                return;
            }
        });
    }, 3000); // Wait 3 seconds between Step 1 and Step 2
}

// Function to open the dropdown and select the "Dialer" option
function openDropdownAndSelectDialer(callback) {
    console.log('Attempting to select "Dialer" option...');
    const dropdownInterval = setInterval(function() {
        var dropdownInput = document.querySelector('input[aria-controls="vs3__listbox"]');

        if (dropdownInput) {
            console.log('Dropdown input found, forcing the dropdown to open...');
            
            dropdownInput.click();
            dropdownInput.focus();

            setTimeout(function() {
                var dropdownOptionsContainer = document.querySelector('#vs3__listbox');

                if (dropdownOptionsContainer) {
                    console.log('Dropdown options container found, looking for "Dialer"...');

                    var dialerOption = Array.from(dropdownOptionsContainer.querySelectorAll("li.vs__dropdown-option"))
                                            .find(option => option.textContent.trim() === "Dialer");

                    if (dialerOption) {
                        dialerOption.click();
                        console.log('Option "Dialer" selected!');
                        clearInterval(dropdownInterval);
                        if (callback) callback(); // Proceed to the next step after selection
                    } else {
                        console.log('Option "Dialer" not found in the dropdown.');
                    }
                } else {
                    console.log('Dropdown options container not found.');
                }
            }, 1500); // Wait for 1.5 seconds to ensure the dropdown options have loaded
        } else {
            console.log('Dropdown input not found, retrying...');
        }
    }, 500); // Check every 500ms
}

// Function to change the URL
function changeUrl() {
    var currentUrl = window.location.href;
    var oldPart = "contacts/smart_list/All";
    var newPart = "conversations/manual_actions";
    var newUrl = currentUrl.replace(oldPart, newPart);

    console.log('Changing URL to:', newUrl);
    window.location.href = newUrl;
}

// Function to show an error alert
function showError(message) {
    console.log(message);
    alert(message);
}

// Add event listener to the trigger button
var triggerButton = document.querySelector('span[title="Add to Automation"] button');
if (triggerButton) {
    triggerButton.addEventListener('click', function() {
        setTimeout(handlePopup, 500); // Start handling the popup after 500ms
    });
} else {
    console.log('Trigger button not found.');
}


//3rd script

(function() {
    // Function to create the button dynamically after a specific element
    function createButton() {
        const referenceElement = document.querySelector('#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left > span.bulk-actions-list > span:nth-child(14) > button');
        
        if (referenceElement) {
            const button = document.createElement('button');
            button.id = 'startProcessButton';
            button.textContent = 'Start Process';
            button.style.marginLeft = '10px';
            button.style.padding = '10px 20px';
            button.style.backgroundColor = '#007BFF';
            button.style.color = '#fff';
            button.style.border = 'none';
            button.style.cursor = 'pointer';
            
            // Insert the button after the reference element
            referenceElement.insertAdjacentElement('afterend', button);

            // Attach click event listener to the button
            button.addEventListener('click', function() {
                showLoadingScreen();
                startProcess();
            });
        } else {
            console.error('Reference element not found for creating button.');
        }
    }

    // Function to show a loading screen
    function showLoadingScreen() {
        const loadingScreen = document.createElement('div');
        loadingScreen.id = 'loadingScreen';
        loadingScreen.style.position = 'fixed';
        loadingScreen.style.top = '0';
        loadingScreen.style.left = '0';
        loadingScreen.style.width = '100%';
        loadingScreen.style.height = '100%';
        loadingScreen.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        loadingScreen.style.color = '#fff';
        loadingScreen.style.display = 'flex';
        loadingScreen.style.justifyContent = 'center';
        loadingScreen.style.alignItems = 'center';
        loadingScreen.style.fontSize = '24px';
        loadingScreen.textContent = 'Loading, please wait...';
        document.body.appendChild(loadingScreen);
    }

    // Function to remove the loading screen
    function removeLoadingScreen() {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.remove();
        }
    }

    // Function to wait for an element to be ready before clicking
    function waitForElementToBeReady(selector, timeout = 10000) {
        return new Promise((resolve, reject) => {
            const startTime = Date.now();

            function checkIfReady() {
                const element = document.querySelector(selector);
                if (element) {
                    resolve(element);
                } else if (Date.now() - startTime > timeout) {
                    reject(new Error(`Element ${selector} not found within ${timeout}ms`));
                } else {
                    setTimeout(checkIfReady, 500); // Check every 500ms
                }
            }

            checkIfReady();
        });
    }

    // Function to simulate clicking on sidebar tabs and the final button
    function startProcess() {
        const tab1 = document.querySelector('#sb_conversations');
        
        // Function to simulate clicks with delays
        function clickWithDelay(element, delay) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    if (element) {
                        element.click();
                        resolve();
                    }
                }, delay);
            });
        }

        // Click on tabs and "Let's Start" button in sequence
        clickWithDelay(tab1, 1000) // Click first tab after 1 second
            .then(() => waitForElementToBeReady('#tb_manial-actions', 10000)) // Wait up to 10 seconds for "Manual Actions" tab to be ready
            .then((tab2) => clickWithDelay(tab2, 1000)) // Click "Manual Actions" tab after it's ready
            .then(() => waitForElementToBeReady('#campaign-picker > button', 10000)) // Wait up to 10 seconds for "Let's Start" button to be ready
            .then((startButton) => clickWithDelay(startButton, 1000)) // Click "Let's Start" button after it's ready
            .then(() => {
                removeLoadingScreen(); // Remove loading screen after all clicks are done
                console.log('Process complete.');
            })
            .catch((error) => {
                console.error('An error occurred during the process:', error);
                removeLoadingScreen(); // Remove loading screen in case of error
            });
    }

    // Initialize the script
    createButton();
})();

