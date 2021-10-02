(function (window) {
    'use strict';
    var PAYMENT_SELECTOR = '[payment-form="form"]'
    var App = window.App;
    var FormHandler = App.FormHandler;
    var paymentHandler = new FormHandler(PAYMENT_SELECTOR);

    paymentHandler.addSubmitHandler(function (data) {
        var dialog_box = document.querySelector('[Payment-message = "response"]');
        console.log(dialog_box.textContent);
        dialog_box.textContent = "Thank you for your payment. " + data['title'] + " " + data['customerID'];
        console.log(dialog_box.textContent);

        // eslint-disable-next-line no-undef
        $('#pop-up').modal({
            show: 'true'
        });
    });

    console.log(paymentHandler);
})(window);
