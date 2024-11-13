function init() {
    fadeInElement();
    setupEvents();
}

function setupEvents() {
    document.addEventListener("scroll", fadeInElement);
}

function fadeInElement() {
    let pageTop = $(document).scrollTop();
    let pageBottom = pageTop + $(window).height();
    let tags = $(".fade");

    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];

        if ($(tag).position().top < pageBottom) {
            $(tag).addClass("visible");
        } else {
            $(tag).removeClass("visible");
        }
    }
}

Fancybox.bind('[data-fancybox]', {
  //
});

export { init };