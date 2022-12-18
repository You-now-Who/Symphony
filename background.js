// need background event listening for double click on a word in the website
// and then show meaning of word in native language

chrome.runtime.onInstalled.addListener(function (object) {
  let externalUrl = "https://you-now-who.github.io/Symphony/";
  let internalUrl = chrome.runtime.getURL("views/onboarding.html");

  if (object.reason === chrome.runtime.OnInstalledReason.INSTALL) {
      chrome.tabs.create({ url: externalUrl }, function (tab) {
          console.log("New tab launched with https://you-now-who.github.io/Symphony/");
      });

    
      if (chrome.runtime.openOptionsPage) {
        chrome.runtime.openOptionsPage();
    } else {
        window.open(chrome.runtime.getURL('options.html'));
    }
    
      chrome.storage.local.set({ fonts: {"span": "Times New Roman", "p": "Times New Roman", "em": "Helvetica", "b": "Helvetica", "i": "Helvetica", "u": "Helvetica", "a": "Helvetica", "li": "Helvetica", "td": "Helvetica", "th": "Helvetica", "input": "Helvetica", "option": "Helvetica", "h1": "Georgia", "h2": "Monaco", "h3": "Droid Sans", "h4": "Helvetica", "h5": "Helvetica", "h6": "Helvetica", "div": "Helvetica", "default": "Helvetica"} }).then(() => {
        console.log("Value is set to " + {"span": "Times New Roman", "p": "Times New Roman", "em": "Helvetica", "b": "Helvetica", "i": "Helvetica", "u": "Helvetica", "a": "Helvetica", "li": "Helvetica", "td": "Helvetica", "th": "Helvetica", "input": "Helvetica", "option": "Helvetica", "h1": "Georgia", "h2": "Monaco", "h3": "Droid Sans", "h4": "Helvetica", "h5": "Helvetica", "h6": "Helvetica", "div": "Helvetica", "default": "Helvetica"});
      });

  }
});

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