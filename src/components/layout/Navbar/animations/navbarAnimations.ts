import gsap from "gsap";

export const animateNavbar = (container: HTMLElement) => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion) {
    return () => undefined;
  }

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      "[data-navbar-anim='brand']",
      { autoAlpha: 0, y: -16 },
      { autoAlpha: 1, y: 0, duration: 0.45 }
    )
      .fromTo(
        "[data-navbar-anim='link']",
        { autoAlpha: 0, y: -12 },
        { autoAlpha: 1, y: 0, duration: 0.35, stagger: 0.06 },
        "-=0.2"
      )
      .fromTo(
        "[data-navbar-anim='icon']",
        { autoAlpha: 0, scale: 0.92 },
        { autoAlpha: 1, scale: 1, duration: 0.25, stagger: 0.08 },
        "-=0.15"
      )
      .fromTo(
        "[data-navbar-anim='hamburger']",
        { autoAlpha: 0, scale: 0.9 },
        { autoAlpha: 1, scale: 1, duration: 0.25 },
        "<"
      );
  }, container);

  return () => ctx.revert();
};
