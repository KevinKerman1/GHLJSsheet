// Function to execute when the element appears
function onElementAppears() {
    console.log("Element hass appeared!");
     //Place the action you want to perform here
  //let Workflow = document.querySelector("##__BVID__247___BV_modal_content_");
   //Workflow.innerHTML = 

   // Change the placeholder for the campaign select input
document.querySelector('[name="campaign"] .vs__selected-options .vs__selected').textContent = "Dialer";

// Change the placeholder for the workflow select input
document.querySelector('[name="workflow"] .vs__selected-options .vs__selected').textContent = "Dialer";

   
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