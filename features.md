## Feature References

A list of every a11y concern Checka11y.css will check for and highlight with links to relevant guidelines or techniques:

- Missing `alt` attributes on images: [Read about this here](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)
- Missing `title` on `<iframe>`: [Read about this here](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)
- Checks `<li>` is the **only** direct child of `<ol>` and `<ul>`: [Read about this here](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
- Checks if `<nav>` exists more than once on a page, that each nav is correctly labelled: [Read about this here](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-consistent-locations.html)
- Missing or empty `lang` on `<html>`: [Read about this here](https://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-doc-lang-id.html)
- Checks `<a target="_blank">` and warns about links that open in a new window: [Read about this here](https://www.w3.org/TR/WCAG20-TECHS/G201.html)
- Checks `<dt>` and `<dd>` are the **only** direct children of `<dl>`: [Read about this here](https://www.w3.org/TR/WCAG20-TECHS/H40.html)
- Checks for the following invalid HTML elements nested inside of an `<a>` or a `<button>`: [Read about this here](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-parses.html)
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
- Checks the `dir` attribute is only set to `ltr`, `rtl` or `auto`: [Read about this here](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)
- Checks for a tab index value of -1 on the following elements: [Read about this here](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-order.html)
  - `<a>[href]`
  - `<area>[href]`
  - `<input> that is not disabled`
  - `<select> that is not disabled`
  - `<textarea> that is not disabled`
  - `<button> that is not disabled`
  - `<iframe>`
  - `Any HTML element with editable content`
- Checks the `video and audio` attributes to ensure `autoplay` is not set: [Read about this here](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-dis-audio.html)
- Checks headings have meaningful content: [Read about this here](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html)
  - They cannot be empty
  - They are reachable by assistive technologies (no `aria-hidden`)
- Checks there aren't any `!important` in the inline styles
- Checks usage `accesskey` attribute in elements should be avoided

---
