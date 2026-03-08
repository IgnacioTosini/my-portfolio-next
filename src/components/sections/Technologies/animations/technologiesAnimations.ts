import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateTechnologies = (container: HTMLElement) => {
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
            "[data-technologies-anim='title']",
            { autoAlpha: 0, y: 26 },
            { autoAlpha: 1, y: 0, duration: 0.55 }
        )
            .fromTo(
                "[data-technologies-anim='grid']",
                { autoAlpha: 0, y: 16 },
                { autoAlpha: 1, y: 0, duration: 0.45 },
                "-=0.28"
            )
            .fromTo(
                "[data-technologies-anim='card']",
                { autoAlpha: 0, y: 16, scale: 0.96 },
                { autoAlpha: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.08 },
                "-=0.2"
            );
    }, container);

    return () => ctx.revert();
};
