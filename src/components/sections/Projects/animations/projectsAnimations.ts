import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateProjects = (container: HTMLElement) => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
        return () => undefined;
    }

    const ctx = gsap.context(() => {
        const tl = gsap.timeline({
            defaults: { ease: "power3.out" },
            scrollTrigger: {
                trigger: container,
                start: "top 75%",
                once: true,
            },
        });

        tl.fromTo(
            "[data-projects-anim='title']",
            { autoAlpha: 0, y: 28 },
            { autoAlpha: 1, y: 0, duration: 0.6 }
        )
            .fromTo(
                "[data-projects-anim='grid']",
                { autoAlpha: 0, y: 20 },
                { autoAlpha: 1, y: 0, duration: 0.45 },
                "-=0.32"
            )
            .fromTo(
                "[data-projects-anim='card']",
                { autoAlpha: 0, y: 18, scale: 0.96 },
                { autoAlpha: 1, y: 0, scale: 1, duration: 0.42, stagger: 0.1 },
                "-=0.2"
            );
    }, container);

    return () => ctx.revert();
};
