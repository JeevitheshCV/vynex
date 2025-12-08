// Simple reusable WhatsApp floating widget
// Works with a single HTML block:
// <div id="wa-widget" class="wa-widget" data-phone="917289010100" data-message="..."> ... </div>

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var widget = document.getElementById('wa-widget');
    if (!widget) return;

    var mainButton = widget.querySelector('.wa-widget__button');
    var closeButton = widget.querySelector('.wa-widget__close');
    var ctaLink = widget.querySelector('.wa-widget__cta');

    var phone = (widget.getAttribute('data-phone') || '').replace(/\D/g, '');
    var message = widget.getAttribute('data-message') || '';
    if (!phone) return;

    var waUrl = 'https://wa.me/' + phone;
    if (message) {
      waUrl += '?text=' + encodeURIComponent(message);
    }

    if (ctaLink) {
      ctaLink.setAttribute('href', waUrl);
    }

    // Toggle behavior:
    // first click → open panel
    // if already open → go to WhatsApp
    if (mainButton) {
      mainButton.addEventListener('click', function () {
        if (widget.classList.contains('wa-widget--open')) {
          window.open(waUrl, '_blank', 'noopener');
        } else {
          widget.classList.add('wa-widget--open');
        }
      });
    }

    if (closeButton) {
      closeButton.addEventListener('click', function () {
        widget.classList.remove('wa-widget--open');
      });
    }

    // Optional: close panel if user clicks outside it
    document.addEventListener('click', function (e) {
      if (!widget.classList.contains('wa-widget--open')) return;
      if (!widget.contains(e.target)) {
        widget.classList.remove('wa-widget--open');
      }
    });
  });
})();
