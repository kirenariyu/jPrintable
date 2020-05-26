# jTrint

jTrint is a jQuery plugin for printing documents of tables like payslip.

## Getting Started

* jtrint.js

### Prerequisites

* jQuery

### Installing

```
jTrint(options);
```

## Options

<table width="100%">
    <tr>
        <th align="left" colspan="5"><a href="#prerequisite-classes" name="prerequisite-classes">Prerequisite Classes</a></th>
    </tr>
	<tr>
		<th align="left" colspan="1">Class</th>
		<th align="left" colspan="2">Description</th>
		<th align="left" colspan="2">Prerequisite</th>
	</tr>
    <tr>
        <td><code>.hide-print</code></td>
        <td colspan="2">This will hide the visible element on print.</td>
        <td colspan="2"></td>
    </tr>
    <tr>
        <td><code>.show-print</code></td>
        <td colspan="2">This will show the hidden element on print.</td>
        <td colspan="2"></td>
    </tr>
    <tr>
        <td><code>.header-area</code></td>
        <td colspan="2">Place this class in the parent container of the header where its associated contents are also included. You may combine this class with <code>.footer-area</code> class if there's also a footer incorporated.</td>
        <td colspan="2"><code>header</code></td>
    </tr>
    <tr>
        <td><code>.footer-area</code></td>
        <td colspan="2">Place this class in the parent container of the footer where its associated contents are also included. You may combine this class with <code>.header-area</code> class if there's also a header incorporated.</td>
        <td colspan="2"><code>footer</code></td>
    </tr>
    <tr>
        <th align="left" colspan="5"><a href="#options" name="options">Options</a></th>
    </tr>
	<tr>
		<th align="left" width="20%">Option</th>
		<th align="left" width="40%">Description</th>
		<th align="left" width="10%">Prerequisite</th>
		<th align="left" width="10%">Type</th>
		<th align="left" width="10%">Default</th>
	</tr>
    <tr>
        <td><code>buttonClass</code></td>
        <td>Allows you to add more classnames to the print button. For multiple class, add space as delimiter just like inputting classes in HTML.</td>
        <td><code>buttonContainer</code></td>
        <td><code>string</code></td>
        <td><code>null</code></td>
    </tr>
    <tr>
        <td><code>buttonContainer</code></td>
        <td>A required option if you wanted to place a print button. Pass it with node name, id (<code>#id</code>) of the element or class (<code>.class</code>) of the element/s if you like to put the print button in multiple places of your page.</td>
        <td></td>
        <td><code>string</code></td>
        <td><code>null</code></td>
    </tr>
    <tr>
        <td><code>buttonText</code></td>
        <td>Allows you to change the default text of the print button. You may also add the size name by adding <code>&lt;size&gt;</code> in the string. This option is recommended if you have multiple page sizes.</td>
        <td><code>buttonContainer</code></td>
        <td><code>string</code></td>
        <td><code>'Print'</code></td>
    </tr>
    <tr>
        <td><code>container</code></td>
        <td>Assigns a container element to be the only content to be shown on print. For multiple containers, add comma as delimiter. Please be sure to include selector.</td>
        <td></td>
        <td><code>string</code></td>
        <td><code>'body'</code></td>
    </tr>
    <tr>
        <td><code>cssContainer</code></td>
        <td>Specifies the container where the dynamically added css file will be placed. The default would be in the first-of-type <code>head</code> of the document. If there's no <code>cssPath</code> but you placed this option, it will occur an error.</td>
        <td><code>cssPath</code></td>
        <td><code>string</code></td>
        <td><code>'head'</code></td>
    </tr>
    <tr>
        <td><code>cssPath</code></td>
        <td>This is used for dynamically adding of the css file of jTrintby passing its file or url path.</td>
        <td></td>
        <td><code>string</code></td>
        <td><code>null</code></td>
    </tr>
    <tr>
        <td><code>footer</code></td>
        <td>Assigns a container element to be the footer of the page on print. There should be one for each <code>.footer-area</code>.</td>
        <td><code>.footer-area</code></td>
        <td><code>string</code></td>
        <td><code>null</code></td>
    </tr>
    <tr>
        <td><code>header</code></td>
        <td>Assigns a container element to be the header of the page on print. There should be one for each <code>.header-area</code>.</td>
        <td><code>.header-area</code></td>
        <td><code>string</code></td>
        <td><code>null</code></td>
    </tr>
    <tr>
        <td><code>keypress</code></td>
        <td>If true, it will allow you to print using <kbd>ctrl</kbd> and <kbd>P</kbd> with the configured layout.</td>
        <td></td>
        <td><code>boolean</code></td>
        <td><code>false</code></td>
    </tr>
    <tr>
        <td><code>margin</code></td>
        <td>Specifies the margin for all pages. Pass margin the same way in css. There are still no function where you can change margin on multiple pages.</td>
        <td></td>
        <td><code>string</code></td>
        <td><code>'0'</code></td>
    </tr>
    <tr>
        <td><code>orientation</code></td>
        <td>Allows you to change the layout of the pages. There are only two choices for this option: portrait and landscape.</td>
        <td></td>
        <td><code>string</code></td>
        <td><code>'portrait'</code></td>
    </tr>
    <tr>
        <td><code>size</code></td>
        <td>Allows you to change the paper size and add more wih delimiter comma. If the desired size is not in the list, you may add manual size e.g. <code>120cmX130cm</code> in widthXheight format. The measurements should be in lowercase and the delimiter 'X' should be in uppercase.</td>
        <td></td>
        <td><code>string</code></td>
        <td><code>'letter'</code></td>
    </tr>
</table>

## Running the Sample Website

This repository contains a sample website to give demo to user who will use the jTrint plugin. Other files, used framework and plugins in the demo are not required this plugin to run.

## Issues, Feedbacks and Suggestions

You're free to email me at yumitakuma@outlook.com.

## Contributing

Please read [CONTRIBUTING.md](https://github.com/takumayumirin/jTrint/blob/master/CONTRUBUTING.md) for details on code of conduct, and the process for submitting pull requests.

## Versioning

* Initial version 1.0

## Authors

* **Yumi Takuma** - [takumayumirin](https://github.com/takumayumirin)

## MIT License

Copyright &copy; 2019 Yumi Takuma

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
