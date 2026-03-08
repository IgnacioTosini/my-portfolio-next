import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateAbout = (container: HTMLElement) => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion) {
    return () => undefined;
  }

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      scrollTrigger: {
        trigger: container,
        start: "top 78%",
        once: true,
      },
    });

    tl.fromTo(
      "[data-about-anim='title']",
      { autoAlpha: 0, y: 28 },
      { autoAlpha: 1, y: 0, duration: 0.6 }
    )
      .fromTo(
        "[data-about-anim='content']",
        { autoAlpha: 0, y: 18 },
        { autoAlpha: 1, y: 0, duration: 0.5 },
        "-=0.32"
      )
      .fromTo(
        "[data-about-anim='description']",
        { autoAlpha: 0, y: 18 },
        { autoAlpha: 1, y: 0, duration: 0.55, stagger: 0.12 },
        "-=0.25"
      );
  }, container);

  return () => ctx.revert();
};
