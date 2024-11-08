gsap.from(".pdiv1 .box", {
    scale: 0,
    rotate: 360,
    delay: 1,
    duration: 1.5
})
gsap.from(".pdiv2 h1", {
    opacity: 0,
    x: 500,
    duration: 1,
    scrollTrigger: {
        trigger: ".pdiv2 h1", //madlab jis cheez pa animation chalani ha usko point karna
        scroller: "body",
        // markers: 'true', // markers sa developer ko asani hoti ha ka animation Execute kb karwana ha
        start: "top 50%" // markers ko uper nicha karna ka lia
    }
})
gsap.from(".pdiv2 h2", {
    opacity: 0,
    x: -500,
    duration: 1,
    scrollTrigger: {
        trigger: ".pdiv2 h1", //madlab jis cheez pa animation chalani ha usko point karna
        scroller: "body",
        // markers: 'true', // markers sa developer ko asani hoti ha ka animation Execute kb karwana ha
        start: "top 50%" // markers ko uper nicha karna ka lia
    }
})
gsap.from(".pdiv3 .box", {
    scale: 0,
    rotate: -360,
    // delay:2,
    duration: 1.5, scrollTrigger: {
        trigger: ".pdiv3 .box", //madlab jis cheez pa animation chalani ha usko point karna
        scroller: "body",
        // markers: 'true', // markers sa developer ko asani hoti ha ka animation Execute kb karwana ha
        start: "top 60%" // markers ko uper nicha karna ka lia
    }
})