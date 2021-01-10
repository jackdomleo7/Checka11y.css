window.browser = (function () {
    return window.msBrowser ||
      window.browser ||
      window.chrome;
  })();

const stylesheetId = 'checka11y-browser-extension-stylesheet';

browser.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        switch(message.type) {
            case "isStylesheetSet":
                sendResponse(document.querySelector(`link#${stylesheetId}`) != null);
                break;
            case 'toggleStylesheet':
                applyChecka11y(message.checked);
                break;
            default:
                console.error(`Unrecognised message: ${message}`);
        }
    }
);

function applyChecka11y(checked) {
    const stylesheet = document.querySelector(`link#${stylesheetId}`);

    if (checked) {
        if (!stylesheet) {
            var a = document.createElement('link');
            a.rel='stylesheet';
            a.href='https://cdn.jsdelivr.net/npm/checka11y-css/checka11y.css';
            a.id = stylesheetId;
            document.head.appendChild(a);
        }
    }
    else {
        stylesheet.remove();
    }
}