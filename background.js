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
  