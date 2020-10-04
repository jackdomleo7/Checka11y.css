# Checka11y.css

**A CSS stylesheet to quickly highlight a11y concerns.**

The first line of defence for testing accessibility.

Designed to quickly highlight some common accessibility errors and warnings that can be easily and quickly rectified.

Recommended before turning to automation tools and scanners such as Lighthouse on Chrome.

Remember not to push this to production!

A great tool for:

- Websites and web applications to begin improving their accessibility.
- Developers and testers/QA to learn more about accessibility and creating accessible websites and applications.

_Lightweight_ &bull; _Modern_ &bull; _Accessibile_ &bull; _Customisable_ &bull; _Simple_

**BETA coming soon!**

<a href="https://www.buymeacoffee.com/jackdomleo7" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;"></a>

![Maintenance](https://img.shields.io/maintenance/yes/2020) [![MIT License](https://img.shields.io/badge/License-MIT-important)](https://github.com/jackdomleo7/Checka11y.css/blob/master/LICENSE) [![Brotli size](https://badgen.net/badgesize/brotli/jackdomleo7/Checka11y.css/master/checka11y.css)](https://github.com/jackdomleo7/Checka11y.css/blob/master/checka11y.css)

[![GitHub stars](https://img.shields.io/github/stars/jackdomleo7/Checka11y.css?style=social)](https://github.com/jackdomleo7/Checka11y.css/stargazers) [![GitHub release (latest by date)](https://img.shields.io/github/v/release/jackdomleo7/Checka11y.css?style=social)](https://github.com/jackdomleo7/Checka11y.css/releases) [![npm](https://img.shields.io/npm/dt/checka11y-css?logo=npm&style=social)](https://www.npmjs.com/package/checka11y-css) ![jsDelivr hits (npm)](https://img.shields.io/jsdelivr/npm/hm/checka11y-css?label=JsDelivr&logo=jsdelivr&style=social)

---

## Features

Our features are always checked against the W3C accessibility guidelines.

A list of common a11y concerns Checka11y.css will check for and highlight :

- Check for invalid HTML elements nested inside of `<a>` and `<button>`
- Check for missing `alt` attributes on images
- Check for media that is set to `autoplay`
- Check `<li>` is the **only** direct child of `<ol>` and `<ul>`
- Check for programmable-only `tabindex` attributes on invalid HTML elements

See a full list of features [here](./features.md)

Other features:

- Clear a11y errors and warnings with informative messages
- Options to import via CDN, npm or yarn
- Customise the error and warning colors
- Customise the font used for error and warning messages
- No dependencies


---

## Usage

Coming soon...

Watch this repository to stay up to date.

---

## Why is accessibility important?

Accessibility is important to ensure your website or web application is accessible to as many users and types of users you can cater for.

Often, we can improve the accessibility on our websites and web applications by focusing on the obvious first - these are small quick wins that are easy to implement or rectify and may not require a lot of time investment.

Checka11y.css will instantly highlight as many HTML validity and HTML semantic errors and warnings as we can, to help you to improve your website or web application.

[Click here to read more about web accessibility.](https://www.w3.org/WAI/fundamentals/accessibility-intro)

---

## License

Type - **MIT**

[Read license](https://github.com/jackdomleo7/Checka11y.css/blob/master/LICENSE)

You have the right to use this library in **any** project FREE of charge for personal and commercial use.

Commercial use should consider a small donation on [Buy Me a Coffee](https://www.buymeacoffee.com/jackdomleo7).

You **do not** have the right to resell, sublicense or redistribute (even for free) this library.

Checka11y.css is licensed under MIT. As a minimum, you are required to KEEP AND NOT REMOVE the following code at the beginning of your downloaded/installed Checka11y.css CSS, where `:version` is replaced with the version number you are using:

```css
/*! Checka11y.css v:version | MIT License | github.com/jackdomleo7/Checka11y.css */
```

---

## Contributing

1. Read [CONTRIBUTING](./CONTRIBUTING.md) guidelines
2. `git clone https://github.com/jackdomleo7/Checka11y.css.git` or fork the repo
3. `cd Checka11y.css`
4. `npm i`
