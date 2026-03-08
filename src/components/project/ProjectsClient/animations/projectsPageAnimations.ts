import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateProjectsPage = (container: HTMLElement) => {
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
      "[data-projects-page-anim='title']",
      { autoAlpha: 0, y: 20 },
      { autoAlpha: 1, y: 0, duration: 0.45 }
    )
      .fromTo(
        "[data-projects-page-anim='filters']",
        { autoAlpha: 0, y: 16 },
        { autoAlpha: 1, y: 0, duration: 0.4 },
        "-=0.25"
      )
      .fromTo(
        "[data-projects-page-anim='grid']",
        { autoAlpha: 0, y: 18 },
        { autoAlpha: 1, y: 0, duration: 0.4 },
        "-=0.25"
      )
      .fromTo(
        "[data-projects-page-anim='card']",
        { autoAlpha: 0, y: 16, scale: 0.97 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.35, stagger: 0.06 },
        "-=0.18"
      );
  }, container);

  return () => ctx.revert();
};
