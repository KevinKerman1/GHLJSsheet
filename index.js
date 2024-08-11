// Function to execute when the element appears
function onElementAppears() {
    console.log("Element has appeared!");
    // Select the parent element using the provided selector


    
    // Place the action you want to perform here
}

// Function to check if the element is present in the DOM
function checkForElement() {
    const targetElement = document.querySelector("#__BVID__240___BV_modal_body_ > div > div > div.hl_rules--wrap > div.card > div > div:nth-child(1) > div > div:nth-child(3) > div");
    if (targetElement) {
        onElementAppears();
        observer.disconnect(); // Stop observing once the element has appeared
    }
}

const observer = new MutationObserver(checkForElement);

observer.observe(document.body, { childList: true, subtree: true });