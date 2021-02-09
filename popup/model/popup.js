const toggle = document.getElementById('toggle');
let enabled = true

toggle.addEventListener('click', () => {
  console.log('clicked');
  enabled = !enabled
  console.log('enabled', enabled);
})