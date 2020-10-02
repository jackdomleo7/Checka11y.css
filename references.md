## Feature References

A list of every a11y concern Checka11y.css will check for and highlight with links to relevant guidelines or techniques:

- [Missing `alt` attributes on images](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)
- [Missing `title` on `<iframe>`](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)
- [Checks `<li>` is the **only** direct child of `<ol>` and `<ul>`](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
- [Checks if `<nav>` exists more than once on a page, that each nav is correctly labelled.](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-consistent-locations.html)
- [Missing or empty `lang` on `<html>`](https://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-doc-lang-id.html)
- [Checks `<a target="_blank">` and warns about links that open in a new window](https://www.w3.org/TR/WCAG20-TECHS/G201.html)
- [Checks `<dt>` and `<dd>` are the **only** direct children of `<dl>`](https://www.w3.org/TR/WCAG20-TECHS/H40.html)
- [Checks for the following invalid HTML elements nested inside of an <a> or a <button>:](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-parses.html)
  - `<a>`
  - `<audio controls>`
  - `<button>`
  - `<details>`
  - `<embed>`
  - `<iframe>`
  - `<img usemap>`
  - `any input without type hidden`
  - `<keygen>`
  - `<label>`
  - `<menu type="toolbar">`
  - `<object usemap>`
  - `<select>`
  - `<textarea>`
  - `<video controls>`
- [Checks the `dir` attribute is only set to `ltr`, `rtl` or `auto`](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)
- [Checks for a tab index value of -1 on the following elements:](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-order.html)
  - `<a>[href]`
  - `<area>[href]`
  - `<input> that is not disabled`
  - `<select> that is not disabled`
  - `<textarea> that is not disabled`
  - `<button> that is not disabled`
  - `<iframe>`
  - `Any HTML element with editable content`
- [Checks the `video and audio` attributes to ensure `autoplay` is not set](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-dis-audio.html)
- [Checks headings have meaningful content:](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html)
  - They cannot be empty
  - They are reachable by assistive technologies (no `aria-hidden`)

Other features:

- Clear a11y errors and warnings with informative messages
- Options to import via CDN, npm or yarn
- Customise the error and warning colors
- Customise the font used for error and warning messages
- No dependencies

---