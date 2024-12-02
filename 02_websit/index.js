gsap.from(".feture", {
    y: 50,
    duration: 1,
    opacity:0,
    scrollTrigger: {
        trigger: '.feture',
        scroller: 'body',
        start: "top 80%",
        end: "top 70%",
    }
});
