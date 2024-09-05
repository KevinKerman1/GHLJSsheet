
    console.log("Loading script from GitHub...");

    // Ensure the script runs only once
    if (!window.scriptLoadedFromGitHub) {
        window.scriptLoadedFromGitHub = true; // Prevent script from running multiple times

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

                    // Correctly target the button with the given attributes
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
                        console.log("Reference element not found yet. Waiting for it...");
                    }
                }

                // MutationObserver to watch for the element
                function observeElement() {
                    const observer = new MutationObserver((mutationsList, observer) => {
                        const referenceElement = document.querySelector('button[data-original-title="Campaign Selection Modal"]');
                        if (referenceElement) {
                            console.log("Reference element detected by MutationObserver.");
                            createButton();
                            observer.disconnect(); // Stop observing once the element is found
                        }
                    });

                    // Observe changes in the DOM
                    observer.observe(document.body, { childList: true, subtree: true });
                }

                // Initialize the script
                document.addEventListener('DOMContentLoaded', function() {
                    console.log("DOM fully loaded. Running createButton...");
                    createButton(); // Try to create the button when the DOM is ready
                    observeElement(); // Watch for dynamically loaded elements
                });
            })
            .catch(error => console.error('Error loading script from GitHub:', error));
    } else {
        console.log("Script already loaded, skipping re-execution.");
    }
