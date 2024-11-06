// // Move to the final position with scaling and rotation
// gsap.to("#box", {
//     x: 900,
//     scale: 1.2,            // Slightly scale up as it moves
//     rotation: 360,          // Rotate the box
//     duration: 2,
//     delay: 2,
//     repeat:-1, // jub repeat:-1 hoga to animation chalti raha gi infinite sirf 1 side chaltiraha gi, just 1 likha hoga to 2 bar calaga,1 bar chalana ha to repeat ki property nahi lagao, agar repeat:-1 ha or yoyo true ha to animation dono side chalagi
//     yoyo:true,
//     ease: "power2.inOut",  // Smooth easing effect
// });

// // Move back to the initial position with bounce
// gsap.to("#box", {
//     x: 0,
//     scale: 1,              // Return to original scale
//     rotation: 0,           // Rotate back to original angle
//     duration: 2,
//     delay: 4,
//     ease: "bounce.out",    // Add a bounce effect on return
// });


// gsap.from("h1", {
//     opacity: 0,
//     duration: 0.9,
//     y: 30,
//     delay: 0.5,
//     stagger: 0.3
// })


const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile');
});
// GSAP Timeline for navbar and other elements
const tl = gsap.timeline({ repeat: -1, yoyo: true });

// Navbar logo animation
tl.from(".logo", {
    opacity: 0,
    x: -50, // Slide in from the left
    duration: 1,
    ease: "power2.out",
})

    // Navbar links animation
    .from(".nav-links li", {
        opacity: 0,
        y: -20, // Slide down each link
        duration: 0.5,
        stagger: 0.2, // Stagger the animation for each link
        ease: "back.out(1.7)",
    })

    // Box animation
    .to("#box", {
        x: 900,
        scale: 1.2,
        rotation: 360,
        duration: 2,
        scale: 0.5,
        backgroundColor: 'blue',
        // yoyo:true,
        // repeat:-1,
        ease: "power2.inOut",
    })


    // h1 elements animation (staggered fade-in)
    .from("h1", {
        opacity: 0,
        y: 30,
        duration: 0.9,
        stagger: 0.3
    });
