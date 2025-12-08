document.addEventListener("DOMContentLoaded", () => {
    const widget = document.getElementById("wa-widget");
    const button = widget.querySelector(".wa-widget__button");
    const closeBtn = widget.querySelector(".wa-widget__close");
    const cta = widget.querySelector(".wa-widget__cta");

    const phone = widget.dataset.phone;
    const msg = encodeURIComponent(widget.dataset.message);

    const waUrl = `https://wa.me/${phone}?text=${msg}`;
    cta.href = waUrl;

    button.onclick = () => {
        if (widget.classList.contains("wa-widget--open"))
            window.open(waUrl, "_blank");
        else
            widget.classList.add("wa-widget--open");
    };

    closeBtn.onclick = () => widget.classList.remove("wa-widget--open");
});
