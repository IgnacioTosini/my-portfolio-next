import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateProjectGallery = (container: HTMLElement) => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
        return () => undefined;
    }

    const ctx = gsap.context(() => {
        const tl = gsap.timeline({
            defaults: { ease: "power3.out" },
            scrollTrigger: {
                trigger: container,
                start: "top 85%",
                once: true,
            },
        });

        tl.fromTo(
            "[data-project-gallery-anim='back']",
            { autoAlpha: 0, y: 12 },
            { autoAlpha: 1, y: 0, duration: 0.35 }
        )
            .fromTo(
                "[data-project-gallery-anim='header']",
                { autoAlpha: 0, y: 24 },
                { autoAlpha: 1, y: 0, duration: 0.5 },
                "-=0.2"
            )
            .fromTo(
                "[data-project-gallery-anim='media']",
                { autoAlpha: 0, y: 20, scale: 0.985 },
                { autoAlpha: 1, y: 0, scale: 1, duration: 0.55 },
                "-=0.25"
            )
            .fromTo(
                "[data-project-gallery-anim='thumb']",
                { autoAlpha: 0, y: 14, scale: 0.97 },
                { autoAlpha: 1, y: 0, scale: 1, duration: 0.35, stagger: 0.05 },
                "-=0.2"
            )
            .fromTo(
                "[data-project-gallery-anim='description']",
                { autoAlpha: 0, y: 18 },
                { autoAlpha: 1, y: 0, duration: 0.45 },
                "-=0.15"
            );
    }, container);

    return () => ctx.revert();
};

export const animateProjectMediaSwap = (mediaContainer: HTMLElement) => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
        return;
    }

    gsap.fromTo(
        mediaContainer,
        { autoAlpha: 0.45, scale: 0.99 },
        {
            autoAlpha: 1,
            scale: 1,
            duration: 0.28,
            ease: "power2.out",
            overwrite: true,
            clearProps: "transform",
        }
    );
};
