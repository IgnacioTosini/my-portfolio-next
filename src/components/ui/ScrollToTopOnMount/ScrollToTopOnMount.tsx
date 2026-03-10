"use client";

import { useEffect } from "react";

export const ScrollToTopOnMount = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return null;
};
