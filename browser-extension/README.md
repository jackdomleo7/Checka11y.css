# Checka11y.css Browser Extension

This is the browser extension for Checka11y.css. It allows you to toggle on and off the Checka11y.css stylesheet on any webpage so you can debug your webpage's accessibility.

Browsers supported:
- Chromium
- Firefox

---

## Dev

###### Prerequisites
```
npm i -g web-ext
```

###### Debug the extension in Firefox
```
web-ext run
```

###### Debug the extension in Chrome
- In Chrome, navigate to `chrome://extensions`
- Enable `Developer mode`
- Click "Load unpacked extension" and choose the folder `Checka11y.css/browser-extension`

###### Package up the browser extension ready for publishing
```
web-ext build
```