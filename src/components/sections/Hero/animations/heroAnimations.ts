import gsap from "gsap";

type HeroAnimationOptions = {
    onEntryComplete?: () => void;
};

export const animateHero = (container: HTMLElement, options: HeroAnimationOptions = {}) => {
    const { onEntryComplete } = options;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
        return () => undefined;
    }

    const ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(
            "[data-hero-anim='title']",
            { autoAlpha: 0, y: 30 },
            { autoAlpha: 1, y: 0, duration: 0.6 }
        )
            .fromTo(
                "[data-hero-anim='heading']",
                { autoAlpha: 0, y: 34 },
                { autoAlpha: 1, y: 0, duration: 0.7 },
                "-=0.35"
            )
            .fromTo(
                "[data-hero-anim='subtitle']",
                { autoAlpha: 0, y: 24 },
                { autoAlpha: 1, y: 0, duration: 0.55 },
                "-=0.38"
            )
            .fromTo(
                "[data-hero-anim='description']",
                { autoAlpha: 0, y: 20 },
                { autoAlpha: 1, y: 0, duration: 0.55, stagger: 0.12 },
                "-=0.35"
            )
            .fromTo(
                "[data-hero-anim='link']",
                { autoAlpha: 0, y: 14, scale: 0.96 },
                { autoAlpha: 1, y: 0, scale: 1, duration: 0.45, stagger: 0.1 },
                "-=0.22"
            )
            .fromTo(
                "[data-hero-anim='image']",
                {
                    autoAlpha: 0,
                    x: 42,
                    scale: 0.92,
                    rotate: 2,
                },
                {
                    autoAlpha: 1,
                    x: 0,
                    scale: 1,
                    rotate: 0,
                    duration: 0.8,
                },
                "<"
            );

        tl.eventCallback("onComplete", onEntryComplete ?? null);
    }, container);

    return () => ctx.revert();
};
