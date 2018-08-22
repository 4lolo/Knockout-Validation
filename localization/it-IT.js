/**
 * Localization file for Italian - Italy (it-IT)
 */
(function(factory) {
    /*global ko,require,define,module*/
    if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') {
        module.exports = factory(require('../'));
    } else if (typeof define === 'function' && define.amd) {
        define(['knockout.validation'], factory);
    } else {
        factory(ko.validation);
    }
}(function(kv) {
    return kv.defineLocale('it-IT', {
        required: 'Il campo è obbligatorio.',
        min: 'Inserire un valore superiore od uguale a {0}.',
        max: 'Inserire un valore inferiore od uguale a {0}.',
        minLength: 'Inserire almeno {0} caratteri.',
        maxLength: 'Inserire al massimo {0} caratteri.',
        pattern: 'Controllare il valore inserito.',
        step: 'Il valore deve essere incrementato di {0}.',
        email: 'Indirizzo email non valido.',
        date: 'Inserire una data valida.',
        dateISO: 'Inserire una data valida.',
        number: 'Inserire un valore numerico.',
        digit: 'Inserire una cifra.',
        phoneUS: 'Specificare un numero di telefono valido.',
        equal: 'I valori devono essere uguali.',
        notEqual: 'Il valore deve essere differente.',
        unique: 'Il valore deve essere univoco.'
    });
}));
