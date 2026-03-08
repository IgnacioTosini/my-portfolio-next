import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateFooter = (container: HTMLElement) => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion) {
    return () => undefined;
  }

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      scrollTrigger: {
        trigger: container,
        start: "top 95%",
        once: true,
        invalidateOnRefresh: true,
      },
    });

    tl.fromTo(
      "[data-footer-anim='text']",
      { autoAlpha: 0, y: 16 },
      { autoAlpha: 1, y: 0, duration: 0.5 }
    ).fromTo(
      "[data-footer-anim='icon']",
      { autoAlpha: 0, y: 10, scale: 0.92 },
      { autoAlpha: 1, y: 0, scale: 1, duration: 0.35, stagger: 0.08 },
      "-=0.25"
    );
  }, container);

  ScrollTrigger.refresh();

  return () => ctx.revert();
};
