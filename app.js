// Aktivace hladkého scrollování (Lenis)
const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Úvodní animace Hero sekce
const tl = gsap.timeline();

tl.from(".hero-title", {
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"
})
.from(".hero-sub", {
    opacity: 0,
    duration: 0.8
}, "-=0.6")
.from(".cta", {
    scale: 0,
    opacity: 0,
    duration: 0.5,
    ease: "back.out(1.7)"
}, "-=0.4");

// Animace karet při scrollování
gsap.from(".card", {
    scrollTrigger: {
        trigger: ".features",
        start: "top 80%",
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2, // Karty se objeví postupně
    ease: "power2.out"
});
