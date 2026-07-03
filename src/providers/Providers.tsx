"use client";

import type { ReactNode } from "react";
import { LanguageProvider } from "@/providers/LanguageProvider";
import { ToastContainer } from "react-toastify";

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <LanguageProvider>
            {children}
            <ToastContainer position="top-right" autoClose={3500} />
        </LanguageProvider>
    );
}
