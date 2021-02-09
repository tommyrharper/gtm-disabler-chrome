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
  // else if (port.name === 'content-channel') {
  //   port.onMessage.addListener(function(msg) {
  //     console.log("message received from main.js: " + msg);

  //     if (msg.joke == "Knock knock")
  //       port.postMessage({question: "Who's there?"});
  //     else if (msg.answer == "Madame")
  //       port.postMessage({question: "Madame who?"});
  //     else if (msg.answer == "Madame... Bovary")
  //       port.postMessage({question: "I don't get it."});
  //   });
  // }
});


// chrome.runtime.onConnect.addListener(function(port) {
//   console.assert(port.name == "knockknock");
//   console.log('port', port);
//   port.onMessage.addListener(function(msg) {
//     console.log('inside background listener: ', msg);
//     if (msg.joke == "Knock knock")
//       port.postMessage({question: "Who's there?"});
//     else if (msg.answer == "Madame")
//       port.postMessage({question: "Madame who?"});
//     else if (msg.answer == "Madame... Bovary")
//       port.postMessage({question: "I don't get it."});
//   });
// });