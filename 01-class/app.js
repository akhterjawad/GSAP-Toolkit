// Move to the final position with scaling and rotation
gsap.to("#box", {
    x: 900,
    scale: 1.2,            // Slightly scale up as it moves
    rotation: 360,          // Rotate the box
    duration: 2,
    delay: 2,
    repeat:-1,
    yoyo:true,
    ease: "power2.inOut",  // Smooth easing effect
});

// Move back to the initial position with bounce
// gsap.to("#box", {
//     x: 0,
//     scale: 1,              // Return to original scale
//     rotation: 0,           // Rotate back to original angle
//     duration: 2,
//     delay: 4,
//     ease: "bounce.out",    // Add a bounce effect on return
// });


gsap.from("h1", {
    opacity: 0,
    duration: 0.9,
    y: 30, delay:0.5,
    stagger: 0.3
})