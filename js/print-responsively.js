/************************************************
 *
 * Copyright (C) Yumi Takuma
 * yumitakuma@gmail.com
 *
 * Date: 2019-07-08
 *
 ************************************************/

// List of known paper sizes in mm
var papers = [
    { paper: '4A0', width: 1682, height: 2378 },
    { paper: '2A0', width: 1189, height: 1682 },
    { paper: 'A0', width: 841, height: 1189 },
    { paper: 'A1', width: 594, height: 841 },
    { paper: 'A2', width: 420, height: 594 },
    { paper: 'A3', width: 297, height: 420 },
    { paper: 'A4', width: 210, height: 297 },
    { paper: 'A5', width: 148, height: 210 },
    { paper: 'A6', width: 105, height: 148 },
    { paper: 'A7', width: 74, height: 105 },
    { paper: 'A8', width: 52, height: 74 },
    { paper: 'A8', width: 37, height: 52 },
    { paper: 'A10', width: 26, height: 37 },
]

_checkClass = function (element) {
    if (element.classList.length > 0) {
        return ' ';
    } else {
        return '';
    }
}

_setContainer = function (container) {
    if (container.charAt(0) == '#') {
        document.querySelector(container).className += _checkClass(container) + 'main-container-for-print';
    } else {
        var classElement = document.getElementsByClassName(container.replace('.', ''));

        for (var a = 0; a < classElement.length; a++) {
            classElement[a].className += _checkClass(classElement[a]) + 'main-container-for-print';
        }
    }

    var mainContainer = document.getElementsByClassName('main-container-for-print');

    for (var b = 0; b < mainContainer.length; b++) {
        var parent = mainContainer[b];

        while (parent) {
            if (!parent.classList.contains('container-for-print') && !parent.classList.contains('main-container-for-print'))
                parent.className += _checkClass(parent) + 'container-for-print';

            if (parent.nodeName == 'HTML') {
                break;
            } else {
                if (parent.childElementCount > 1) {
                    for (var c = 0; c < parent.children.length; c++) {
                        if (!parent.children[c].classList.contains('container-for-print') &&
                            !parent.children[c].classList.contains('main-container-for-print') &&
                            parent.children[c].nodeName != 'HEAD')
                            parent.children[c].className += _checkClass(parent.children[c]) + 'hide-on-print';
                    }
                }

                parent = parent.parentNode;
            }
        }
    }
}

_setCss = function (cssContainer, cssPath) {
    var link            = document.createElement('link');
        link.href       = cssPath;
        link.className  = 'dynamic-stylesheet-1'
        link.rel        = 'stylesheet';
        link.type       = 'text/css';
        cssContainer    = (cssContainer) ? cssContainer : 'head';

    if (cssContainer.charAt(0) == '#') {
        document.querySelector(cssContainer).appendChild(link);
    } else {
        var classElement = document.getElementsByClassName(cssContainer.replace('.', ''));

        for (var d = 0; d < classElement.length; d++) {
            classElement[d].prepend(link);
        }
    }
}

_setButton = function (buttonClass, buttonContainer, buttonText, container, margin, orientation, size) {
    var buttons     = document.createElement('div'),
        buttonText  = (buttonText) ? buttonText : 'PRINT';
        buttons.id  = 'print-button-container';

    if (buttonText.includes('<size>') && size.includes(',')) {
        size.replace(/\s/g, '').split(',').forEach(function (obj) {
            var button              = document.createElement('button');
                button.type         = 'button';
                button.className    = 'print-button' + ((buttonClass) ? ' ' + buttonClass : '');
                button.id           = 'print-it-in-' + obj;
                button.innerHTML    = buttonText.replace('<size>', obj);
            
            button.addEventListener('click', (event) => { _printPage(container, obj, margin, orientation) });
            buttons.appendChild(button);
        });
    } else {
        var button              = document.createElement('button');
            button.type         = 'button';
            button.className    = 'print-button' + ((buttonClass) ? ' ' + buttonClass : '');
            button.id           = 'print-it-in-' + size;
            button.innerHTML    = (buttonText.includes('<size>')) ? buttonText + ' ' + size : buttonText;

        button.addEventListener('click', (event) => { _printPage(container, obj, margin, orientation) });
        buttons.appendChild(button);
    }

    if (buttonContainer.charAt(0) == '#') {
        document.querySelector(buttonContainer).appendChild(buttons);
    } else {
        var classElement = document.getElementsByClassName(buttonContainer.replace('.', ''));

        for (var d = 0; d < classElement.length; d++) {
            classElement[d].prepend(buttons);
        }
    }
}

_printPage = function (container, id, margin, orientation) {
    var links = document.getElementsByClassName('dynamic-stylesheet-1');

    for (var e = 0; e < links.length; e++) {
        links[e].removeAttribute('disabled');
    }

    window.onbeforeprint = (event) => {
        if (document.getElementById('dynamic-stylesheet-2')) {
            document.getElementById('dynamic-stylesheet-2').remove();
            console.log('There\'s one.');
        }
    
        // Set @page
        var stylesheet              = document.createElement('style');
            stylesheet.rel          = 'stylesheet';
            stylesheet.type         = 'text/css';
            stylesheet.id           = 'dynamic-stylesheet';
            stylesheet.innerHTML    = '@page { size: ' + id  + '; orientation: ' + orientation + '; } @media print { ' + container + ' { padding: ' + margin + ' !important; } }';
    
        document.querySelector('head').appendChild(stylesheet);
    };

    window.print();

    window.onafterprint = (event) => {
        if (document.getElementById('dynamic-stylesheet-2')) {
            document.getElementById('dynamic-stylesheet-2').remove();
            console.log('There\'s one.');
        }
    };
}

_printResponsively = function (param) {
    var buttonClass     = (param.buttonClass) ? param.buttonClass : '',
        buttonContainer = (param.buttonContainer) ? param.buttonContainer : '',
        buttonText      = (param.buttonText) ? param.buttonText : '',
        container       = (param.container) ? param.container : 'body',
        cssPath         = (param.cssPath) ? param.cssPath : '',
        cssContainer    = (param.cssContainer) ? param.cssContainer : '',
        footer          = (param.footer) ? param.footer : '',
        header          = (param.header) ? param.header : true,
        keypress        = (param.keypress) ? param.keypress : '',
        margin          = (param.margin) ? param.margin : '0',
        orientation     = (param.orientation) ? param.orientation : 'portrait',
        size            = (param.size) ? param.size : 'letter';

    // Add button
    if (!buttonContainer && buttonText) {
        console.log('You must add the id or class of button container/s.');
    } else if (buttonContainer) {
        _setButton(buttonClass, buttonContainer, buttonText, container, margin, orientation, size);
    }

    // Hide all contents outside the container
    if (container != 'body') _setContainer(container);

    // Dynamically import css and place it in specific area
    if (cssContainer && !cssPath) {
        console.log('You must add the path to printResponsively.css via cssPath.');
    } else if (cssPath) {
        _setCss(cssContainer, cssPath);
    }

    // Listen to keypress
    window.addEventListener("keydown", (event) => {
        if ((event.ctrlKey || event.keyCode === 80) && (keypress == false)) {
            var links = document.getElementsByClassName('dynamic-stylesheet-1');

            for (var z = 0; z < links.length; z++) {
                links[z].setAttribute('disabled', true);
            }
        }
    });

    // Get width and height of the paper
    var width  = 0, height   = 0;

    papers.forEach(function (item, index, array) {
        if (size.toUpperCase() == item.paper) {
            width   = item.width + 'mm';
            height  = item.height + 'mm';
        } else {
            width   = size.split(' x ')[0];
            height  = size.split(' x ')[1];
        }
    });
};

printResponsively = function (param) {
    // console.log(param);
    if (param) {
        return new _printResponsively(param);
    } else {
        return new _printResponsively({
            size: 'letter'
        });
    }
};