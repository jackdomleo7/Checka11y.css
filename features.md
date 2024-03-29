# Features

A list of every a11y concern Checka11y.css will check for and highlight with links to relevant guidelines or techniques:

## Errors

- [E0000](./codes.md#E0000): Checks for invalid interactive HTML elements elements nested inside of a `<button>`.
- [E0001](./codes.md#E0001): Checks that every `<button>` has meaningful content.
- [E0002](./codes.md#E0002): Checks that all instances of the `dir` attribute is only set to `ltr`, `rtl` or `auto`.
- [E0003](./codes.md#E0003): Checks that headings are not empty.
- [E0004](./codes.md#E0004): Checks that headings are reachable by assistive technologies.
- [E0005](./codes.md#E0005): Checks headings are in a semantic order.
- [E0006](./codes.md#E0006): Checks that the `lang` attribute exists on the `<html>` element and that is is not empty.
- [E0007](./codes.md#E0007): Checks for missing `title` attribute on `<iframe>` elements.
- [E0008](./codes.md#E0008): Checks for missing `alt` attributes on images.
- [E0009](./codes.md#E0009): Checks for invalid interactive HTML elements elements nested inside of an `<a>`.
- [E0010](./codes.md#E0010): Checks that every `<a>` has meaningful content.
- [E0011](./codes.md#E0011): Checks `<li>`, `<script>` and `<template>` are the **only** direct children of `<ol>` and `<ul>`.
- [E0012](./codes.md#E0012): Checks `<dt>` and `<dd>` are the **only** direct children of `<dl>`.
- [E0013](./codes.md#E0013): Checks if `<nav>` exists more than once on a page, that each nav is correctly labelled.
- [E0014](./codes.md#E0014): Checks for a tab index value of -1 on commonly tabbed to elements.
- [E0015](./codes.md#E0015): Checks for an image with a `longdesc` pointing to an image.
- [E0016](./codes.md#E0016): Checks for an image with an empty `longdesc`.
- [E0017](./codes.md#E0017): Checks for an empty `<title>` in the `<head>`.
- [E0018](./codes.md#E0018): Checks for an `<head>` without a `<title>` element inside.

## Warnings

- [W0000](./codes.md#W0000): Checks for the use of `accesskey` and warns due to accessibility, internationalisation and browser support concerns.
- [W0001](./codes.md#W0001): Checks to see if any `<video>` and `<audio>` elements have the `autoplay` attribute set.
- [W0002](./codes.md#W0002): Checks and warns about using mouse event handlers on HTML elements that are potentially not reachable from the keyboard.
- [W0003](./codes.md#W0003): Checks that `alt` attributes on images have meaningful content.
- [W0004](./codes.md#W0004): Checks for `!important` inline styles thay may override end-user's custom stylesheets.
- [W0005](./codes.md#W0005): Checks for `<span>` and `<em>` elements that could potentially break up spoken text.
- [W0006](./codes.md#W0006): Checks for `<a target="_blank">` and warns about links that open in a new window.
- [W0007](./codes.md#W0007): Checks for `<u>` being confused as hyperlinks.
- [W0008](./codes.md#W0008): Checks for the use of the `title` attribute due to accessibility concerns.
- [W0009](./codes.md#W0009): Checks for focusable elements inside `aria-hidden="true"` elements.
- [W0010](./codes.md#W0010): Checks for heading elements containing `role="text"` attribute.
- [W0011](./codes.md#W0011): Checks for anchor tags that are used as buttons.
- [W0012](./codes.md#W0012): Checks for heading element inside `<section>` element.
- [W0013](./codes.md#W0013): Checks for anchor tags that contain a link to a PDF, Word, Excel, or PowerPoint document.
- [W0014](./codes.md#W0014): Checks for anchor tags that contain a link to content site.
- [W0015](./codes.md#W0015): Checks for images with the `longdesc` attribute.
- [W0016](./codes.md#W0016): Checks for zoom/scale being disabled in the meta `viewport`.
