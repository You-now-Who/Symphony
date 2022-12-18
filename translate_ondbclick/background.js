

ondblclick = (event) => {
    const info = getSelectionText();
    onDblClick(info);
 };

function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

function onDblClick(info) {
    const url = `http://translate.google.com/#auto/${'hindi'}/${encodeURIComponent(info.selectionText)}`;
    ga('set', 'checkProtocolTask', () => { /* do nothing */ });
    ga('send', {
      hitType: 'event',
      eventCategory: 'contextMenu',
      eventAction: 'translate'
    });
  }
  
//   chrome.action.ondblclick.addListener((tab) => {
//     chrome.scripting.executeScript({
//       target: { tabId: tab.id },
//       func: onDblClick
//     });
//   });