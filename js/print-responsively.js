/************************************************
 *
 * Copyright (C) Yumi Takuma
 * yumitakuma@gmail.com
 *
 * Date: 2019-07-08
 *
 ************************************************/

/*
 * There will be always a parameter for size.
 */
_printResponsively = function(param) {
    var container       = (param.container) ? param.container : 'body',
        header          = (param.header) ? param.header : '',
        footer          = (param.footer) ? param.footer : '',
        size            = (param.size) ? param.size : '',
        buttonContainer = (param.buttonContainer) ? param.buttonContainer : '',
        buttonText      = (param.buttonText) ? param.buttonText : '';

    this.node = document.querySelector(container);
};

printResponsively = function(param) {
    if (param) {
        return new _printResponsively(param);
    } else {
        console.log('ERROR: You need to pass the parameter size.');
    }
};