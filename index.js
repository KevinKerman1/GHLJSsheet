// Function to execute when the element appears
function onElementAppears() {
    console.log("Element has appeared!");
    // Place the action you want to perform here
   let Workflow = document.querySelector("#vs3__combobox > div.vs__selected-options");
   Workflow.innerHTML = `
   <span class="vs__selected">
       Dialer
       <!---->
   </span> 
   <input aria-autocomplete="list" aria-labelledby="vs3__combobox" aria-controls="vs3__listbox" type="search" autocomplete="off" class="vs__search">
`;
console.log("Element has been modified!");
}

// Function to check if the element is present in the DOM
function checkForElement() {
    const targetElement = document.querySelector("#vs3__combobox > div.vs__selected-options");
    if (targetElement) {
        onElementAppears();
        observer.disconnect(); // Stop observing once the element has appeared
    }
}

const observer = new MutationObserver(checkForElement);

observer.observe(document.body, { childList: true, subtree: true });