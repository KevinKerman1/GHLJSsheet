// Function to execute when the element appears
function onElementAppears() {
    console.log("Element hass appeared!");
     //Place the action you want to perform here
  let Workflow = document.querySelector("##__BVID__247___BV_modal_content_");
   Workflow.innerHTML = `
   <header id="__BVID__247___BV_modal_header_" class="modal-header">
       <h5 id="__BVID__247___BV_modal_title_" class="modal-title">
           <h5 data-v-4a572634="" class="modal-title"> Add to Automation </h5>
       </h5>
       <button type="button" aria-label="Close" class="close">×</button>
   </header>
   <div id="__BVID__247___BV_modal_body_" class="modal-body">
       <div data-v-4a572634="" class="modal-body">
           <div data-v-4a572634="" class="modal-body--inner">
               <h4 data-v-4a572634=""> Add the following contacts </h4>
               <div data-v-4a572634="" class="avatar-group">
                   <div data-v-4a572634="" class="avatar">
                       <div class="avatar_img" style="background-color: rgb(117, 161, 189);"> T </div>
                   </div>
                   <div data-v-4a572634="" class="avatar">
                       <div class="avatar_img" style="background-color: rgb(180, 117, 189);"> D </div>
                   </div>
               </div>
               <div data-v-4a572634="" class="hl_rules--wrap">
                   <div data-v-4a572634="" class="card">
                       <div data-v-4a572634="" class="card-body" style="">
                           <div data-v-4a572634="">
                               <div data-v-36557c48="" class="form-group">
                                   <div style="display: none;">
                                       <label>Automation Type</label>
                                       <div dir="auto" class="v-select mt-1 vs--single vs--searchable" name="automationType">
                                           <div id="vs1__combobox" role="combobox" aria-expanded="false" aria-owns="vs1__listbox" aria-label="Search for option" class="vs__dropdown-toggle">
                                               <div class="vs__selected-options">
                                                   <span class="vs__selected">Workflow</span>
                                                   <input aria-autocomplete="list" aria-labelledby="vs1__combobox" aria-controls="vs1__listbox" type="search" autocomplete="off" class="vs__search">
                                               </div>
                                               <div class="vs__actions">
                                                   <button type="button" title="Clear Selected" aria-label="Clear Selected" class="vs__clear" style="display: none;">
                                                       <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10">
                                                           <path d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"></path>
                                                       </svg>
                                                   </button>
                                                   <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" role="presentation" class="vs__open-indicator">
                                                       <path d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"></path>
                                                   </svg>
                                                   <div class="vs__spinner" style="display: none;">Loading...</div>
                                               </div>
                                           </div>
                                           <ul id="vs1__listbox" role="listbox" style="display: none; visibility: hidden;"></ul>
                                       </div>
                                   </div>
                                   <div class="mt-3" style="display: none;">
                                       <label>Campaign</label>
                                       <div dir="auto" class="v-select mt-1 vs--single vs--searchable" name="campaign">
                                           <div id="vs2__combobox" role="combobox" aria-expanded="false" aria-owns="vs2__listbox" aria-label="Search for option" class="vs__dropdown-toggle">
                                               <div class="vs__selected-options">
                                                   <span class="vs__selected">Dialer</span>
                                                   <input aria-autocomplete="list" aria-labelledby="vs2__combobox" aria-controls="vs2__listbox" type="search" autocomplete="off" class="vs__search">
                                               </div>
                                               <div class="vs__actions">
                                                   <button type="button" title="Clear Selected" aria-label="Clear Selected" class="vs__clear" style="display: none;">
                                                       <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10">
                                                           <path d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"></path>
                                                       </svg>
                                                   </button>
                                                   <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" role="presentation" class="vs__open-indicator">
                                                       <path d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"></path>
                                                   </svg>
                                                   <div class="vs__spinner" style="display: none;">Loading...</div>
                                               </div>
                                           </div>
                                           <ul id="vs2__listbox" role="listbox" style="display: none; visibility: hidden;"></ul>
                                       </div>
                                   </div>
                                   <div class="">
                                       <label>Workflow</label>
                                       <div data-v-07e6d460="" dir="auto" class="v-select mt-1 vs--single vs--searchable" name="workflow">
                                           <div id="vs3__combobox" role="combobox" aria-expanded="false" aria-owns="vs3__listbox" aria-label="Search for option" class="vs__dropdown-toggle">
                                               <div class="vs__selected-options">
                                                   <span class="vs__selected">Dialer</span>
                                                   <input aria-autocomplete="list" aria-labelledby="vs3__combobox" aria-controls="vs3__listbox" type="search" autocomplete="off" class="vs__search">
                                               </div>
                                               <div class="vs__actions">
                                                   <button type="button" title="Clear Selected" aria-label="Clear Selected" class="vs__clear" style="display: none;">
                                                       <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10">
                                                           <path d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"></path>
                                                       </svg>
                                                   </button>
                                                   <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" role="presentation" class="vs__open-indicator">
                                                       <path d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"></path>
                                                   </svg>
                                                   <div class="vs__spinner" style="display: none;">Loading...</div>
                                               </div>
                                           </div>
                                           <ul id="vs3__listbox" role="listbox" style="display: none; visibility: hidden;"></ul>
                                       </div>
                                   </div>
                                   <span class="error" style="display: none;"> </span>
                               </div>
                           </div>
                           <hr data-v-4a572634="">
                           <div data-v-4a572634="" class="form-row mx-1 my-2">
                               <fieldset data-v-4a572634="" class="form-group" id="__BVID__257">
                                   <div>
                                       <div data-v-4a572634="" role="radiogroup" tabindex="-1" class="bv-no-focus-ring" id="__BVID__258">
                                           <div class="custom-control custom-control-inline custom-radio">
                                               <input type="radio" class="custom-control-input" value="none" id="__BVID__258_BV_option_0" name="__BVID__258">
                                               <label class="custom-control-label" for="__BVID__258_BV_option_0">
                                                   <span>Add all at once</span>
                                               </label>
                                           </div>
                                           <div class="custom-control custom-control-inline custom-radio">
                                               <input type="radio" class="custom-control-input" value="processAllAtSchedule" id="__BVID__258_BV_option_1" name="__BVID__258">
                                               <label class="custom-control-label" for="__BVID__258_BV_option_1">
                                                   <span>Add all at schedule time</span>
                                               </label>
                                           </div>
                                           <div class="custom-control custom-control-inline custom-radio">
                                               <input type="radio" class="custom-control-input" value="drip" id="__BVID__258_BV_option_2" name="__BVID__258">
                                               <label class="custom-control-label" for="__BVID__258_BV_option_2">
                                                   <span>Add in drip mode</span>
                                               </label>
                                           </div>
                                       </div>
                                   </div>
                               </fieldset>
                           </div>
                           <div data-v-4a572634="" class="py-1 text-nowrap">
                               <span data-v-56639245="" data-v-4a572634="" class="text-sm font-medium text-gray-700">Action</span>
                           </div>
                           <div data-v-4a572634="" class="form-row">
                               <div data-v-4a572634="" class="form-group col-12">
                                   <input data-v-4a572634="" type="text" data-lpignore="true" autocomplete="" placeholder="Enter a description for the action (to be shown in tracking report)" class="hl-text-input shadow-sm focus:ring-curious-blue-500 focus:border-curious-blue-500 block w-full sm:text-sm border-gray-300 rounded disabled:opacity-50 text-gray-800" name="description" maxlength="50">
                                   <span data-v-4a572634="" class="error" style="display: none;"> Enter a name for the action </span>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
               <div data-v-4a572634="" class="modal-buttons d-flex align-items-center justify-content-between px-2">
                   <button data-v-4397f5e0="" data-v-4a572634="" type="button" class="hl-btn inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-curious-blue-500" data-dismiss="modal">Cancel</button>
                   <div data-v-4a572634="" class="d-inline-flex">
                       <button data-v-4397f5e0="" data-v-4a572634="" type="button" class="hl-btn inline-flex items-center px-4 py-2 border-2 border-curious-blue-400 text-sm font-medium rounded text-curious-blue-500 hover:bg-curious-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-curious-blue-500">Add to Automation</button>
                   </div>
               </div>
           </div>
       </div>
   </div>`;
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