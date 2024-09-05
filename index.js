<script>
    console.log("Loading script from GitHub...");

    // Fetch the script from GitHub and execute it
    fetch(`https://raw.githubusercontent.com/KevinKerman1/GHLJSsheet/main/index.js?v=${new Date().getTime()}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(scriptContent => {
            const script = document.createElement('script');
            script.textContent = scriptContent;
            document.head.appendChild(script);
            console.log("Script loaded and executed successfully.");

            // Start debugging the process here

            // Function to create the button dynamically after a specific element
            function createButton() {
                console.log("Attempting to find the reference element...");

                const referenceElement = document.querySelector('button[data-original-title="Campaign Selection Modal"]');

                if (referenceElement) {
                    console.log("Reference element found, creating button...");
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
                        console.log("Start Process button clicked, showing loading screen...");
                        showLoadingScreen();
                        startProcess();
                    });

                    console.log("Button created successfully.");
                } else {
                    console.error('Reference element not found for creating button.');
                }
            }

            // Function to show a loading screen
            function showLoadingScreen() {
                console.log("Showing loading screen...");
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

            // Function to simulate clicking on sidebar tabs and the final button
            function startProcess() {
                console.log("Starting process...");
                const tab1 = document.querySelector('#sb_conversations');

                if (!tab1) {
                    console.error("Tab 1 (Conversations) not found.");
                    return;
                }

                // Function to simulate clicks with delays
                function clickWithDelay(element, delay) {
                    return new Promise((resolve) => {
                        setTimeout(() => {
                            if (element) {
                                console.log(`Clicking element: ${element}`);
                                element.click();
                                resolve();
                            } else {
                                console.error(`Element ${element} not found for clicking.`);
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
                        console.log('Process complete, removing loading screen.');
                        removeLoadingScreen(); // Remove loading screen after all clicks are done
                    })
                    .catch((error) => {
                        console.error('An error occurred during the process:', error);
                        removeLoadingScreen(); // Remove loading screen in case of error
                    });
            }

            // Function to remove the loading screen
            function removeLoadingScreen() {
                const loadingScreen = document.getElementById('loadingScreen');
                if (loadingScreen) {
                    loadingScreen.remove();
                    console.log("Loading screen removed.");
                }
            }

            // Function to wait for an element to be ready before clicking
            function waitForElementToBeReady(selector, timeout = 10000) {
                return new Promise((resolve, reject) => {
                    const startTime = Date.now();

                    function checkIfReady() {
                        const element = document.querySelector(selector);
                        if (element) {
                            console.log(`Element ${selector} is ready.`);
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

            // Initialize the script
            document.addEventListener('DOMContentLoaded', function() {
                console.log("DOM fully loaded. Running createButton...");
                createButton(); // Try to create the button when the DOM is ready
            });
        })
        .catch(error => console.error('Error loading script from GitHub:', error));
</script>
