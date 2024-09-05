(function() {
    // Function to log messages for debugging
    function log(message) {
        console.log("[Script Log] " + message);
    }

    // Function to show a loading screen
    function showLoadingScreen() {
        log("Showing loading screen...");
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
        log("Removing loading screen...");
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.remove();
        }
    }

    // Function to simulate clicking on sidebar tabs and the final button
    function startProcess() {
        log("Starting process...");
        const tab1 = document.querySelector('#sb_conversations');
        
        // Function to simulate clicks with delays
        function clickWithDelay(element, delay) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    if (element) {
                        element.click();
                        log("Clicked element: " + element);
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
                log('Process complete.');
            })
            .catch((error) => {
                console.error('An error occurred during the process:', error);
                removeLoadingScreen(); // Remove loading screen in case of error
            });
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

    // Function to create the button dynamically after a specific element
    function createButton(referenceElement) {
        log("Reference element found, creating button...");

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
    }

    // Function to observe DOM changes
    function observeDOMChanges() {
        const observer = new MutationObserver((mutationsList, observer) => {
            const referenceElement = document.querySelector('button[data-original-title="Campaign Selection Modal"]');
            if (referenceElement) {
                createButton(referenceElement);
                observer.disconnect(); // Stop observing after the button is created
            }
        });

        // Start observing the target node for configured mutations
        observer.observe(document.body, { childList: true, subtree: true });
    }

    // Run the script once the DOM content is fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        log("DOM fully loaded. Initializing script...");
        observeDOMChanges(); // Start observing DOM changes
    });
})();
