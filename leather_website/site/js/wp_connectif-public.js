(function ($) {
    'use strict';
    $(window).on('load', () => {
        if (
            window.connectif &&
            window.connectif.managed &&
            window.connectif.managed.isInitialized()
        ) {
            onConnectifStarted();
        } else {
            document.addEventListener('connectif.managed.initialized', onConnectifStarted);
        }
        function onConnectifStarted() {
            const cartPageEvents = 'wc_cart_emptied updated_cart_totals';
            const cartEvents = 'added_to_cart removed_from_cart cart_totals_refreshed';
            $(document.body).on(`${cartPageEvents} ${cartEvents}`, function () {
                $.get(`${pluginsUrl}/wp_connectif/public/cn-cart-ajax.php`, cartHtml => {
                    const cart = $('div.cn_cart');
                    if (cart.length) {
                        cart.replaceWith(cartHtml);
                    } else {
                        $('body').append(cartHtml);
                    }
                    window.connectif.managed.sendEvents([]);
                });
            });
        }
    });
})(jQuery);
