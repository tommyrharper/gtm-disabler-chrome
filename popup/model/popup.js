// const toggle = document.getElementById('toggle');
// let enabled = true

// const body = document.body;

// toggle.checked = enabled;

// toggle.addEventListener('click', () => {
//   console.log('clicked');
//   enabled = !enabled
//   console.log('enabled', enabled);
//   let newDiv = document.createElement("div");
//   newDiv.innerHTML = 'asdfsda';
//   body.appendChild(newDiv);
// })


// let port = chrome.extension.connect({
//   name: "Sample Communication",
// });
// port.postMessage("Hi BackGround from popup.js");
// port.onMessage.addListener(function (msg) {
//   console.log("Received from background.js: ", msg);
// });

const toggle = document.getElementById('toggle');

let port = chrome.extension.connect({
  name: "Sample Communication",
});
port.postMessage("Hi BackGround from popup.js");
port.onMessage.addListener(function (msg) {
  console.log("Received from background.js: ", msg);
  toggle.checked = msg;
});

toggle.addEventListener('click', () => {
  port.postMessage(toggle.checked);
  console.log('clicked');
  console.log('toggle.checked', toggle.checked)
  // enabled = !enabled
  // console.log('enabled', enabled);
  // let newDiv = document.createElement("div");
  // newDiv.innerHTML = 'asdfsda';
  // body.appendChild(newDiv);
})
