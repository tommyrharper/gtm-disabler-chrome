const toggle = document.getElementById('toggle');
const slider = document.getElementById('slider');

let port = chrome.extension.connect({
  name: "popup-channel",
});

port.postMessage("Hi BackGround from popup.js");
port.onMessage.addListener(function (msg) { toggle.checked = msg; });

toggle.addEventListener('click', () => {
  port.postMessage(toggle.checked);
  slider.className += " animateSlider";
})
