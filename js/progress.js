//- Reading Progress Indicator

{
    const progress = document.querySelector(".js-progress");
    const body = document.body;
    const html = document.documentElement;

    const updateSizes = () => ({
        height: Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight
        ),
        vh: Math.max(html.clientHeight, window.innerHeight || 0)
    });

    let scrollY = 0;
    let sizes = updateSizes();

    const update = () =>
        progress.setAttribute(
            "value",
            100 - ((sizes.height - scrollY - sizes.vh) / sizes.height) * 100
        );

    const onScroll = () => {
        scrollY =
            (window.pageYOffset || document.scrollTop) -
            (document.clientTop || 0);
        requestAnimationFrame(update);
    };

    const onResize = () => {
        sizes = updateSizes();
        requestAnimationFrame(update);
    };

    if (progress) {
        progress.setAttribute("max", 100);
        window.addEventListener("scroll", onScroll, false);
        window.addEventListener("resize", onResize, false);
    }
}
