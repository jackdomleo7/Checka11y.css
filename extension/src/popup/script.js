function sendAction(action, checked) {
  browser.tabs.query({active: true, currentWindow: true}, tabs => {
      browser.browserAction.setBadgeText({text: checked ? 'On' : '', tabId: tabs[0].id});
      browser.tabs.sendMessage(tabs[0].id, {action: action, checked: checked});
  });
}

const toggle = document.getElementById('toggleStylesheet');

browser.browserAction.setBadgeBackgroundColor({color: '#f00'});
browser.browserAction.setBadgeTextColor({color: '#fff'});

browser.tabs.query({active: true, currentWindow: true}, function(tabs) {
  browser.tabs.sendMessage(tabs[0].id, {type: 'isStylesheetSet'}, function(isStylesheetSet) {
      toggle.checked = isStylesheetSet;
      browser.browserAction.setBadgeText({text: isStylesheetSet ? 'On' : '', tabId: tabs[0].id});
  });
});

toggle.onchange = () => sendAction('toggleStylesheet', toggle.checked);