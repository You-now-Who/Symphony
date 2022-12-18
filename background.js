// need background event listening for double click on a word in the website
// and then show meaning of word in native language



// code required to run the font changer extension
console.log("background.js loaded");

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content-script.js']
    });
    console.log("Script executed ...");
  });

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("message received");
    if (request.msg === "buttonClicked") {
        console.log("button clicked");
        console.log(request.data.content.fonts);
        // alert("button clicked");
        

        chrome.storage.local.set({ fonts: request.data.content.fonts }).then(() => {
            console.log("Value is set to " + request.data.content.fonts);
          });

        // chrome.scripting.executeScript({
        //     target: { tabId: sender.tab.id },
        //     files: ['content-script.js']
        // });
        // console.log("Script executed ...");

        chrome.storage.local.get(['fonts'], function(result) {
            console.log('Value currently is ' + result.fonts);
            fonts = result.fonts;
            console.log(result.fonts);
        });
    }
});