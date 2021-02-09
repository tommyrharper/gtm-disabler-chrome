// chrome.runtime.onInstalled.addListener(function () {});

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   console.log(
//     sender.tab
//       ? "From (content_script) main.js to (background_script) background.js: " + sender.tab.url
//       : "From the extension"
//   );
//   console.log("Message from (content_script) main.js to (background_script) background.js: ", request);

//   chrome.extension.onConnect.addListener(function (port) {
//     console.log("Connected to popup.js");
//     port.onMessage.addListener(function (msg) {
//       console.log("message received from popup.js: " + msg);
//       port.postMessage(request.message);
//     });
//   });

//   if (request.message) {
//     sendResponse({ messageFromBackgroundScript: "success!" });
//   } else {
//     sendResponse({ messageFromBackgroundScript: "failure!" });
//   }
// });

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
