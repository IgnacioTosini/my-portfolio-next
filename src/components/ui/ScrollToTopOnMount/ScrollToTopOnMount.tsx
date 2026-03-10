"use client";

import { useEffect } from "react";

export const ScrollToTopOnMount = () => {
    useEffect(() => {
        const scrollToTop = () => {
            // Some mobile browsers are flaky with smooth scrolling on route changes.
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        };

        scrollToTop();

        const rafId = window.requestAnimationFrame(scrollToTop);
        const timeoutId = window.setTimeout(scrollToTop, 120);

        return () => {
            window.cancelAnimationFrame(rafId);
            window.clearTimeout(timeoutId);
        };
    }, []);

    return null;
};
