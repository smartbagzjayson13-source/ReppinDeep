html {
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  font-family: sans-serif;
}

body {
  margin: 0;
}

article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {
  display: block;
}

audio, canvas, progress, video {
  vertical-align: baseline;
  display: inline-block;
}

audio:not([controls]) {
  height: 0;
  display: none;
}

[hidden], template {
  display: none;
}

a {
  background-color: #0000;
}

a:active, a:hover {
  outline: 0;
}

abbr[title] {
  border-bottom: 1px dotted;
}

b, strong {
  font-weight: bold;
}

dfn {
  font-style: italic;
}

h1 {
  margin: .67em 0;
  font-size: 2em;
}

mark {
  color: #000;
  background: #ff0;
}

small {
  font-size: 80%;
}

sub, sup {
  vertical-align: baseline;
  font-size: 75%;
  line-height: 0;
  position: relative;
}

sup {
  top: -.5em;
}

sub {
  bottom: -.25em;
}

img {
  border: 0;
}

svg:not(:root) {
  overflow: hidden;
}

hr {
  box-sizing: content-box;
  height: 0;
}

pre {
  overflow: auto;
}

code, kbd, pre, samp {
  font-family: monospace;
  font-size: 1em;
}

button, input, optgroup, select, textarea {
  color: inherit;
  font: inherit;
  margin: 0;
}

button {
  overflow: visible;
}

button, select {
  text-transform: none;
}

button, html input[type="button"], input[type="reset"] {
  -webkit-appearance: button;
  cursor: pointer;
}

button[disabled], html input[disabled] {
  cursor: default;
}

button::-moz-focus-inner, input::-moz-focus-inner {
  border: 0;
  padding: 0;
}

input {
  line-height: normal;
}

input[type="checkbox"], input[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}

input[type="number"]::-webkit-inner-spin-button, input[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

input[type="search"] {
  -webkit-appearance: none;
}

input[type="search"]::-webkit-search-cancel-button, input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

legend {
  border: 0;
  padding: 0;
}

textarea {
  overflow: auto;
}

optgroup {
  font-weight: bold;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

td, th {
  padding: 0;
}

@font-face {
  font-family: webflow-icons;
  src: url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBiUAAAC8AAAAYGNtYXDpP+a4AAABHAAAAFxnYXNwAAAAEAAAAXgAAAAIZ2x5ZmhS2XEAAAGAAAADHGhlYWQTFw3HAAAEnAAAADZoaGVhCXYFgQAABNQAAAAkaG10eCe4A1oAAAT4AAAAMGxvY2EDtALGAAAFKAAAABptYXhwABAAPgAABUQAAAAgbmFtZSoCsMsAAAVkAAABznBvc3QAAwAAAAAHNAAAACAAAwP4AZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpAwPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAQAAAAAwACAACAAQAAQAg5gPpA//9//8AAAAAACDmAOkA//3//wAB/+MaBBcIAAMAAQAAAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEBIAAAAyADgAAFAAAJAQcJARcDIP5AQAGA/oBAAcABwED+gP6AQAABAOAAAALgA4AABQAAEwEXCQEH4AHAQP6AAYBAAcABwED+gP6AQAAAAwDAAOADQALAAA8AHwAvAAABISIGHQEUFjMhMjY9ATQmByEiBh0BFBYzITI2PQE0JgchIgYdARQWMyEyNj0BNCYDIP3ADRMTDQJADRMTDf3ADRMTDQJADRMTDf3ADRMTDQJADRMTAsATDSANExMNIA0TwBMNIA0TEw0gDRPAEw0gDRMTDSANEwAAAAABAJ0AtAOBApUABQAACQIHCQEDJP7r/upcAXEBcgKU/usBFVz+fAGEAAAAAAL//f+9BAMDwwAEAAkAABcBJwEXAwE3AQdpA5ps/GZsbAOabPxmbEMDmmz8ZmwDmvxmbAOabAAAAgAA/8AEAAPAAB0AOwAABSInLgEnJjU0Nz4BNzYzMTIXHgEXFhUUBw4BBwYjNTI3PgE3NjU0Jy4BJyYjMSIHDgEHBhUUFx4BFxYzAgBqXV6LKCgoKIteXWpqXV6LKCgoKIteXWpVSktvICEhIG9LSlVVSktvICEhIG9LSlVAKCiLXl1qal1eiygoKCiLXl1qal1eiygoZiEgb0tKVVVKS28gISEgb0tKVVVKS28gIQABAAABwAIAA8AAEgAAEzQ3PgE3NjMxFSIHDgEHBhUxIwAoKIteXWpVSktvICFmAcBqXV6LKChmISBvS0pVAAAAAgAA/8AFtgPAADIAOgAAARYXHgEXFhUUBw4BBwYHIxUhIicuAScmNTQ3PgE3NjMxOAExNDc+ATc2MzIXHgEXFhcVATMJATMVMzUEjD83NlAXFxYXTjU1PQL8kz01Nk8XFxcXTzY1PSIjd1BQWlJJSXInJw3+mdv+2/7c25MCUQYcHFg5OUA/ODlXHBwIAhcXTzY1PTw1Nk8XF1tQUHcjIhwcYUNDTgL+3QFt/pOTkwABAAAAAQAAmM7nP18PPPUACwQAAAAAANciZKUAAAAA1yJkpf/9/70FtgPDAAAACAACAAAAAAAAAAEAAAPA/8AAAAW3//3//QW2AAEAAAAAAAAAAAAAAAAAAAAMBAAAAAAAAAAAAAAAAgAAAAQAASAEAADgBAAAwAQAAJ0EAP/9BAAAAAQAAAAFtwAAAAAAAAAKABQAHgAyAEYAjACiAL4BFgE2AY4AAAABAAAADAA8AAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEADQAAAAEAAAAAAAIABwCWAAEAAAAAAAMADQBIAAEAAAAAAAQADQCrAAEAAAAAAAUACwAnAAEAAAAAAAYADQBvAAEAAAAAAAoAGgDSAAMAAQQJAAEAGgANAAMAAQQJAAIADgCdAAMAAQQJAAMAGgBVAAMAAQQJAAQAGgC4AAMAAQQJAAUAFgAyAAMAAQQJAAYAGgB8AAMAAQQJAAoANADsd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQByd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==") format("truetype");
  font-weight: normal;
  font-style: normal;
}

[class^="w-icon-"], [class*=" w-icon-"] {
  speak: none;
  font-variant: normal;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  font-family: webflow-icons !important;
}

.w-icon-slider-right:before {
  content: "";
}

.w-icon-slider-left:before {
  content: "";
}

.w-icon-nav-menu:before {
  content: "";
}

.w-icon-arrow-down:before, .w-icon-dropdown-toggle:before {
  content: "";
}

.w-icon-file-upload-remove:before {
  content: "";
}

.w-icon-file-upload-icon:before {
  content: "";
}

* {
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  color: #333;
  background-color: #fff;
  min-height: 100%;
  margin: 0;
  font-family: Arial, sans-serif;
  font-size: 14px;
  line-height: 20px;
}

img {
  vertical-align: middle;
  max-width: 100%;
  display: inline-block;
}

html.w-mod-touch * {
  background-attachment: scroll !important;
}

.w-block {
  display: block;
}

.w-inline-block {
  max-width: 100%;
  display: inline-block;
}

.w-clearfix:before, .w-clearfix:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-clearfix:after {
  clear: both;
}

.w-hidden {
  display: none;
}

.w-button {
  color: #fff;
  line-height: inherit;
  cursor: pointer;
  background-color: #3898ec;
  border: 0;
  border-radius: 0;
  padding: 9px 15px;
  text-decoration: none;
  display: inline-block;
}

input.w-button {
  -webkit-appearance: button;
}

html[data-w-dynpage] [data-w-cloak] {
  color: #0000 !important;
}

.w-code-block {
  margin: unset;
}

pre.w-code-block code {
  all: inherit;
}

pre.w-code-block code > span {
  display: block !important;
}

.w-optimization {
  display: contents;
}

.w-webflow-badge, .w-webflow-badge > img {
  box-sizing: unset;
  width: unset;
  height: unset;
  max-height: unset;
  max-width: unset;
  min-height: unset;
  min-width: unset;
  margin: unset;
  padding: unset;
  float: unset;
  clear: unset;
  border: unset;
  border-radius: unset;
  background: unset;
  background-image: unset;
  background-position: unset;
  background-size: unset;
  background-repeat: unset;
  background-origin: unset;
  background-clip: unset;
  background-attachment: unset;
  background-color: unset;
  box-shadow: unset;
  transform: unset;
  direction: unset;
  font-family: unset;
  font-weight: unset;
  color: unset;
  font-size: unset;
  line-height: unset;
  font-style: unset;
  font-variant: unset;
  text-align: unset;
  letter-spacing: unset;
  -webkit-text-decoration: unset;
  text-decoration: unset;
  text-indent: unset;
  text-transform: unset;
  list-style-type: unset;
  text-shadow: unset;
  vertical-align: unset;
  cursor: unset;
  white-space: unset;
  word-break: unset;
  word-spacing: unset;
  word-wrap: unset;
  transition: unset;
}

.w-webflow-badge {
  white-space: nowrap;
  cursor: pointer;
  box-shadow: 0 0 0 1px #0000001a, 0 1px 3px #0000001a;
  visibility: visible !important;
  opacity: 1 !important;
  z-index: 2147483647 !important;
  color: #aaadb0 !important;
  width: auto !important;
  height: auto !important;
  overflow: unset !important;
  background-color: #fff !important;
  border-radius: 3px !important;
  margin: 0 !important;
  padding: 6px !important;
  font-size: 12px !important;
  line-height: 14px !important;
  text-decoration: none !important;
  display: inline-block !important;
  position: fixed !important;
  inset: auto 12px 12px auto !important;
  transform: none !important;
}

.w-webflow-badge > img {
  position: unset;
  visibility: unset !important;
  opacity: 1 !important;
  vertical-align: middle !important;
  display: inline-block !important;
}

h1, h2, h3, h4, h5, h6 {
  margin-bottom: 10px;
  font-weight: bold;
}

h1 {
  margin-top: 20px;
  font-size: 38px;
  line-height: 44px;
}

h2 {
  margin-top: 20px;
  font-size: 32px;
  line-height: 36px;
}

h3 {
  margin-top: 20px;
  font-size: 24px;
  line-height: 30px;
}

h4 {
  margin-top: 10px;
  font-size: 18px;
  line-height: 24px;
}

h5 {
  margin-top: 10px;
  font-size: 14px;
  line-height: 20px;
}

h6 {
  margin-top: 10px;
  font-size: 12px;
  line-height: 18px;
}

p {
  margin-top: 0;
  margin-bottom: 10px;
}

blockquote {
  border-left: 5px solid #e2e2e2;
  margin: 0 0 10px;
  padding: 10px 20px;
  font-size: 18px;
  line-height: 22px;
}

figure {
  margin: 0 0 10px;
}

figcaption {
  text-align: center;
  margin-top: 5px;
}

ul, ol {
  margin-top: 0;
  margin-bottom: 10px;
  padding-left: 40px;
}

.w-list-unstyled {
  padding-left: 0;
  list-style: none;
}

.w-embed:before, .w-embed:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-embed:after {
  clear: both;
}

.w-video {
  width: 100%;
  padding: 0;
  position: relative;
}

.w-video iframe, .w-video object, .w-video embed {
  border: none;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}

button, [type="button"], [type="reset"] {
  cursor: pointer;
  -webkit-appearance: button;
  border: 0;
}

.w-form {
  margin: 0 0 15px;
}

.w-form-done {
  text-align: center;
  background-color: #ddd;
  padding: 20px;
  display: none;
}

.w-form-fail {
  background-color: #ffdede;
  margin-top: 10px;
  padding: 10px;
  display: none;
}

label {
  margin-bottom: 5px;
  font-weight: bold;
  display: block;
}

.w-input, .w-select {
  color: #333;
  vertical-align: middle;
  background-color: #fff;
  border: 1px solid #ccc;
  width: 100%;
  height: 38px;
  margin-bottom: 10px;
  padding: 8px 12px;
  font-size: 14px;
  line-height: 1.42857;
  display: block;
}

.w-input::placeholder, .w-select::placeholder {
  color: #999;
}

.w-input:focus, .w-select:focus {
  border-color: #3898ec;
  outline: 0;
}

.w-input[disabled], .w-select[disabled], .w-input[readonly], .w-select[readonly], fieldset[disabled] .w-input, fieldset[disabled] .w-select {
  cursor: not-allowed;
}

.w-input[disabled]:not(.w-input-disabled), .w-select[disabled]:not(.w-input-disabled), .w-input[readonly], .w-select[readonly], fieldset[disabled]:not(.w-input-disabled) .w-input, fieldset[disabled]:not(.w-input-disabled) .w-select {
  background-color: #eee;
}

textarea.w-input, textarea.w-select {
  height: auto;
}

.w-select {
  background-color: #f3f3f3;
}

.w-select[multiple] {
  height: auto;
}

.w-form-label {
  cursor: pointer;
  margin-bottom: 0;
  font-weight: normal;
  display: inline-block;
}

.w-radio {
  margin-bottom: 5px;
  padding-left: 20px;
  display: block;
}

.w-radio:before, .w-radio:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-radio:after {
  clear: both;
}

.w-radio-input {
  float: left;
  margin: 3px 0 0 -20px;
  line-height: normal;
}

.w-file-upload {
  margin-bottom: 10px;
  display: block;
}

.w-file-upload-input {
  opacity: 0;
  z-index: -100;
  width: .1px;
  height: .1px;
  position: absolute;
  overflow: hidden;
}

.w-file-upload-default, .w-file-upload-uploading, .w-file-upload-success {
  color: #333;
  display: inline-block;
}

.w-file-upload-error {
  margin-top: 10px;
  display: block;
}

.w-file-upload-default.w-hidden, .w-file-upload-uploading.w-hidden, .w-file-upload-error.w-hidden, .w-file-upload-success.w-hidden {
  display: none;
}

.w-file-upload-uploading-btn {
  cursor: pointer;
  background-color: #fafafa;
  border: 1px solid #ccc;
  margin: 0;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: normal;
  display: flex;
}

.w-file-upload-file {
  background-color: #fafafa;
  border: 1px solid #ccc;
  flex-grow: 1;
  justify-content: space-between;
  margin: 0;
  padding: 8px 9px 8px 11px;
  display: flex;
}

.w-file-upload-file-name {
  font-size: 14px;
  font-weight: normal;
  display: block;
}

.w-file-remove-link {
  cursor: pointer;
  width: auto;
  height: auto;
  margin-top: 3px;
  margin-left: 10px;
  padding: 3px;
  display: block;
}

.w-icon-file-upload-remove {
  margin: auto;
  font-size: 10px;
}

.w-file-upload-error-msg {
  color: #ea384c;
  padding: 2px 0;
  display: inline-block;
}

.w-file-upload-info {
  padding: 0 12px;
  line-height: 38px;
  display: inline-block;
}

.w-file-upload-label {
  cursor: pointer;
  background-color: #fafafa;
  border: 1px solid #ccc;
  margin: 0;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: normal;
  display: inline-block;
}

.w-icon-file-upload-icon, .w-icon-file-upload-uploading {
  width: 20px;
  margin-right: 8px;
  display: inline-block;
}

.w-icon-file-upload-uploading {
  height: 20px;
}

.w-container {
  max-width: 940px;
  margin-left: auto;
  margin-right: auto;
}

.w-container:before, .w-container:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-container:after {
  clear: both;
}

.w-container .w-row {
  margin-left: -10px;
  margin-right: -10px;
}

.w-row:before, .w-row:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-row:after {
  clear: both;
}

.w-row .w-row {
  margin-left: 0;
  margin-right: 0;
}

.w-col {
  float: left;
  width: 100%;
  min-height: 1px;
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
}

.w-col .w-col {
  padding-left: 0;
  padding-right: 0;
}

.w-col-1 {
  width: 8.33333%;
}

.w-col-2 {
  width: 16.6667%;
}

.w-col-3 {
  width: 25%;
}

.w-col-4 {
  width: 33.3333%;
}

.w-col-5 {
  width: 41.6667%;
}

.w-col-6 {
  width: 50%;
}

.w-col-7 {
  width: 58.3333%;
}

.w-col-8 {
  width: 66.6667%;
}

.w-col-9 {
  width: 75%;
}

.w-col-10 {
  width: 83.3333%;
}

.w-col-11 {
  width: 91.6667%;
}

.w-col-12 {
  width: 100%;
}

.w-hidden-main {
  display: none !important;
}

@media screen and (max-width: 991px) {
  .w-container {
    max-width: 728px;
  }

  .w-hidden-main {
    display: inherit !important;
  }

  .w-hidden-medium {
    display: none !important;
  }

  .w-col-medium-1 {
    width: 8.33333%;
  }

  .w-col-medium-2 {
    width: 16.6667%;
  }

  .w-col-medium-3 {
    width: 25%;
  }

  .w-col-medium-4 {
    width: 33.3333%;
  }

  .w-col-medium-5 {
    width: 41.6667%;
  }

  .w-col-medium-6 {
    width: 50%;
  }

  .w-col-medium-7 {
    width: 58.3333%;
  }

  .w-col-medium-8 {
    width: 66.6667%;
  }

  .w-col-medium-9 {
    width: 75%;
  }

  .w-col-medium-10 {
    width: 83.3333%;
  }

  .w-col-medium-11 {
    width: 91.6667%;
  }

  .w-col-medium-12 {
    width: 100%;
  }

  .w-col-stack {
    width: 100%;
    left: auto;
    right: auto;
  }
}

@media screen and (max-width: 767px) {
  .w-hidden-main, .w-hidden-medium {
    display: inherit !important;
  }

  .w-hidden-small {
    display: none !important;
  }

  .w-row, .w-container .w-row {
    margin-left: 0;
    margin-right: 0;
  }

  .w-col {
    width: 100%;
    left: auto;
    right: auto;
  }

  .w-col-small-1 {
    width: 8.33333%;
  }

  .w-col-small-2 {
    width: 16.6667%;
  }

  .w-col-small-3 {
    width: 25%;
  }

  .w-col-small-4 {
    width: 33.3333%;
  }

  .w-col-small-5 {
    width: 41.6667%;
  }

  .w-col-small-6 {
    width: 50%;
  }

  .w-col-small-7 {
    width: 58.3333%;
  }

  .w-col-small-8 {
    width: 66.6667%;
  }

  .w-col-small-9 {
    width: 75%;
  }

  .w-col-small-10 {
    width: 83.3333%;
  }

  .w-col-small-11 {
    width: 91.6667%;
  }

  .w-col-small-12 {
    width: 100%;
  }
}

@media screen and (max-width: 479px) {
  .w-container {
    max-width: none;
  }

  .w-hidden-main, .w-hidden-medium, .w-hidden-small {
    display: inherit !important;
  }

  .w-hidden-tiny {
    display: none !important;
  }

  .w-col {
    width: 100%;
  }

  .w-col-tiny-1 {
    width: 8.33333%;
  }

  .w-col-tiny-2 {
    width: 16.6667%;
  }

  .w-col-tiny-3 {
    width: 25%;
  }

  .w-col-tiny-4 {
    width: 33.3333%;
  }

  .w-col-tiny-5 {
    width: 41.6667%;
  }

  .w-col-tiny-6 {
    width: 50%;
  }

  .w-col-tiny-7 {
    width: 58.3333%;
  }

  .w-col-tiny-8 {
    width: 66.6667%;
  }

  .w-col-tiny-9 {
    width: 75%;
  }

  .w-col-tiny-10 {
    width: 83.3333%;
  }

  .w-col-tiny-11 {
    width: 91.6667%;
  }

  .w-col-tiny-12 {
    width: 100%;
  }
}

.w-widget {
  position: relative;
}

.w-widget-map {
  width: 100%;
  height: 400px;
}

.w-widget-map label {
  width: auto;
  display: inline;
}

.w-widget-map img {
  max-width: inherit;
}

.w-widget-map .gm-style-iw {
  text-align: center;
}

.w-widget-map .gm-style-iw > button {
  display: none !important;
}

.w-widget-twitter {
  overflow: hidden;
}

.w-widget-twitter-count-shim {
  vertical-align: top;
  text-align: center;
  background: #fff;
  border: 1px solid #758696;
  border-radius: 3px;
  width: 28px;
  height: 20px;
  display: inline-block;
  position: relative;
}

.w-widget-twitter-count-shim * {
  pointer-events: none;
  -webkit-user-select: none;
  user-select: none;
}

.w-widget-twitter-count-shim .w-widget-twitter-count-inner {
  text-align: center;
  color: #999;
  font-family: serif;
  font-size: 15px;
  line-height: 12px;
  position: relative;
}

.w-widget-twitter-count-shim .w-widget-twitter-count-clear {
  display: block;
  position: relative;
}

.w-widget-twitter-count-shim.w--large {
  width: 36px;
  height: 28px;
}

.w-widget-twitter-count-shim.w--large .w-widget-twitter-count-inner {
  font-size: 18px;
  line-height: 18px;
}

.w-widget-twitter-count-shim:not(.w--vertical) {
  margin-left: 5px;
  margin-right: 8px;
}

.w-widget-twitter-count-shim:not(.w--vertical).w--large {
  margin-left: 6px;
}

.w-widget-twitter-count-shim:not(.w--vertical):before, .w-widget-twitter-count-shim:not(.w--vertical):after {
  content: " ";
  pointer-events: none;
  border: solid #0000;
  width: 0;
  height: 0;
  position: absolute;
  top: 50%;
  left: 0;
}

.w-widget-twitter-count-shim:not(.w--vertical):before {
  border-width: 4px;
  border-color: #75869600 #5d6c7b #75869600 #75869600;
  margin-top: -4px;
  margin-left: -9px;
}

.w-widget-twitter-count-shim:not(.w--vertical).w--large:before {
  border-width: 5px;
  margin-top: -5px;
  margin-left: -10px;
}

.w-widget-twitter-count-shim:not(.w--vertical):after {
  border-width: 4px;
  border-color: #fff0 #fff #fff0 #fff0;
  margin-top: -4px;
  margin-left: -8px;
}

.w-widget-twitter-count-shim:not(.w--vertical).w--large:after {
  border-width: 5px;
  margin-top: -5px;
  margin-left: -9px;
}

.w-widget-twitter-count-shim.w--vertical {
  width: 61px;
  height: 33px;
  margin-bottom: 8px;
}

.w-widget-twitter-count-shim.w--vertical:before, .w-widget-twitter-count-shim.w--vertical:after {
  content: " ";
  pointer-events: none;
  border: solid #0000;
  width: 0;
  height: 0;
  position: absolute;
  top: 100%;
  left: 50%;
}

.w-widget-twitter-count-shim.w--vertical:before {
  border-width: 5px;
  border-color: #5d6c7b #75869600 #75869600;
  margin-left: -5px;
}

.w-widget-twitter-count-shim.w--vertical:after {
  border-width: 4px;
  border-color: #fff #fff0 #fff0;
  margin-left: -4px;
}

.w-widget-twitter-count-shim.w--vertical .w-widget-twitter-count-inner {
  font-size: 18px;
  line-height: 22px;
}

.w-widget-twitter-count-shim.w--vertical.w--large {
  width: 76px;
}

.w-background-video {
  color: #fff;
  height: 500px;
  position: relative;
  overflow: hidden;
}

.w-background-video > video {
  object-fit: cover;
  z-index: -100;
  background-position: 50%;
  background-size: cover;
  width: 100%;
  height: 100%;
  margin: auto;
  position: absolute;
  inset: -100%;
}

.w-background-video > video::-webkit-media-controls-start-playback-button {
  -webkit-appearance: none;
  display: none !important;
}

.w-background-video--control {
  background-color: #0000;
  padding: 0;
  position: absolute;
  bottom: 1em;
  right: 1em;
}

.w-background-video--control > [hidden] {
  display: none !important;
}

.w-slider {
  text-align: center;
  clear: both;
  -webkit-tap-highlight-color: #0000;
  tap-highlight-color: #0000;
  background: #ddd;
  height: 300px;
  position: relative;
}

.w-slider-mask {
  z-index: 1;
  white-space: nowrap;
  height: 100%;
  display: block;
  position: relative;
  left: 0;
  right: 0;
  overflow: hidden;
}

.w-slide {
  vertical-align: top;
  white-space: normal;
  text-align: left;
  width: 100%;
  height: 100%;
  display: inline-block;
  position: relative;
}

.w-slider-nav {
  z-index: 2;
  text-align: center;
  -webkit-tap-highlight-color: #0000;
  tap-highlight-color: #0000;
  height: 40px;
  margin: auto;
  padding-top: 10px;
  position: absolute;
  inset: auto 0 0;
}

.w-slider-nav.w-round > div {
  border-radius: 100%;
}

.w-slider-nav.w-num > div {
  width: auto;
  height: auto;
  font-size: inherit;
  line-height: inherit;
  padding: .2em .5em;
}

.w-slider-nav.w-shadow > div {
  box-shadow: 0 0 3px #3336;
}

.w-slider-nav-invert {
  color: #fff;
}

.w-slider-nav-invert > div {
  background-color: #2226;
}

.w-slider-nav-invert > div.w-active {
  background-color: #222;
}

.w-slider-dot {
  cursor: pointer;
  background-color: #fff6;
  width: 1em;
  height: 1em;
  margin: 0 3px .5em;
  transition: background-color .1s, color .1s;
  display: inline-block;
  position: relative;
}

.w-slider-dot.w-active {
  background-color: #fff;
}

.w-slider-dot:focus {
  outline: none;
  box-shadow: 0 0 0 2px #fff;
}

.w-slider-dot:focus.w-active {
  box-shadow: none;
}

.w-slider-arrow-left, .w-slider-arrow-right {
  cursor: pointer;
  color: #fff;
  -webkit-tap-highlight-color: #0000;
  tap-highlight-color: #0000;
  -webkit-user-select: none;
  user-select: none;
  width: 80px;
  margin: auto;
  font-size: 40px;
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.w-slider-arrow-left [class^="w-icon-"], .w-slider-arrow-right [class^="w-icon-"], .w-slider-arrow-left [class*=" w-icon-"], .w-slider-arrow-right [class*=" w-icon-"] {
  position: absolute;
}

.w-slider-arrow-left:focus, .w-slider-arrow-right:focus {
  outline: 0;
}

.w-slider-arrow-left {
  z-index: 3;
  right: auto;
}

.w-slider-arrow-right {
  z-index: 4;
  left: auto;
}

.w-icon-slider-left, .w-icon-slider-right {
  width: 1em;
  height: 1em;
  margin: auto;
  inset: 0;
}

.w-slider-aria-label {
  clip: rect(0 0 0 0);
  border: 0;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  position: absolute;
  overflow: hidden;
}

.w-slider-force-show {
  display: block !important;
}

.w-dropdown {
  text-align: left;
  z-index: 900;
  margin-left: auto;
  margin-right: auto;
  display: inline-block;
  position: relative;
}

.w-dropdown-btn, .w-dropdown-toggle, .w-dropdown-link {
  vertical-align: top;
  color: #222;
  text-align: left;
  white-space: nowrap;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  text-decoration: none;
  position: relative;
}

.w-dropdown-toggle {
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  padding-right: 40px;
  display: inline-block;
}

.w-dropdown-toggle:focus {
  outline: 0;
}

.w-icon-dropdown-toggle {
  width: 1em;
  height: 1em;
  margin: auto 20px auto auto;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
}

.w-dropdown-list {
  background: #ddd;
  min-width: 100%;
  display: none;
  position: absolute;
}

.w-dropdown-list.w--open {
  display: block;
}

.w-dropdown-link {
  color: #222;
  padding: 10px 20px;
  display: block;
}

.w-dropdown-link.w--current {
  color: #0082f3;
}

.w-dropdown-link:focus {
  outline: 0;
}

@media screen and (max-width: 767px) {
  .w-nav-brand {
    padding-left: 10px;
  }
}

.w-lightbox-backdrop {
  cursor: auto;
  letter-spacing: normal;
  text-indent: 0;
  text-shadow: none;
  text-transform: none;
  visibility: visible;
  white-space: normal;
  word-break: normal;
  word-spacing: normal;
  word-wrap: normal;
  color: #fff;
  text-align: center;
  z-index: 2000;
  opacity: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -webkit-tap-highlight-color: transparent;
  background: #000000e6;
  outline: 0;
  font-family: Helvetica Neue, Helvetica, Ubuntu, Segoe UI, Verdana, sans-serif;
  font-size: 17px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.2;
  list-style: disc;
  position: fixed;
  inset: 0;
  -webkit-transform: translate(0);
}

.w-lightbox-backdrop, .w-lightbox-container {
  -webkit-overflow-scrolling: touch;
  height: 100%;
  overflow: auto;
}

.w-lightbox-content {
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.w-lightbox-view {
  opacity: 0;
  width: 100vw;
  height: 100vh;
  position: absolute;
}

.w-lightbox-view:before {
  content: "";
  height: 100vh;
}

.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {
  height: 86vh;
}

.w-lightbox-frame, .w-lightbox-view:before {
  vertical-align: middle;
  display: inline-block;
}

.w-lightbox-figure {
  margin: 0;
  position: relative;
}

.w-lightbox-group .w-lightbox-figure {
  cursor: pointer;
}

.w-lightbox-img {
  width: auto;
  max-width: none;
  height: auto;
}

.w-lightbox-image {
  float: none;
  max-width: 100vw;
  max-height: 100vh;
  display: block;
}

.w-lightbox-group .w-lightbox-image {
  max-height: 86vh;
}

.w-lightbox-caption {
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  background: #0006;
  padding: .5em 1em;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}

.w-lightbox-embed {
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
}

.w-lightbox-control {
  cursor: pointer;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 24px;
  width: 4em;
  transition: all .3s;
  position: absolute;
  top: 0;
}

.w-lightbox-left {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0yMCAwIDI0IDQwIiB3aWR0aD0iMjQiIGhlaWdodD0iNDAiPjxnIHRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHBhdGggZD0ibTAgMGg1djIzaDIzdjVoLTI4eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDN2MjNoMjN2M2gtMjZ6IiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg==");
  display: none;
  bottom: 0;
  left: 0;
}

.w-lightbox-right {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMjQgNDAiIHdpZHRoPSIyNCIgaGVpZ2h0PSI0MCI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMC0waDI4djI4aC01di0yM2gtMjN6IiBvcGFjaXR5PSIuNCIvPjxwYXRoIGQ9Im0xIDFoMjZ2MjZoLTN2LTIzaC0yM3oiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+");
  display: none;
  bottom: 0;
  right: 0;
}

.w-lightbox-close {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMTggMTciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNyI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMCAwaDd2LTdoNXY3aDd2NWgtN3Y3aC01di03aC03eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDd2LTdoM3Y3aDd2M2gtN3Y3aC0zdi03aC03eiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=");
  background-size: 18px;
  height: 2.6em;
  right: 0;
}

.w-lightbox-strip {
  white-space: nowrap;
  padding: 0 1vh;
  line-height: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto hidden;
}

.w-lightbox-item {
  box-sizing: content-box;
  cursor: pointer;
  width: 10vh;
  padding: 2vh 1vh;
  display: inline-block;
  -webkit-transform: translate3d(0, 0, 0);
}

.w-lightbox-active {
  opacity: .3;
}

.w-lightbox-thumbnail {
  background: #222;
  height: 10vh;
  position: relative;
  overflow: hidden;
}

.w-lightbox-thumbnail-image {
  position: absolute;
  top: 0;
  left: 0;
}

.w-lightbox-thumbnail .w-lightbox-tall {
  width: 100%;
  top: 50%;
  transform: translate(0, -50%);
}

.w-lightbox-thumbnail .w-lightbox-wide {
  height: 100%;
  left: 50%;
  transform: translate(-50%);
}

.w-lightbox-spinner {
  box-sizing: border-box;
  border: 5px solid #0006;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-top: -20px;
  margin-left: -20px;
  animation: .8s linear infinite spin;
  position: absolute;
  top: 50%;
  left: 50%;
}

.w-lightbox-spinner:after {
  content: "";
  border: 3px solid #0000;
  border-bottom-color: #fff;
  border-radius: 50%;
  position: absolute;
  inset: -4px;
}

.w-lightbox-hide {
  display: none;
}

.w-lightbox-noscroll {
  overflow: hidden;
}

@media (min-width: 768px) {
  .w-lightbox-content {
    height: 96vh;
    margin-top: 2vh;
  }

  .w-lightbox-view, .w-lightbox-view:before {
    height: 96vh;
  }

  .w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {
    height: 84vh;
  }

  .w-lightbox-image {
    max-width: 96vw;
    max-height: 96vh;
  }

  .w-lightbox-group .w-lightbox-image {
    max-width: 82.3vw;
    max-height: 84vh;
  }

  .w-lightbox-left, .w-lightbox-right {
    opacity: .5;
    display: block;
  }

  .w-lightbox-close {
    opacity: .8;
  }

  .w-lightbox-control:hover {
    opacity: 1;
  }
}

.w-lightbox-inactive, .w-lightbox-inactive:hover {
  opacity: 0;
}

.w-richtext:before, .w-richtext:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-richtext:after {
  clear: both;
}

.w-richtext[contenteditable="true"]:before, .w-richtext[contenteditable="true"]:after {
  white-space: initial;
}

.w-richtext ol, .w-richtext ul {
  overflow: hidden;
}

.w-richtext .w-richtext-figure-selected.w-richtext-figure-type-video div:after, .w-richtext .w-richtext-figure-selected[data-rt-type="video"] div:after, .w-richtext .w-richtext-figure-selected.w-richtext-figure-type-image div, .w-richtext .w-richtext-figure-selected[data-rt-type="image"] div {
  outline: 2px solid #2895f7;
}

.w-richtext figure.w-richtext-figure-type-video > div:after, .w-richtext figure[data-rt-type="video"] > div:after {
  content: "";
  display: none;
  position: absolute;
  inset: 0;
}

.w-richtext figure {
  max-width: 60%;
  position: relative;
}

.w-richtext figure > div:before {
  cursor: default !important;
}

.w-richtext figure img {
  width: 100%;
}

.w-richtext figure figcaption.w-richtext-figcaption-placeholder {
  opacity: .6;
}

.w-richtext figure div {
  color: #0000;
  font-size: 0;
}

.w-richtext figure.w-richtext-figure-type-image, .w-richtext figure[data-rt-type="image"] {
  display: table;
}

.w-richtext figure.w-richtext-figure-type-image > div, .w-richtext figure[data-rt-type="image"] > div {
  display: inline-block;
}

.w-richtext figure.w-richtext-figure-type-image > figcaption, .w-richtext figure[data-rt-type="image"] > figcaption {
  caption-side: bottom;
  display: table-caption;
}

.w-richtext figure.w-richtext-figure-type-video, .w-richtext figure[data-rt-type="video"] {
  width: 60%;
  height: 0;
}

.w-richtext figure.w-richtext-figure-type-video iframe, .w-richtext figure[data-rt-type="video"] iframe {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.w-richtext figure.w-richtext-figure-type-video > div, .w-richtext figure[data-rt-type="video"] > div {
  width: 100%;
}

.w-richtext figure.w-richtext-align-center {
  clear: both;
  margin-left: auto;
  margin-right: auto;
}

.w-richtext figure.w-richtext-align-center.w-richtext-figure-type-image > div, .w-richtext figure.w-richtext-align-center[data-rt-type="image"] > div {
  max-width: 100%;
}

.w-richtext figure.w-richtext-align-normal {
  clear: both;
}

.w-richtext figure.w-richtext-align-fullwidth {
  text-align: center;
  clear: both;
  width: 100%;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.w-richtext figure.w-richtext-align-fullwidth > div {
  padding-bottom: inherit;
  display: inline-block;
}

.w-richtext figure.w-richtext-align-fullwidth > figcaption {
  display: block;
}

.w-richtext figure.w-richtext-align-floatleft {
  float: left;
  clear: none;
  margin-right: 15px;
}

.w-richtext figure.w-richtext-align-floatright {
  float: right;
  clear: none;
  margin-left: 15px;
}

.w-nav {
  z-index: 1000;
  background: #ddd;
  position: relative;
}

.w-nav:before, .w-nav:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-nav:after {
  clear: both;
}

.w-nav-brand {
  float: left;
  color: #333;
  text-decoration: none;
  position: relative;
}

.w-nav-link {
  vertical-align: top;
  color: #222;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  text-decoration: none;
  display: inline-block;
  position: relative;
}

.w-nav-link.w--current {
  color: #0082f3;
}

.w-nav-menu {
  float: right;
  position: relative;
}

[data-nav-menu-open] {
  text-align: center;
  background: #c8c8c8;
  min-width: 200px;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  overflow: visible;
  display: block !important;
}

.w--nav-link-open {
  display: block;
  position: relative;
}

.w-nav-overlay {
  width: 100%;
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  overflow: hidden;
}

.w-nav-overlay [data-nav-menu-open] {
  top: 0;
}

.w-nav[data-animation="over-left"] .w-nav-overlay {
  width: auto;
}

.w-nav[data-animation="over-left"] .w-nav-overlay, .w-nav[data-animation="over-left"] [data-nav-menu-open] {
  z-index: 1;
  top: 0;
  right: auto;
}

.w-nav[data-animation="over-right"] .w-nav-overlay {
  width: auto;
}

.w-nav[data-animation="over-right"] .w-nav-overlay, .w-nav[data-animation="over-right"] [data-nav-menu-open] {
  z-index: 1;
  top: 0;
  left: auto;
}

.w-nav-button {
  float: right;
  cursor: pointer;
  -webkit-tap-highlight-color: #0000;
  tap-highlight-color: #0000;
  -webkit-user-select: none;
  user-select: none;
  padding: 18px;
  font-size: 24px;
  display: none;
  position: relative;
}

.w-nav-button:focus {
  outline: 0;
}

.w-nav-button.w--open {
  color: #fff;
  background-color: #c8c8c8;
}

.w-nav[data-collapse="all"] .w-nav-menu {
  display: none;
}

.w-nav[data-collapse="all"] .w-nav-button, .w--nav-dropdown-open, .w--nav-dropdown-toggle-open {
  display: block;
}

.w--nav-dropdown-list-open {
  position: static;
}

@media screen and (max-width: 991px) {
  .w-nav[data-collapse="medium"] .w-nav-menu {
    display: none;
  }

  .w-nav[data-collapse="medium"] .w-nav-button {
    display: block;
  }
}

@media screen and (max-width: 767px) {
  .w-nav[data-collapse="small"] .w-nav-menu {
    display: none;
  }

  .w-nav[data-collapse="small"] .w-nav-button {
    display: block;
  }

  .w-nav-brand {
    padding-left: 10px;
  }
}

@media screen and (max-width: 479px) {
  .w-nav[data-collapse="tiny"] .w-nav-menu {
    display: none;
  }

  .w-nav[data-collapse="tiny"] .w-nav-button {
    display: block;
  }
}

.w-tabs {
  position: relative;
}

.w-tabs:before, .w-tabs:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-tabs:after {
  clear: both;
}

.w-tab-menu {
  position: relative;
}

.w-tab-link {
  vertical-align: top;
  text-align: left;
  cursor: pointer;
  color: #222;
  background-color: #ddd;
  padding: 9px 30px;
  text-decoration: none;
  display: inline-block;
  position: relative;
}

.w-tab-link.w--current {
  background-color: #c8c8c8;
}

.w-tab-link:focus {
  outline: 0;
}

.w-tab-content {
  display: block;
  position: relative;
  overflow: hidden;
}

.w-tab-pane {
  display: none;
  position: relative;
}

.w--tab-active {
  display: block;
}

@media screen and (max-width: 479px) {
  .w-tab-link {
    display: block;
  }
}

.w-ix-emptyfix:after {
  content: "";
}

@keyframes spin {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

.w-dyn-empty {
  background-color: #ddd;
  padding: 10px;
}

.w-dyn-hide, .w-dyn-bind-empty, .w-condition-invisible {
  display: none !important;
}

.wf-layout-layout {
  display: grid;
}

.w-layout-grid {
  grid-row-gap: 16px;
  grid-column-gap: 16px;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}

@font-face {
  font-family: Helveticaneueltcom mdex;
  src: url("https://cdn.prod.website-files.com/6a0765264735d1e3705a29fb/6a0765294735d1e3705a2a7d_HelveticaNeueLTCom-MdEx.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
  font-display: auto;
}

@font-face {
  font-family: Helveticaneueltcom ex;
  src: url("https://cdn.prod.website-files.com/6a0765264735d1e3705a29fb/6a0765294735d1e3705a2a76_HelveticaNeueLTCom-Ex.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
  font-display: auto;
}

@font-face {
  font-family: Helveticaneueltcom ltex;
  src: url("https://cdn.prod.website-files.com/6a0765264735d1e3705a29fb/6a0765294735d1e3705a2a82_HelveticaNeueLTCom-LtEx.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
  font-display: auto;
}

@font-face {
  font-family: Helveticaneueltcom thex;
  src: url("https://cdn.prod.website-files.com/6a0765264735d1e3705a29fb/6a0765294735d1e3705a2a7b_HelveticaNeueLTCom-ThEx.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
  font-display: auto;
}

@font-face {
  font-family: Helveticaneueltcom bdex;
  src: url("https://cdn.prod.website-files.com/6a0765264735d1e3705a29fb/6a0765294735d1e3705a2a68_HelveticaNeueLTCom-BdEx.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
  font-display: auto;
}

@font-face {
  font-family: Helveticaneueltcom hvex;
  src: url("https://cdn.prod.website-files.com/6a0765264735d1e3705a29fb/6a0765294735d1e3705a2a75_HelveticaNeueLTCom-HvEx.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
  font-display: auto;
}

@font-face {
  font-family: Helveticaneueltcom blkex;
  src: url("https://cdn.prod.website-files.com/6a0765264735d1e3705a29fb/6a0765294735d1e3705a2a72_HelveticaNeueLTCom-BlkEx.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
  font-display: auto;
}

@font-face {
  font-family: Helveticaneueltcom bd;
  src: url("https://cdn.prod.website-files.com/6a0765264735d1e3705a29fb/6a0765294735d1e3705a2a6b_HelveticaNeueLTCom-Bd.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
  font-display: auto;
}

@font-face {
  font-family: Helveticaneueltcom bdou;
  src: url("https://cdn.prod.website-files.com/6a0765264735d1e3705a29fb/6a0765294735d1e3705a2a6c_HelveticaNeueLTCom-BdOu.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
  font-display: auto;
}

@font-face {
  font-family: "Fa 400";
  src: url("https://cdn.prod.website-files.com/6a0765264735d1e3705a29fb/6a0765294735d1e3705a2a95_fa-regular-400.ttf") format("truetype"), url("https://cdn.prod.website-files.com/6a0765264735d1e3705a29fb/6a0765294735d1e3705a2a99_fa-regular-400.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
  font-display: auto;
}

@font-face {
  font-family: "Fa brands 400";
  src: url("https://cdn.prod.website-files.com/6a0765264735d1e3705a29fb/6a0765294735d1e3705a2aa1_fa-brands-400.ttf") format("truetype"), url("https://cdn.prod.website-files.com/6a0765264735d1e3705a29fb/6a0765294735d1e3705a2a96_fa-brands-400.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
  font-display: auto;
}

@font-face {
  font-family: "Fa solid 900";
  src: url("https://cdn.prod.website-files.com/6a0765264735d1e3705a29fb/6a0765294735d1e3705a2a9e_fa-solid-900.ttf") format("truetype"), url("https://cdn.prod.website-files.com/6a0765264735d1e3705a29fb/6a0765294735d1e3705a2aa4_fa-solid-900.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
  font-display: auto;
}

@font-face {
  font-family: Akzidenzgrotesk extended;
  src: url("https://cdn.prod.website-files.com/6a0765264735d1e3705a29fb/6a0765294735d1e3705a2a67_AkzidenzGrotesk-Extended.otf") format("opentype");
  font-weight: 400;
  font-style: normal;
  font-display: auto;
}

@font-face {
  font-family: Akzidenzgrotesk;
  src: url("https://cdn.prod.website-files.com/6a0765264735d1e3705a29fb/6a0765294735d1e3705a2a69_AkzidenzGrotesk-LightExtended.otf") format("opentype");
  font-weight: 300;
  font-style: normal;
  font-display: auto;
}

@font-face {
  font-family: Akzidenzgrotesk;
  src: url("https://cdn.prod.website-files.com/6a0765264735d1e3705a29fb/6a0765294735d1e3705a2a6e_AkzidenzGrotesk-BoldExtended.otf") format("opentype");
  font-weight: 700;
  font-style: normal;
  font-display: auto;
}

@font-face {
  font-family: Akzidenzgrotesk;
  src: url("https://cdn.prod.website-files.com/6a0765264735d1e3705a29fb/6a0765294735d1e3705a2a70_AkzidenzGrotesk-MediumExtended.otf") format("opentype");
  font-weight: 500;
  font-style: normal;
  font-display: auto;
}

@font-face {
  font-family: Gotham book;
  src: url("https://cdn.prod.website-files.com/6a0765264735d1e3705a29fb/6a0765294735d1e3705a2a78_Gotham-Book.otf") format("opentype");
  font-weight: 400;
  font-style: normal;
  font-display: auto;
}

@font-face {
  font-family: Gotham;
  src: url("https://cdn.prod.website-files.com/6a0765264735d1e3705a29fb/6a0765294735d1e3705a2a77_Gotham-LightItalic.otf") format("opentype");
  font-weight: 300;
  font-style: italic;
  font-display: auto;
}

@font-face {
  font-family: Gotham;
  src: url("https://cdn.prod.website-files.com/6a0765264735d1e3705a29fb/6a0765294735d1e3705a2a7f_Gotham-ExtraLight.otf") format("opentype");
  font-weight: 200;
  font-style: normal;
  font-display: auto;
}

@font-face {
  font-family: Gotham;
  src: url("https://cdn.prod.website-files.com/6a0765264735d1e3705a29fb/6a0765294735d1e3705a2a7e_Gotham-ExtraLightItalic.otf") format("opentype");
  font-weight: 200;
  font-style: italic;
  font-display: auto;
}

@font-face {
  font-family: Gotham;
  src: url("https://cdn.prod.website-files.com/6a0765264735d1e3705a29fb/6a0765294735d1e3705a2a7c_Gotham-Light.otf") format("opentype");
  font-weight: 300;
  font-style: normal;
  font-display: auto;
}

@font-face {
  font-family: Gotham;
  src: url("https://cdn.prod.website-files.com/6a0765264735d1e3705a29fb/6a0765294735d1e3705a2a74_Gotham-Medium.otf") format("opentype");
  font-weight: 500;
  font-style: normal;
  font-display: auto;
}

@font-face {
  font-family: "Font awesome 5 free 400";
  src: url("https://cdn.prod.website-files.com/6a0765264735d1e3705a29fb/6a0765294735d1e3705a2aa0_Font%20Awesome%205%20Free-Regular-400.otf") format("opentype");
  font-weight: 400;
  font-style: normal;
  font-display: auto;
}

@font-face {
  font-family: "Font awesome 5 free solid 900";
  src: url("https://cdn.prod.website-files.com/6a0765264735d1e3705a29fb/6a0765294735d1e3705a2aa8_Font%20Awesome%205%20Free-Solid-900.otf") format("opentype");
  font-weight: 400;
  font-style: normal;
  font-display: auto;
}

@font-face {
  font-family: "Font awesome 5 brands 400";
  src: url("https://cdn.prod.website-files.com/6a0765264735d1e3705a29fb/6a0765294735d1e3705a2aa6_Font%20Awesome%205%20Brands-Regular-400.otf") format("opentype");
  font-weight: 400;
  font-style: normal;
  font-display: auto;
}

.heading {
  text-align: center;
  text-transform: capitalize;
}

.body {
  color: red;
  background-color: #000;
  height: 100%;
  padding-top: 0;
}

.background-video {
  background-color: #000000a6;
  height: 100%;
}

.navbar {
  background-color: #0000;
  padding-top: 22px;
  padding-bottom: 20px;
  position: fixed;
  inset: 0% 0% auto;
}

.nav-menu {
  text-align: left;
  background-color: #0f0f0f;
  background-image: linear-gradient(#000000ab, #000000ab), url("https://cdn.prod.website-files.com/6a0765264735d1e3705a29fb/6a07671a1ad048a9c72a060d_Gemini_Generated_Image_lwqlmllwqlmllwql.png");
  background-position: 0 0, 50%;
  background-size: auto, cover;
  width: 100%;
  padding-top: 78px;
}

.heading-2 {
  color: #fff;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: 0;
  font-family: Akzidenzgrotesk extended, sans-serif;
  font-size: 30px;
  line-height: 31px;
}

.container {
  max-width: 95%;
  padding-top: 0;
  padding-left: 0;
}

.div-block {
  background-color: #fff;
  border-radius: 50px;
  width: 50px;
  height: 3px;
}

.div-block-2 {
  background-color: #fff;
  border-radius: 50px;
  width: 50px;
  height: 3px;
  margin-top: 5px;
}

.menu-button {
  z-index: 2;
  margin-top: 0;
  padding-right: 0;
}

.menu-button.w--open {
  z-index: 2;
  background-color: #c8c8c800;
}

.text-block {
  color: #debeb6;
  letter-spacing: 6px;
  text-transform: uppercase;
  margin-top: -13px;
  padding-left: 1px;
  font-family: Akzidenzgrotesk extended, sans-serif;
  font-size: 9.3px;
}

.nav-link {
  color: #fff;
  padding-left: 2px;
  font-family: Akzidenzgrotesk extended, sans-serif;
  display: block;
}

.brand {
  z-index: 2;
}

.button {
  color: #000;
  background-color: #fff;
  margin-top: 31px;
  margin-left: 32px;
  padding: 23px;
  font-family: Akzidenzgrotesk extended, sans-serif;
  font-size: 21px;
  display: inline-block;
}

.button._123 {
  color: #fff;
  background-color: #fff0;
  margin-left: 33px;
  margin-right: auto;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 6px;
  display: block;
}

.div-block-3 {
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: -55px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 0;
  padding-bottom: 0;
  display: flex;
}

.div-block-4 {
  opacity: 1;
  background-color: #0000;
  background-image: linear-gradient(#00000057, #00000057);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  display: flex;
}

.heading-3 {
  letter-spacing: 0;
  text-transform: capitalize;
  width: 100%;
  font-family: Akzidenzgrotesk extended, sans-serif;
  font-weight: 400;
}

.text-block-2 {
  width: 100%;
}

.text-span {
  font-family: Helveticaneueltcom thex, sans-serif;
  font-size: 17px;
}

.heading-4 {
  font-family: Akzidenzgrotesk extended, sans-serif;
}

.text-span-2 {
  letter-spacing: 3px;
  font-family: Akzidenzgrotesk extended, sans-serif;
  font-size: 21px;
  font-weight: 400;
}

.heading-5 {
  text-transform: uppercase;
  margin-top: 0;
  font-family: Akzidenzgrotesk extended, sans-serif;
  font-size: 46px;
  font-weight: 400;
}

.text-block-3 {
  color: #debeb6;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: 8px;
  font-family: Akzidenzgrotesk extended, sans-serif;
  font-size: 17px;
  font-weight: 400;
}

.text-block-3.ss {
  display: none;
}

.image-9 {
  float: none;
  text-align: left;
  width: 300px;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0;
  padding-right: 41px;
  position: relative;
}

.heading-16 {
  color: #f5f5f5cc;
  text-align: left;
  padding-left: 40px;
  font-family: Akzidenzgrotesk, sans-serif;
  font-size: 66px;
  font-weight: 500;
  line-height: 71px;
}

.heading-16.sss {
  margin-left: -8px;
  padding-left: 0;
}

.heading-17 {
  color: #141e35;
  text-align: left;
  letter-spacing: 3px;
  margin-top: 0;
  padding-left: 42px;
  font-size: 38px;
  font-weight: 400;
}

.link-block {
  text-align: center;
  margin-right: 26px;
  text-decoration: none;
  position: relative;
}

.link-block.w {
  margin-right: 29px;
}

.columns-2 {
  width: 1500px;
  max-width: 100%;
  height: 700px;
  margin-left: auto;
  margin-right: auto;
}

.text-block-10 {
  color: #cc1a1a;
  text-align: left;
  letter-spacing: 2px;
  padding-left: 44px;
  font-family: Akzidenzgrotesk, sans-serif;
  font-size: 10px;
  font-weight: 500;
}

.text-block-10.s {
  z-index: 500;
  color: #c21d1d;
  letter-spacing: 1.5px;
  margin-top: 0;
  font-size: 10px;
  position: relative;
}

.column-10 {
  height: 700px;
}

.div-block-35 {
  background-color: #141e35;
  background-image: url("https://cdn.prod.website-files.com/6a0765264735d1e3705a29fb/6a0765294735d1e3705a2ab6_i-fwqkMnQ-X4.jpg");
  background-position: 50% 64%;
  background-size: cover;
  width: 100%;
  max-width: 100%;
  height: 300px;
  margin-top: 2px;
  margin-left: auto;
  margin-right: auto;
}

.div-block-35:hover {
  filter: none;
}

.div-block-33 {
  background-color: #141e35;
  background-image: url("https://cdn.prod.website-files.com/6a0765264735d1e3705a29fb/6a0765294735d1e3705a2ab8_i-m7cVH3z-X4.jpg");
  background-position: 50%;
  background-size: cover;
  width: 95%;
  height: 500px;
  margin-left: 0;
  margin-right: auto;
}

.div-block-33:hover {
  filter: none;
}

.div-block-36 {
  text-align: center;
  background-color: #fff;
  height: auto;
  padding: 265px 22px 162px;
  overflow: hidden;
}

.div-block-36.kjhe {
  background-color: #fff0;
  padding-top: 215px;
}

.image-10 {
  width: 47px;
  margin-bottom: 6px;
  margin-left: 0;
}

.image-10.f {
  margin-left: 2px;
}

.image-10.k {
  width: 49px;
  height: 47px;
  margin-left: -2px;
}

.image-10.sae {
  width: 20px;
}

.image-10.a {
  width: 22px;
}

.image-10.a.r {
  width: 21px;
}

.image-10.sa {
  width: 20px;
}

.image-10.er {
  width: 22px;
}

.div-block-27 {
  width: 600px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  top: -139px;
}

.div-block-31 {
  text-align: left;
  margin-top: 26px;
  padding-left: 0;
}

.heading-7 {
  color: #0000000d;
  text-align: right;
  margin-top: 0;
  margin-bottom: -45px;
  font-size: 250px;
  position: relative;
  top: -782px;
}

.heading-7.d {
  font-family: Helveticaneueltcom mdex, sans-serif;
}

.heading-7.ert, .heading-7.ssd {
  display: none;
}

.paragraph-5 {
  color: #141e35;
  text-align: left;
  letter-spacing: .2px;
  width: 555px;
  max-width: 100%;
  padding-left: 42px;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
}

.div-block-37 {
  margin-top: -40px;
}

.text-block-13 {
  color: #fff;
  font-family: Akzidenzgrotesk extended, sans-serif;
  font-size: 11px;
}

.div-block-26 {
  text-align: right;
  background-color: #58585800;
  height: 700px;
  padding-top: 77px;
  padding-left: 0;
  padding-right: 20px;
  position: relative;
}

.div-block-34 {
  z-index: 50;
  background-color: #141e35;
  background-image: url("https://cdn.prod.website-files.com/6a0765264735d1e3705a29fb/6a0765294735d1e3705a2ab4_i-q98qKZ4-X4.jpg");
  background-position: 50% 34%;
  background-size: cover;
  height: 241px;
  margin-bottom: 18px;
  position: relative;
}

.div-block-34:hover {
  filter: none;
}

.div-block-34.d {
  background-image: url("https://cdn.prod.website-files.com/6a0765264735d1e3705a29fb/6a0765294735d1e3705a2ab5_i-9FbBGNm-X4.jpg");
  background-position: 50%;
  background-size: cover;
}

.div-block-38 {
  height: 500px;
}

.div-block-20 {
  text-align: right;
  width: 580px;
  max-width: 100%;
  height: 140px;
  padding-top: 27px;
  padding-right: 20px;
  position: relative;
  inset: auto 0% -83% auto;
}

.div-block-20.sdg {
  text-align: left;
  max-width: 100%;
  margin-bottom: 45px;
}

.div-block-20.sdg._4eyrg {
  width: 640px;
  height: auto;
  padding-top: 0;
  padding-left: 3px;
  padding-right: 0;
}

.column-2 {
  padding-left: 3px;
  padding-right: 0;
}

.column-2.grwth {
  text-align: right;
}

.column-2.sfasg, .div-block-18 {
  padding-left: 0;
}

.right-arrow {
  opacity: 0;
  width: 220px;
  display: block;
}

.div-block-17 {
  width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  padding-top: 0;
  padding-bottom: 0;
  overflow: hidden;
}

.column-5 {
  padding-top: 0;
}

.image-3 {
  float: right;
  width: 102px;
  margin-right: 200px;
  position: relative;
  top: 0;
}

.div-block-29 {
  opacity: 1;
}

.div-block-29.asdgr {
  text-align: right;
}

.paragraph {
  color: #14314480;
  width: 580px;
  padding-top: 12px;
  padding-left: 28px;
  font-family: Gotham book, sans-serif;
  font-size: 16px;
  line-height: 28px;
}

.slider {
  background-color: #ddd0;
  height: 700px;
  padding-top: 0;
  overflow: scroll;
}

.div-block-22 {
  height: auto;
  margin-top: 48px;
}

.div-block-19 {
  background-color: #debeb6;
  width: 50px;
  height: 1px;
  display: inline-block;
}

.column {
  padding-left: 7px;
}

.paragraph-2 {
  color: #14314480;
  text-transform: none;
  margin-top: 0;
  margin-bottom: 67px;
  font-family: Helveticaneueltcom mdex, sans-serif;
  font-size: 19px;
  line-height: 40px;
}

.paragraph-2.adg5reg {
  margin-bottom: 2px;
}

.paragraph-2.asdfer {
  margin-bottom: -12px;
  padding-left: 7px;
  font-size: 20px;
}

.slide-4 {
  cursor: pointer;
  background-color: #000;
  width: 185%;
  height: 600px;
  margin-left: 5px;
}

.slide-2 {
  cursor: pointer;
  background-color: #000;
  width: 185%;
  height: 600px;
  margin-left: 10px;
  margin-right: 0;
}

.slide {
  cursor: pointer;
  background-color: #000;
  background-image: url("https://cdn.prod.website-files.com/6a0765264735d1e3705a29fb/6a0765294735d1e3705a2ac0_PORTAIRE.jpg");
  background-position: 50% 10%;
  background-size: cover;
  width: 185%;
  height: 600px;
  margin-right: 0;
}

.button-5 {
  color: #3f455f;
  text-transform: capitalize;
  background-color: #3898ec00;
  background-image: url("https://cdn.prod.website-files.com/6a0765264735d1e3705a29fb/6a0765294735d1e3705a2a71_Arrow%20pink.png");
  background-position: 90% 49%;
  background-repeat: no-repeat;
  background-size: 30px;
  border: 2px solid #debeb6;
  margin-top: 21px;
  padding-top: 17px;
  padding-bottom: 16px;
  padding-right: 93px;
  font-family: Helveticaneueltcom mdex, sans-serif;
  font-weight: 500;
  transition: all .3s;
}

.button-5:hover {
  background-color: #debeb6;
  background-image: url("https://cdn.prod.website-files.com/6a0765264735d1e3705a29fb/6a0765294735d1e3705a2a79_blue%20arrow.png");
}

.columns-7 {
  height: auto;
  padding-bottom: 51px;
}

.text-block-8 {
  color: #debeb6;
  text-transform: capitalize;
  margin-left: 14px;
  font-family: Helveticaneueltcom mdex, sans-serif;
  font-size: 16px;
  display: inline-block;
  position: relative;
  top: 4px;
}

.columns {
  overflow: hidden;
}

.slide-3 {
  cursor: pointer;
  background-color: #000;
  width: 185%;
  height: 600px;
  margin-left: 10px;
  margin-right: 5px;
}

.mask {
  width: 40%;
  height: 100%;
  padding-top: 45px;
  overflow: visible;
}

.heading-18 {
  color: #000;
  letter-spacing: .5px;
  text-transform: capitalize;
  margin-top: 0;
  font-family: Helveticaneueltcom ltex, sans-serif;
  font-size: 13px;
  font-weight: 400;
  position: absolute;
  inset: auto 0% -9%;
}

.heading-19 {
  color: #debeb6;
  margin-top: 0;
  margin-left: 11px;
  margin-right: 11px;
  font-family: Helveticaneueltcom mdex, sans-serif;
  font-size: 70px;
  display: inline-block;
}

.heading-19.asdf {
  margin-left: 11px;
  font-size: 70px;
}

.heading-19.ddd {
  margin-left: 0;
}

.slide-nav {
  z-index: 500;
  text-align: left;
  height: 32px;
  font-size: 10px;
  position: absolute;
  inset: 1% 0% auto;
}

.heading-20 {
  color: #000;
  letter-spacing: 1px;
  background-color: #ffe9e900;
  margin-top: 41px;
  font-family: Helveticaneueltcom mdex, sans-serif;
  font-size: 35px;
}

.left-arrow {
  opacity: 0;
  width: 890px;
  margin-left: -241px;
  display: block;
}

.div-block-21 {
  background-color: #debeb6;
  width: 50px;
  height: 1px;
  margin-right: 2px;
  display: inline-block;
  position: relative;
  top: -20px;
}

.columns-8 {
  height: auto;
}

.div-block-39 {
  height: 500px;
}

.noise {
  opacity: .07;
  background-image: url("https://cdn.prod.website-files.com/6a0765264735d1e3705a29fb/6a0765294735d1e3705a2ab9_5c06f51d6e75c933fe05c728_giphy.gif");
  background-position: 0 0;
  background-size: 256px;
  justify-content: center;
  align-items: center;
  width: 100%;
  display: none;
  position: fixed;
  inset: 0%;
}

.btn {
  z-index: 4;
  color: #fff;
  letter-spacing: 6px;
  text-transform: uppercase;
  background-color: #0000;
  justify-content: center;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
  font-size: 20px;
  font-weight: 400;
  text-decoration: none;
  display: flex;
  position: absolute;
  inset: auto 24% 12% auto;
}

.project-container {
  perspective: 3500px;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 33vh;
  margin-bottom: 33vh;
  display: flex;
  transform: perspective(3500px);
}

.heading-h1 {
  z-index: 10;
  perspective: 2000px;
  color: #fff;
  letter-spacing: .2vw;
  text-transform: uppercase;
  flex: none;
  width: 100%;
  margin-top: 30vh;
  margin-bottom: 0;
  margin-left: 16vw;
  font-size: 7.5vw;
  line-height: 10vw;
  position: relative;
  transform: perspective(2000px);
}

.heading-h1.solid {
  z-index: 1;
  position: absolute;
  inset: 0% 0% auto;
}

.heading-h1.outline {
  z-index: 3;
  color: #ffffff69;
  display: block;
  position: absolute;
  inset: 0% 0% auto;
}

.btn-line {
  background-color: #debeb6;
  width: 56px;
  height: 2px;
  margin-right: 24px;
}

.project {
  z-index: 2;
  perspective: 3500px;
  perspective-origin: 50%;
  justify-content: center;
  align-items: center;
  width: 66%;
  height: 90vh;
  display: flex;
  position: relative;
  overflow: hidden;
  transform: perspective(3500px);
}

.page {
  padding-top: 116px;
  overflow: hidden;
}

.img {
  object-fit: cover;
  min-width: 100%;
  max-width: none;
  min-height: 100%;
  position: relative;
}

.div-block-40 {
  background-color: #fff;
  height: auto;
  padding-top: 89px;
  padding-bottom: 0;
  position: static;
}

.heading-21 {
  color: #fff;
  text-transform: uppercase;
  margin-bottom: -140px;
  padding-left: 0;
  font-family: Helveticaneueltcom bdex, sans-serif;
  font-size: 5vw;
  line-height: 7vw;
}

.text-span-3 {
  color: #debeb6;
  letter-spacing: -10px;
  font-family: Helveticaneueltcom ex, sans-serif;
}

.text-span-4 {
  color: #debeb6;
  letter-spacing: -11px;
}

.paragraph-6 {
  color: #14314480;
  width: auto;
  max-width: 100%;
  padding-top: 18px;
  padding-left: 36px;
  padding-right: 0;
  font-family: Gotham book, sans-serif;
  font-size: 16px;
  line-height: 28px;
}

.column-18 {
  padding-left: 10px;
}

.slide-5 {
  cursor: pointer;
  background-color: #000;
  width: 490px;
  height: 600px;
  margin-left: 5px;
}

.slide-5.etgt {
  background-image: none;
}

.slide-6 {
  cursor: pointer;
  background-color: #000;
  background-image: url("https://cdn.prod.website-files.com/6a0765264735d1e3705a29fb/6a0765294735d1e3705a2a8f_PJOH4636.jpg");
  background-position: 50%;
  background-size: cover;
  width: 490px;
  height: 600px;
  margin-left: 10px;
  margin-right: 0;
}

.slide-6.ryhtgf {
  background-image: none;
}

.slide-7 {
  cursor: pointer;
  background-color: #0000;
  background-image: url("https://cdn.prod.website-files.com/6a0765264735d1e3705a29fb/6a0765294735d1e3705a2a9d_PJOH4942.jpg");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 490px;
  background-attachment: scroll;
  width: 490px;
  height: 600px;
  margin-right: 0;
}

.slide-7.astdsh {
  background-image: none;
  width: 750px;
  height: auto;
}

.slide-7.aegsf {
  background-image: none;
}

.slide-8 {
  cursor: pointer;
  background-color: #000;
  background-image: url("https://cdn.prod.website-files.com/6a0765264735d1e3705a29fb/6a0765294735d1e3705a2a94_PJOH4950%20(2).jpg");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  width: 490px;
  height: 600px;
  margin-left: 10px;
  margin-right: 5px;
}

.slide-8.dfgh, .slide-8._87tyiuh {
  background-image: none;
}

.heading-22 {
  letter-spacing: .5px;
  text-transform: capitalize;
  margin-top: 0;
  font-family: Helveticaneueltcom ltex, sans-serif;
  font-size: 15px;
  position: absolute;
  inset: auto 0% -9%;
}

.heading-23 {
  color: #2b2d33;
  letter-spacing: 1px;
  margin-top: 41px;
  font-family: Helveticaneueltcom mdex, sans-serif;
  font-size: 5vw;
  line-height: 5vw;
}

.heading-23.asdg {
  text-align: right;
}

.heading-23.awery {
  text-transform: capitalize;
  margin-top: 1px;
}

.text-block-14, .text-block-15, .text-block-16 {
  font-family: Akzidenzgrotesk extended, sans-serif;
}

.slide-9 {
  background-color: #000;
  background-image: url("https://cdn.prod.website-files.com/6a0765264735d1e3705a29fb/6a0765294735d1e3705a2a8d_PJOH4421.JPG");
  background-position: 50%;
  background-size: cover;
  width: 490px;
  height: 600px;
  margin-left: 10px;
}

.slide-9.srhng, .slide-9._987987hj {
  background-image: none;
}

.div-block-41 {
  padding-top: 23px;
  padding-left: 22px;
  position: absolute;
}

.heading-24 {
  color: #c9c9c9;
  letter-spacing: 1px;
  padding-left: 4px;
  font-family: Akzidenzgrotesk, sans-serif;
  font-size: 1vw;
  font-weight: 400;
}

.heading-25 {
  color: #debeb6;
  margin-top: 0;
  margin-bottom: -16px;
  font-family: Akzidenzgrotesk, sans-serif;
  font-size: 4vw;
  line-height: 5vw;
}

.heading-25.ert {
  font-size: 4.5vw;
  line-height: 6vw;
}

.text-block-17 {
  color: #c9c9c9;
  font-family: Helveticaneueltcom ltex, sans-serif;
}

.column-19 {
  justify-content: flex-start;
  align-items: flex-end;
  height: 330px;
  max-height: 100%;
  padding-top: 0;
  display: flex;
  position: relative;
}

.column-20 {
  justify-content: center;
  align-items: flex-end;
  height: 330px;
  display: flex;
}

.div-block-42 {
  height: 9vw;
}

.div-block-43 {
  height: 100%;
}

.column-21 {
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0;
  padding-right: 0;
}

.image-11 {
  border: 2px solid #debeb6;
  width: 420px;
}

.column-22 {
  height: auto;
  display: flex;
}

.div-block-44 {
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  height: 100px;
  display: grid;
  position: absolute;
  inset: auto 0% 0%;
}

.div-block-8 {
  background-image: url("https://cdn.prod.website-files.com/6a0765264735d1e3705a29fb/6a0765294735d1e3705a2aaa_gps%20point.png");
  background-position: 14%;
  background-repeat: no-repeat;
  background-size: 13px;
}

.div-block-7 {
  background-color: #fff;
  width: 25px;
  height: 1px;
  margin-left: 55px;
  margin-right: 17px;
  display: inline-block;
  position: relative;
  top: -3px;
}

.text-block-4 {
  letter-spacing: 1px;
  text-transform: none;
  font-family: Helveticaneueltcom ltex, sans-serif;
  font-size: 12px;
  display: inline-block;
}

.div-block-6 {
  text-align: center;
  width: auto;
  margin-top: 24px;
}

.text-block-18 {
  letter-spacing: 1px;
  text-transform: capitalize;
  width: auto;
  margin-bottom: -44px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0;
  font-family: Helveticaneueltcom ltex, sans-serif;
  font-size: 12px;
}

.div-block-5 {
  background-color: #debeb6;
  width: 2px;
  height: 50px;
  margin-top: 52px;
  margin-left: auto;
  margin-right: auto;
}

.text-block-5 {
  letter-spacing: 1px;
  text-transform: capitalize;
  margin-right: 26px;
  padding-top: 2px;
  font-family: Helveticaneueltcom ltex, sans-serif;
  font-size: 12px;
  position: relative;
}

.slider-2 {
  background-color: #ddd0;
  width: 100%;
}

.right-arrow-2, .left-arrow-2, .slide-nav-2 {
  display: none;
}

.slide-10 {
  text-align: center;
  padding-top: 94px;
  padding-bottom: 109px;
}

.text-block-19 {
  width: 770px;
  margin-left: 34px;
  font-family: Helveticaneueltcom bdex, sans-serif;
  font-size: 20px;
  line-height: 37px;
}

.textarea {
  color: #fff;
  text-align: center;
  background-color: #fff0;
  border: 2px solid #fff;
  margin-top: -12px;
  padding-top: 27px;
  padding-bottom: 39px;
  font-size: 12px;
}

.textarea::placeholder {
  color: #fff;
}

.form-block-3 {
  width: 75%;
  margin-left: auto;
  margin-right: auto;
}

.text-field-2 {
  color: #fff;
  text-align: left;
  letter-spacing: 1px;
  text-transform: uppercase;
  background-color: #fff0;
  border: 0 solid #0000;
  border-bottom: 2px solid #fff;
  margin-bottom: 16px;
  font-family: Akzidenzgrotesk, sans-serif;
  font-size: 12px;
}

.text-field-2::placeholder {
  color: #fff;
}

.text-block-20 {
  color: #fff;
  text-align: left;
  letter-spacing: 1px;
  text-transform: capitalize;
  width: 527.344px;
  margin: 18px auto 33px 0;
  padding-left: 1px;
  padding-right: 0;
  font-family: Helveticaneueltcom ltex, sans-serif;
  font-size: 16px;
  font-weight: 300;
}

.heading-15 {
  color: #fff;
  text-align: left;
  width: 527.344px;
  margin-top: 0;
  margin-bottom: -13px;
  padding-top: 0;
  font-family: Helveticaneueltcom hvex, sans-serif;
  font-size: 44px;
  font-weight: 400;
}

.background-video-2 {
  background-color: #141e35cc;
  width: 100%;
  height: 100%;
  margin-top: -163px;
  padding-top: 126px;
  padding-bottom: 126px;
}

.div-block-45 {
  text-align: center;
  background-color: #141e35;
  height: auto;
  padding-top: 136px;
  padding-bottom: 119px;
}

.div-block-45.ewe.uyui {
  display: none;
}

.div-block-45.sse {
  background-color: #141e3500;
  padding-top: 0;
  padding-bottom: 0;
}

.submit-button-3 {
  color: #fff;
  text-transform: uppercase;
  background-color: #2b2d33;
  border-radius: 0;
  margin-top: 30px;
  padding: 24px 50px;
  font-family: Helveticaneueltcom bdex, sans-serif;
}

.div-block-46 {
  height: 78px;
  margin-bottom: 134px;
}

.div-block-47 {
  text-align: center;
  background-color: #debeb6;
  height: auto;
  margin-top: 124px;
  padding-top: 70px;
  padding-bottom: 69px;
}

.text-block-21 {
  color: #2b2d33;
  text-align: left;
  font-family: Helveticaneueltcom hvex, sans-serif;
  font-size: 42px;
}

.text-span-5 {
  font-family: "Fa solid 900", sans-serif;
  position: relative;
  top: 2px;
}

.background-video-4 {
  text-align: left;
  background-color: #141e3500;
  width: auto;
  height: 100%;
  padding-top: 104px;
  padding-bottom: 104px;
}

.div-block-48 {
  text-align: right;
  background-color: #58585800;
  height: 700px;
  padding-top: 0;
  padding-left: 0;
  padding-right: 20px;
  position: relative;
}

.div-block-49 {
  background-color: #000;
  height: 700px;
}

.div-block-50 {
  background-color: #debeb6;
  width: auto;
  height: 600px;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 109px;
  padding-bottom: 109px;
}

.column-23 {
  padding-right: 0;
}

.form {
  width: 560px;
  max-width: 100%;
}

.columns-3 {
  text-align: center;
  background-color: #000;
  width: 1500px;
  max-width: 100%;
}

.heading-8 {
  color: #fff;
  text-align: left;
  margin-bottom: 17px;
  font-family: Helveticaneueltcom mdex, sans-serif;
  font-size: 38px;
  font-weight: 400;
}

.div-block-24 {
  background-color: #000000f2;
  height: 440px;
  padding-top: 85px;
}

.column-11 {
  text-align: left;
  padding-left: 0;
  padding-right: 0;
}

.div-block-51 {
  padding-left: 0;
}

.text-block-11 {
  color: #debeb6;
  text-align: left;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-top: -15px;
  margin-bottom: 20px;
  font-family: Helveticaneueltcom mdex, sans-serif;
  font-size: 14px;
  font-weight: 500;
}

.text-block-12 {
  color: #fff;
  text-align: left;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 115px;
  font-family: Helveticaneueltcom mdex, sans-serif;
  font-size: 12px;
  font-weight: 500;
}

.link-2 {
  color: #e71f1f;
  text-decoration: none;
}

.column-24 {
  padding-top: 8px;
  padding-left: 0;
}

.div-block-52 {
  background-color: #000;
  padding-top: 88px;
  padding-bottom: 88px;
}

.div-block-53 {
  background-color: #000;
  padding-top: 95px;
  padding-bottom: 95px;
}

.column-25 {
  padding-left: 0;
}

.div-block-54 {
  display: none;
}

.link-3, .link-4 {
  color: #2b2d33;
  text-decoration: none;
}

.image-12 {
  margin-top: 17px;
}

.columns-9 {
  background-color: #000;
}

@media screen and (max-width: 991px) {
  .text-block-3.ss, .heading-16, .heading-16.sss {
    display: none;
  }

  .heading-17 {
    padding-left: 6px;
  }

  .text-block-10 {
    padding-left: 8px;
  }

  .text-block-10.s {
    margin-top: 19px;
    padding-left: 8px;
  }

  .text-block-10.adsrz {
    margin-top: 39px;
  }

  .div-block-35.hk {
    height: 246px;
  }

  .div-block-36 {
    padding-top: 231px;
    padding-bottom: 114px;
  }

  .div-block-36.kjhe {
    padding-top: 269px;
    padding-bottom: 93px;
  }

  .image-10 {
    width: 40px;
  }

  .image-10.k {
    height: 44px;
  }

  .div-block-31 {
    padding-left: 0;
  }

  .heading-7 {
    top: -821px;
  }

  .heading-7.e4 {
    margin-top: 37px;
  }

  .paragraph-5 {
    padding-left: 5px;
  }

  .text-block-13 {
    font-size: 7px;
  }

  .paragraph-2.asdfer {
    margin-bottom: -58px;
  }

  .heading-19, .heading-19.asdf, .heading-19.ddd {
    font-size: 50px;
  }

  .project-container {
    margin-top: 20vh;
    margin-bottom: 20vh;
  }

  .heading-h1 {
    margin-left: 5vw;
  }

  .project {
    width: 80%;
    height: 72vh;
  }

  .heading-21 {
    margin-bottom: -72px;
  }

  .slide-7.astdsh {
    width: 500px;
  }

  .text-block-20 {
    max-width: 100%;
    padding-left: 0;
    padding-right: 10px;
    font-size: 15px;
  }

  .heading-15 {
    width: 389px;
    max-width: 100%;
    margin-left: 0;
    margin-right: auto;
    font-size: 34px;
  }

  .div-block-45 {
    padding-top: 118px;
  }

  .div-block-45.ewe.uyui {
    display: none;
  }

  .text-block-21 {
    font-size: 30px;
  }

  .div-block-54 {
    display: none;
  }
}

@media screen and (max-width: 767px) {
  .background-video {
    height: 470px;
  }

  .button {
    margin-left: 23px;
  }

  .button._123 {
    margin-left: 21px;
  }

  .heading-5 {
    font-size: 42px;
  }

  .text-block-3 {
    font-size: 13px;
  }

  .text-block-3.ss {
    display: none;
  }

  .image-9 {
    margin-top: 179px;
    padding-left: 53px;
    padding-right: 19px;
  }

  .text-block-10.s {
    margin-top: -17px;
  }

  .text-block-10.adsrz.aewr {
    margin-top: 11px;
  }

  .column-10.kjhi {
    margin-bottom: 660px;
    padding-bottom: 0;
  }

  .div-block-33 {
    width: 100%;
    margin-bottom: 10px;
  }

  .div-block-36 {
    padding-top: 52px;
    padding-left: 2px;
    padding-right: 2px;
  }

  .div-block-36.kjhe {
    padding: 11px 0 147px 19px;
  }

  .heading-7 {
    display: block;
    top: -566px;
  }

  .heading-7.ssd {
    display: block;
    top: -115px;
  }

  .heading-7.e4 {
    display: none;
  }

  .div-block-34 {
    margin-bottom: 10px;
  }

  .project-container {
    margin-top: 15vh;
    margin-bottom: 15vh;
  }

  .project {
    height: 90vh;
  }

  .div-block-7, .text-block-4, .text-block-5 {
    display: none;
  }

  .div-block-45.ewe.uyui {
    margin-top: 31px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  .div-block-45.sse, .column-16 {
    display: none;
  }

  .div-block-54 {
    z-index: 2000;
    text-align: center;
    background-color: #000;
    width: 100%;
    height: 100%;
    padding-top: 20vh;
    font-family: Akzidenzgrotesk extended, sans-serif;
    display: block;
    position: fixed;
    inset: 0%;
  }

  .heading-26 {
    text-transform: capitalize;
    font-size: 20px;
  }
}

@media screen and (max-width: 479px) {
  .background-video {
    height: 100%;
  }

  .nav-menu {
    padding-top: 97px;
  }

  .button {
    margin-top: 23px;
    margin-left: 15px;
  }

  .button._123 {
    margin-top: 13px;
    margin-bottom: 7px;
    margin-left: 10px;
  }

  .heading-5 {
    font-family: Akzidenzgrotesk extended, sans-serif;
    font-size: 8vw;
    line-height: 6vw;
  }

  .text-block-3.s {
    display: none;
  }

  .text-block-3.ss {
    font-family: Akzidenzgrotesk, sans-serif;
    font-size: 3.5vw;
    display: block;
  }

  .image-9 {
    width: 32vw;
    margin-top: 194px;
    padding-left: 24px;
    padding-right: 0;
  }

  .image-9.wer {
    float: none;
    margin-top: 76px;
  }

  .column-17 {
    overflow: hidden;
  }

  .columns-2 {
    height: auto;
  }

  .text-block-10.s {
    margin-top: -29px;
  }

  .text-block-10.adsrz {
    margin-top: 5px;
  }

  .text-block-10.adsrz.aewr {
    margin-top: -6px;
  }

  .column-10 {
    height: auto;
    overflow: hidden;
  }

  .column-10.kjhi {
    height: auto;
    margin-bottom: 14px;
    padding-bottom: 0;
    overflow: visible;
  }

  .div-block-35 {
    overflow: hidden;
  }

  .div-block-33 {
    width: 100%;
    margin-bottom: 10px;
  }

  .div-block-36 {
    padding: 52px 0 0;
  }

  .div-block-36.kjhe {
    margin-bottom: -65px;
    padding-top: 84px;
    padding-bottom: 0;
    padding-left: 0;
  }

  .image-10 {
    width: 35px;
  }

  .image-10.k {
    width: 35px;
    height: 35px;
  }

  .image-10.a {
    width: 22px;
  }

  .div-block-27 {
    height: auto;
    padding-top: 0;
    overflow: visible;
  }

  .div-block-31 {
    margin-bottom: -97px;
  }

  .heading-7 {
    font-size: 26vw;
    display: block;
    top: -839px;
  }

  .heading-7.d {
    display: none;
  }

  .heading-7.ert {
    display: block;
    top: 201px;
  }

  .heading-7.ssd {
    margin-top: 5px;
    display: block;
    top: -61px;
  }

  .heading-7.e4 {
    display: none;
    top: -1317px;
  }

  .columns-6 {
    overflow: hidden;
  }

  .paragraph-5 {
    width: auto;
  }

  .text-block-13 {
    font-size: 6px;
  }

  .div-block-26 {
    height: auto;
    padding-right: 0;
    overflow: visible;
  }

  .div-block-34 {
    margin-bottom: 10px;
  }

  .div-block-20 {
    text-align: left;
    max-width: 100%;
    padding-top: 45px;
    padding-left: 38px;
    padding-right: 0;
  }

  .div-block-20.sdg {
    padding-top: 0;
  }

  .div-block-20.sdg._4eyrg {
    width: 587px;
    max-width: 104%;
    margin-bottom: 2px;
    padding-left: 0;
  }

  .column-2 {
    padding-left: 62px;
    padding-right: 18px;
  }

  .div-block-17 {
    height: auto;
    padding-top: 54px;
    padding-bottom: 222px;
  }

  .column-5 {
    display: none;
  }

  .image-3 {
    float: none;
    top: 104px;
    left: 68px;
  }

  .div-block-29.sdgsh {
    margin-top: 74px;
  }

  .paragraph {
    max-width: 100%;
    padding-left: 54px;
    padding-right: 0;
  }

  .slider {
    height: 450px;
    margin-bottom: -57px;
  }

  .div-block-22 {
    margin-top: 12px;
  }

  .paragraph-2 {
    margin-top: 9px;
    margin-bottom: 177px;
    font-size: 18px;
    line-height: 35px;
  }

  .paragraph-2.asdfer {
    margin-bottom: 122px;
    padding-left: 62px;
    font-size: 18px;
  }

  .slide-4, .slide-2, .slide {
    height: 320px;
  }

  .button-5 {
    margin-top: 2px;
    margin-left: 62px;
  }

  .button-5.jhj {
    margin-left: 0;
  }

  .slide-3 {
    height: 320px;
  }

  .div-block-32 {
    padding-left: 0;
  }

  .mask {
    height: 84%;
  }

  .heading-18 {
    font-size: 1.8vw;
    bottom: -15%;
  }

  .heading-19, .heading-19.asdf, .heading-19.ddd {
    font-size: 7vw;
  }

  .heading-20 {
    margin-top: 23px;
    padding-left: 62px;
    font-size: 34px;
  }

  .column-15 {
    padding-bottom: 0;
    padding-left: 62px;
    padding-right: 0;
  }

  .div-block-21 {
    width: 4vw;
    top: -8px;
  }

  .btn {
    font-size: 20px;
  }

  .heading-h1 {
    margin-top: 20vh;
    margin-left: 24px;
    font-size: 12vw;
    line-height: 14vw;
  }

  .heading-h1.solid, .heading-h1.outline {
    font-size: 10vw;
  }

  .project {
    width: 80%;
    height: 50vh;
  }

  .page {
    padding-top: 81px;
  }

  .img {
    object-fit: cover;
    min-height: 100%;
  }

  .div-block-40 {
    padding-top: 0;
  }

  .heading-21 {
    margin-top: 28px;
    margin-bottom: -37px;
    font-size: 7vw;
    line-height: 10vw;
  }

  .text-span-4 {
    letter-spacing: -12px;
    margin-left: 28px;
    font-size: 7vw;
    position: relative;
    left: -22px;
  }

  .paragraph-6 {
    max-width: 100%;
    padding-left: 54px;
    padding-right: 0;
  }

  .slide-5 {
    background-position: 50% 0;
    width: 185%;
    height: 335px;
  }

  .slide-5.etgt {
    height: 320px;
  }

  .slide-6 {
    background-position: 50% 0;
    width: 185%;
    height: 320px;
  }

  .slide-7 {
    background-position: 50% 0;
    background-size: cover;
    width: 185%;
    height: 320px;
  }

  .slide-7.astdsh {
    width: 185%;
    height: 320px;
  }

  .slide-8 {
    background-position: 50% 0;
    width: 185%;
    height: 335px;
  }

  .slide-8.dfgh {
    height: 320px;
  }

  .slide-8._87tyiuh {
    height: 335px;
  }

  .heading-22 {
    font-size: 1.8vw;
    bottom: -15%;
  }

  .heading-23 {
    color: #000000db;
    margin-top: 23px;
    padding-left: 62px;
    font-size: 10vw;
    line-height: 12vw;
  }

  .text-block-14 {
    letter-spacing: 3px;
    font-family: Helveticaneueltcom blkex, sans-serif;
    font-size: 17px;
  }

  .text-block-15, .text-block-16 {
    letter-spacing: 3px;
    font-family: Helveticaneueltcom bdex, sans-serif;
    font-size: 17px;
  }

  .slide-9 {
    background-position: 50% 0;
    width: 185%;
    height: 320px;
  }

  .slide-9.srhng {
    height: 320px;
  }

  .slide-9._987987hj {
    height: 335px;
  }

  .div-block-41 {
    height: 280px;
    padding-left: 54px;
  }

  .heading-24 {
    font-size: 2vw;
  }

  .heading-25 {
    font-size: 9vw;
    line-height: 10vw;
  }

  .heading-25.ert {
    font-size: 11vw;
    line-height: 12vw;
  }

  .column-21 {
    margin-top: -50px;
    padding-left: 62px;
  }

  .image-11 {
    width: 93%;
  }

  .column-22 {
    height: 80px;
  }

  .div-block-8 {
    background-image: none;
    background-repeat: repeat;
    background-size: auto;
    padding-left: 9px;
  }

  .div-block-7 {
    display: none;
  }

  .text-block-4 {
    font-size: 3vw;
    display: none;
  }

  .text-block-18 {
    width: 140px;
    font-size: 11px;
  }

  .text-block-5 {
    margin-right: 7px;
    font-size: 3vw;
    display: none;
  }

  .slide-10 {
    padding-top: 104px;
  }

  .text-block-19 {
    width: 730px;
    max-width: 91%;
    margin-left: 17px;
    font-size: 14px;
    line-height: 25px;
  }

  .form-block-3 {
    width: 86%;
  }

  .text-field-2 {
    border-width: 1px 1px 2px;
    border-color: #0000 #0000 #fff;
    border-radius: 0;
    margin-bottom: 9px;
  }

  .text-block-20 {
    font-size: 9px;
    line-height: 16px;
    display: none;
  }

  .heading-15 {
    margin-bottom: 1px;
    padding-left: 3px;
    font-size: 6vw;
  }

  .div-block-45 {
    padding-top: 61px;
    padding-bottom: 50px;
  }

  .div-block-45.ewe.uyui {
    background-color: #141e3512;
    margin-top: 30px;
    padding-top: 0;
    padding-bottom: 0;
    display: block;
  }

  .div-block-45.sse {
    display: none;
  }

  .submit-button-3 {
    margin-top: 18px;
    padding: 18px 36px;
  }

  .background-video-3 {
    background-color: #141e35d9;
    height: 100%;
    padding-top: 77px;
    padding-bottom: 60px;
  }

  .div-block-47 {
    margin-top: 30px;
    padding-top: 32px;
    padding-bottom: 32px;
  }

  .text-block-21 {
    font-size: 7vw;
  }

  .text-block-21.sdgfh {
    font-size: 4.5vw;
  }

  .div-block-48 {
    height: auto;
    padding-right: 0;
    overflow: visible;
  }

  .div-block-50 {
    height: auto;
    padding-top: 34px;
    padding-bottom: 26px;
  }

  .form {
    width: 600px;
  }

  .heading-8 {
    width: 300px;
    max-width: 100%;
    margin-bottom: 26px;
    margin-left: 0;
    margin-right: auto;
    font-size: 10vw;
    line-height: 11vw;
  }

  .column-16 {
    display: none;
  }

  .div-block-24 {
    padding-top: 75px;
  }

  .text-block-11 {
    margin-left: auto;
    margin-right: auto;
  }

  .text-block-12 {
    width: 100%;
    max-width: 100%;
    margin-top: 79px;
    margin-left: auto;
    margin-right: auto;
    font-size: 8px;
  }

  .column-24, .column-25 {
    padding-left: 62px;
  }

  .column-26, .column-27, .column-28, .div-block-54 {
    display: none;
  }
}

#w-node-_24bf3110-7f6c-dc95-b1df-e562c9b532bc-705a2a5e {
  place-self: center start;
}

#w-node-_24bf3110-7f6c-dc95-b1df-e562c9b532c0-705a2a5e {
  place-self: center;
}

#w-node-_24bf3110-7f6c-dc95-b1df-e562c9b532c4-705a2a5e {
  place-self: center end;
}
