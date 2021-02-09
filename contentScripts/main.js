console.log('inside main.js');

const metas = document.getElementsByTagName('meta');

const gtmMeta = document.querySelector('meta[name="GTM-Blocker"]');


if (gtmMeta) {
  gtmMeta.setAttribute("content", 'enabled')
}

