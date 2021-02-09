console.log('running background.js');

let enabled = true

chrome.extension.onConnect.addListener(function (port) {
  console.log("Connected to popup.js");
  port.onMessage.addListener(function (msg) {
    console.log("message received from popup.js: " + msg);
    if (typeof msg === 'boolean') enabled = msg;
    port.postMessage(enabled);
    console.log('enabled', enabled);
  });
});
