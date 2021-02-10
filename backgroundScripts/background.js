let enabled = true
let RUN_APP = true

chrome.tabs.onActivated.addListener(tab => {
  chrome.tabs.get(tab.tabId, current_tab_info => {
    if (current_tab_info.url.includes('chrome://')) RUN_APP = false;
    else RUN_APP = true;
    console.log('RUN_APP', RUN_APP);
  })
})

chrome.extension.onConnect.addListener(function (port) {
  if (port.name === 'popup-channel') {
    port.onMessage.addListener(function (msg) {
      if (typeof msg === 'boolean') enabled = msg;
      port.postMessage(enabled);
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {enabled: enabled}, function(response) {});
      });
    });
  } 
});

chrome.runtime.onInstalled.addListener(function () {});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message) sendResponse({ enabled: enabled && RUN_APP });
});
