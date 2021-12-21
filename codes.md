# Error/Warning Codes

A list of every Checka11y.css error & warning code with details on what the issue is and how to resolve it.

## Errors <small>(Exxx)</small>

- ### E0000
  There are invalid HTML elements nested inside of a `<button>` element. It is inaccessible to have any [interactive elements](https://html.spec.whatwg.org/#interactive-content) nested inside of another interactive element. Ensure you do **not** have any of the following HTML elements nested inside of the `<button>`:
  - `<a>`
  - `<audio controls>`
  - `<button>`
  - `<details>`
  - `<embed>`
  - `<iframe>`
  - `<img usemap>`
  - any input without `type="hidden"`
  - `<keygen>`
  - `<label>`
  - `<menu type="toolbar">`
  - `<object usemap>`
  - `<select>`
  - `<textarea>`
  - `<video controls>`

- ### E0001
  The `<button>` has been detected to have no meaningful content, either because the button is empty (has no text) or hasn't been labelled correctly. This is inaccessible because users will find it difficult to know the context of what the button does. Either provide the `<button>` with some text within it, or apply [`aria-label`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute) and [`aria-labelledby`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute) appropriately.

- ### E0002
  The highlighted element has an incorrect value for the `dir` attribute. The only valid values for `dir` are `ltr`, `rtl` and `auto`. [Read about this here](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html).

- ### E0003
  The highlighted heading appears to have empty content. It is inaccessible for headings to be empty because they are used to help navigate and section the webpage. Ensure the heading has some meaningful content within it.

- ### E0004
  A `aria-hidden` has been detected on a heading. Applying `aria-hidden` on a heading is inaccessible because it makes the heading unreachable by assistive technologies.

- ### E0005
  The highlighted heading has been detected to not follow a semantic heading order. [Read more about semantic heading order](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements#navigation).

- ### E0006
  The `lang` attribute is either not present on the `<html>` element or has an empty value. It is inaccessible to not provide a language for a webpage document. Be sure to set the `lang` attribute to a [valid language subtag as defined here by w3](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry). [Read about this here](https://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-doc-lang-id.html).

- ### E0007
  The highlighted `<iframe>` element does not have a `title` attribute. A `title` attribute is required on an `<iframe>` element to describe its content, otherwise it is inaccessible. [Read about this here](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html).

- ### E0008
  The highlighted image does not have an `alt` attribute. An `alt` attribute (alternative text) is required to describe the image. If the image is purely a decorative image and provides no meaningful context, you must still provide an `alt` attribute, but it can have an empty value. [Read about this here](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html).

- ### E0009
  There are invalid HTML elements nested inside of an `<a>` element. It is inaccessible to have any [interactive elements](https://html.spec.whatwg.org/#interactive-content) nested inside of another interactive element. Ensure you do **not** have any of the following HTML elements nested inside of the `<a>`:
  - `<a>`
  - `<audio controls>`
  - `<button>`
  - `<details>`
  - `<embed>`
  - `<iframe>`
  - `<img usemap>`
  - any input without `type="hidden"`
  - `<keygen>`
  - `<label>`
  - `<menu type="toolbar">`
  - `<object usemap>`
  - `<select>`
  - `<textarea>`
  - `<video controls>`

- ### E0010
  The `<a>` has been detected to have no meaningful content, either because the link is empty (has no text) or hasn't been labelled correctly. This is inaccessible because users will find it difficult to know the context of what the link does. Either provide the `<a>` with some text within it, or apply [`aria-label`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute) and [`aria-labelledby`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute) appropriately.

- ### E0011
  The highlighted element has been detected inside of a `<ul>` or an `<ol>` and is in the incorrect place. The **only** direct children of a `<ul>` and an `<ol>` can be `<li>`, `<script>` and `<tenplate>`. If the highlighted element should be in a list, then you should wrap it in an `<li>`. [Read about this here](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html).

- ### E0012
  The highlihted element has been detected inside of a `<dl>` and is in the incorrect place. The **onl** direct children of a `<dl>` can be `<dt>` and `<dd>`. If the highlighted element should be a definition term, wrap it in a `<dt>`, or if it should be a definition description, wrap it in a `<dd>`. [Read about this here](https://www.w3.org/TR/WCAG20-TECHS/H40.html).

- ### E0013
  More than a single `<nav>` has been detected on the webpage. `<nav>` indicates the primary navigation for the page. In cases where multiple primary navigations exist, ensure both navigations are labelled by applying [`aria-label`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute) and [`aria-labelledby`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute) appropriately. [Read about this here](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-consistent-locations.html).

- ### E0014
  The highlighted element appears to have `tabindex="-1"` applied to it. A `tabindex` of `-1` indicates that the element can only be focused programmatically, therefore preventing the user from being able to easily focus on the element (I.e. tabbing to it). [Read about this here](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-order.html). The following elements **should not** have `tabindex="-1"` on them:
  - `<a href>`
  - `<area href>`
  - `<input>` that is not disabled
  - `<select>` that is not disabled
  - `<textarea>` that is not disabled
  - `<button>` that is not disabled
  - `<iframe>`
  - Any HTML element with `contentEditable`

- ### E0015
  The `longdesc` attribute has been detected in an `<img>` and it has an invalid value. The `longdesc` attribute must be a URL to a web page, but the detected `longdesc` is a link to an image which is an accessibility problem (because there won't be an image description.)

- ### E0016
  The `longdesc` attribute has been detected in an `<img>` and it has an invalid value. The `longdesc` attribute must be a URL to a web page, but the detected `longdesc` is empty or it contains blank spaces so it's not a valid URL.

- ### E0017
  An empty `<title>` element has been found within the page's `<head>`. An empty title would be an accessibility issue because it makes it more difficult for some users to orient themselves and navigate through the pages.

- ### E0018
  The `<head>` element does not contian a `<title>`. An missing title would be an accessibility issue because it makes it more difficult for some users to orient themselves and navigate through the pages.

## Warnings <small>(Wxxx)</small>

- ### W0000
  The highlighted element appears to have the `accesskey` attribute applied to it. It is advised to avoid `accesskey` due to poor browser support and can conflict with system and browser keyboard shortcuts. [Read about this here](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/accesskey#accessibility_concerns).

- ### W0001
  The highlighted `<video>` or `<audio>` element has been detected to have the `autoplay` attribute applied. As well as being incredibly annoying, unexpected video and audio can be distracting and disruptive, especially to certain cognitive disabilities such as ADHD. Some video and animation can also be a trigger for vestibular and seizure disorders. It is acceptable to have video and audio only if the user is expecting it; take YouTube for example, when a user clicks on a link to a new video, they are expecting a video to start playing. [Read about this here](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-dis-audio.html).

- ### W0002
  The highlighted element has been detected to not be a `<button>` or an `<a>` and have `onclick` applied to it, but there doesn't seem to be any keyboard event handlers. Ideally, ensure you are using correct semantic HTML by using [interactive elements](https://html.spec.whatwg.org/#interactive-content) for interactive components, or at the very least, ensure you have keyboard event handlers as well as click event handlers. [Read about this here](https://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/F42).

- ### W0003
  The highlighted image has been detected to contain a possible non-descriptive value for the `alt` attribute. An `alt` attribute needs to describe the image. If the image is purely a decorative image and provides no meaningful context, you must still provide an `alt` attribute, but it can have an empty value. The `alt` attribute **should not** contain any file extensions, **should** not be single words such as "image", "picture" or "graphic" and **should not** use phrases such as "image of" and "logo for".

- ### W0004
  The highighted element has been detected to have inline styles that contain `!important`. It is common for end-users to have plugins pr extensions installed on their systems or browsers to improve their experience, often to assist with visibility issues. Having `!important` inline styles will override these plugins and extensions, making the webpage inaccessibke to the user's needs.

- ### W0005
  Sentences containing `<em>` and `<span>` are common, however these elements can often cause a screenreader to break up the spoken text. To ensure this doesn't happen, apply `role="text"` to the parent element.

- ### W0006
  The highlighted `<a>` has been detected to contain `target="_blank"`, which means the link will open in a new tab. This can be disorientating to a user, especially those with visual impairments and those with cognitive disabilities.

- ### W0007
  The highlighted element is detected to be a `<u>` element. This can commonly be visually confused as a hyperlink. Consider using [other elements than `<u>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/u#other_elements_to_consider_using).

- ### W0008
  The highlighted element has been detected to contain a `title` attribute. There many [accessibility concerns with the `title` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title#accessibility_concerns). Consider using an [alternative method to using the `title` attribute](https://inclusive-components.design/tooltips-toggletips).

- ### W0009
  The highlighted element is a focusable element that is nested within another element with `aria-hidden="true"`. This means the focusable element is inaccessible to assistive technologies. Either remove the `aria-hidden="true"`, or restructure the HTML so that the focusable element is not nested within the element with `aria-hidden="true"`. [Read more about this here](https://web.dev/aria-hidden-focus).

- ### W0010
  The highlighted element has been detected to have a `role="text"`, however this causes the element to lose its semantic meaning as a heading element and will not be interpreted as a heading by a screenreader. [Read more about this and find suggested alternative here](https://openinclusion.com/blog/using-role-text-enhance-mobile-screen-reader-output/).

- ### W0011
  The highlighted element `<a>` has been detected to have `href="#"`, `role="button"` , `href="javascript:doSomething(0)"`. Those anchor elements are often used to trigger a click event on the page. This can be disorientating to a user, especially those with visual impairments and those with cognitive disabilities. Links should redirect to a resource/page. [Read more about this here](https://www.htmhell.dev/8-anchor-tag-used-as-button).

- ### W0012
  The `<section>` element represents a generic standalone section of a document, which doesn't have a more specific semantic element to represent it. This means `<section>` element should be identified, typically by including a heading (`<h1>`-`<h6>` element) as a child of the `<section>` element. [Read more about this here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section)

- ### W0013
  The highlighted element `<a>` has been detected to have `href=".pdf|.docx|.doc|.xlsx|.xls|.pptx|.pptm|.ppt|.txt"`. Those anchor elements often have accessibility issues and need to be created with accessibility in mind. This can mean sometimes the element will link to non-accessible content since we cannot guarantee the files will be served in an accessible fashion.

- ### W0014
  The highlighted element `<a>` has been detected to have `href="https://youtube.com|https://youtu.be|https://spotify.com"`. Those anchor elements often have accessibility issues and need to be created with accessibility in mind. This can mean sometimes the element will link to sites non-accessible content because captioning is often missing or not well generated.

- ### W0015
  The `longdesc` attribute has been detected in an `<img>`. The `longdesc` attribute in images is deprecated and should not be used. It is not fully supported by HTML5, browsers, or screen readers. When present, it is commonly misused (it should point to an URL that is not an image).
