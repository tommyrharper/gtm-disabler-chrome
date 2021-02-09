const observer = new MutationObserver(onMutation);

observer.observe(document, {
  childList: true,
  subtree: true,
});

const metas = document.getElementsByTagName('meta');

function onMutation(mutations) {
  if (mutations.length === 1) {
    // optimize the most frequent scenario: one element is added/removed
    const added = mutations[0].addedNodes[0];
    if (!added || (added.localName !== 'meta' && !added.firstElementChild)) {
      // so nothing was added or non-H1 with no child elements
      return;
    }
  }
  // H1 is supposed to be used rarely so there'll be just a few elements
  for (var i = 0, meta; (meta = metas[i]); i++) {
    if (meta.name === 'GTM-Blocker') {
      meta.content = 'enabled'
      observer.disconnect();
    }
  }
}
