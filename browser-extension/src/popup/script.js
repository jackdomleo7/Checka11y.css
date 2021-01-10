window.browser = (function () {
  return window.msBrowser ||
    window.browser ||
    window.chrome;
})();

function sendAction(type, checked) {
  browser.tabs.query({active: true, currentWindow: true}, tabs => {
      browser.browserAction.setBadgeText({text: checked ? 'On' : '', tabId: tabs[0].id});
      browser.tabs.sendMessage(tabs[0].id, {type: type, checked: checked});
  });
}

window.addEventListener('load', (event) => {
  const toggle = document.getElementById('toggleStylesheet');

  browser.tabs.query({active: true, currentWindow: true}, tabs => {
    browser.tabs.sendMessage(tabs[0].id, {type: 'isStylesheetSet'}, isStylesheetSet => {
        toggle.checked = isStylesheetSet;
        browser.browserAction.setBadgeText({text: isStylesheetSet ? 'On' : '', tabId: tabs[0].id});
    });
  });

  toggle.onchange = () => sendAction('toggleStylesheet', toggle.checked);
});