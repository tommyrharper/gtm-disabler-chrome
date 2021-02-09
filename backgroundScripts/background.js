console.log('running background.js');

let enabled = true

chrome.extension.onConnect.addListener(function (port) {
  console.log("Connected to popup.js");
  console.log('port.name', port.name);
  if (port.name === 'popup-channel') {
    port.onMessage.addListener(function (msg) {
      console.log("message received from popup.js: " + msg);
      if (typeof msg === 'boolean') enabled = msg;
      port.postMessage(enabled);
      console.log('enabled', enabled);

      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {enabled: enabled}, function(response) {
          console.log('response from main: ', response);
        });
      });

    });
  } 
});

chrome.runtime.onInstalled.addListener(function () {});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("Message from (content_script) main.js to (background_script) background.js: ", request);

  if (request.message) {
    sendResponse({ enabled: enabled });
  } else {
    sendResponse({ messageFromBackgroundScript: "failure!" });
  }
});
