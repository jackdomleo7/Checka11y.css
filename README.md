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

<a href="https://www.buymeacoffee.com/jackdomleo7" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto;width: 200px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;"></a>

<a href="https://www.producthunt.com/posts/checka11y-css?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-checka11y-css" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=269866&theme=light" alt="Checka11y.css - A CSS stylesheet to quickly highlight a11y concerns. | Product Hunt" style="width: 200px; height: auto;"/></a>

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

See a full list of features [here](./features.md).

Other features:

- Clear a11y errors and warnings with informative messages
- Options to import via CDN, npm or yarn
- Customise the error and warning colors
- No dependencies

---

## Usage

### CDN

In the below CDN links:
- Replace `:version` with a version [listed here](https://www.npmjs.com/package/checka11y-css?activeTab=versions) (latest version is always recommended). If you always want to get the latest stylesheet, remove `@:version` completely (Not recommended).

```html
<!-- HTML -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/checka11y-css@:version/checka11y.css" />
```

```css
/* Or CSS */
@import url('https://cdn.jsdelivr.net/npm/checka11y-css@:version/checka11y.css');
```

### Package manager (npm or yarn)

It's best practice to install Checka11y.css as a dev dependency rather than a dependency and ensure you only use it in your local/developer environment (do not push this stylesheet to your production environment). You can install `checka11y-css` via **npm** or **yarn**.

_First_ install via **npm**
```
npm install checka11y-css --save-dev
```

_Or_ install via **yarn**
```
yarn add checka11y-css
```

_Then_ import into your JavaScript
```js
import 'checka11y-css';
```

_Or_ import the SCSS or CSS into your Sass/SCSS
In the below imports, replace `:file` with one of the options below:
- `src/checka11y` <sub><sup>(.scss file)</sup></sub>
- `checka11y.css` <sub><sup>(.css file)</sup></sub>
```scss
/* Webpack */
@import '~checka11y-css/:file';

/* Non-webpack */
@import 'path/to/node_modules/checka11y-css/:file';
```

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
5. Edit `src/**/*.scss` and run `npm run build` in the root of the project to regenerate the CSS found at `/checka11y.css` and `/checka11y.min.css` (DO NOT edit these files directly).
6. To add error/warning styles and messages to your features, `@extend` one of the placeholders and `@include contentMessage()` from `src/_base.scss`.
