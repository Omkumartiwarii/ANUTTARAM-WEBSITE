// tsParticles.load("tsparticles", {
//     background: {
//         color: { value: "transparent" }
//     },
//     fpsLimit: 60,
//     particles: {
//         number: {
//             value: 50, // kam particles (speed boost)
//             density: { enable: true, area: 1000 }
//         },
//         color: {
//             value: ["#00f0ff", "#00b4ff", "#8a2be2"]
//         },
//         shape: {
//             type: ["circle", "triangle"]
//         },
//         opacity: {
//             value: 0.8,
//             random: { enable: true, minimumValue: 0.4 },
//             animation: { enable: true, speed: 0.5, minimumValue: 0.3 }
//         },
//         size: {
//             value: { min: 2, max: 5 },
//             random: true,
//             animation: { enable: true, speed: 2, minimumValue: 0.4 }
//         },
//         links: {
//             enable: true,
//             distance: 180,
//             color: "#00f0ff",
//             opacity: 0.25,
//             width: 1.2,
//             // subtle glow (blur small rakha)
//             shadow: { enable: true, color: "#00f0ff", blur: 2 }
//         },
//         move: {
//             enable: true,
//             speed: 1.5, // thoda tez feel without lag
//             direction: "none",
//             random: true,
//             straight: false,
//             outModes: { default: "out" },
//             attract: { enable: false }
//         },
//         shadow: {
//             enable: true,
//             color: "#00f0ff",
//             blur: 4 // glow blur kam rakha
//         }
//     },
//     interactivity: {
//         detectsOn: "canvas",
//         events: {
//             onHover: { enable: true, mode: "grab" },
//             onClick: { enable: true, mode: "bubble" },
//             resize: true
//         },
//         modes: {
//             grab: { distance: 200, links: { opacity: 0.4 } },
//             bubble: { distance: 220, size: 6, duration: 1.5, opacity: 0.9 },
//             repulse: { distance: 140, duration: 0.4 },
//             push: { quantity: 2 }
//         }
//     },
//     detectRetina: true
// });


// new
tsParticles.load("tsparticles", {
    fpsLimit: 60,
    interactivity: {
        events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "repulse" },
            resize: true,
        },
        modes: {
            push: { quantity: 4 },
            repulse: { distance: 100, duration: 0.4 },
        },
    },
    particles: {
        // color: { value: ["#06b6d4", "#ff6d1e", "#ffffff"], animation: { enable: true, speed: 20, sync: false } },
        color: { value: "#ffffff" },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.1,
            width: 1,
        },
        collisions: { enable: true },
        move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: false,
            speed: 1,
            straight: false,
        },
        number: { density: { enable: true, area: 800 }, value: 80 },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 5 } },
    },
    detectRetina: true,
});
