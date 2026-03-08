"use client";

import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import { LanguageProvider } from "@/providers/LanguageProvider";

const PERSISTED_CACHE_KEY = "my-portfolio-rq-cache";
const PERSISTED_BUSTER_KEY = "my-portfolio-rq-buster";
const SEED_BUSTER_COOKIE = "portfolio-seed-buster";

const getCookieValue = (cookieName: string) => {
    const escapedName = cookieName.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    const match = document.cookie.match(new RegExp(`(?:^|; )${escapedName}=([^;]*)`));
    return match ? decodeURIComponent(match[1]) : null;
};

export default function Providers({ children }: { children: React.ReactNode }) {
    const [queryClient] = React.useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 1000 * 60 * 30, // 30 min
                        gcTime: 1000 * 60 * 60 * 24, // 24 h
                        retry: 1,
                        refetchOnWindowFocus: false,
                    },
                },
            })
    );

    const [persister, setPersister] =
        React.useState<ReturnType<typeof createAsyncStoragePersister> | null>(null);
    const [cacheBuster, setCacheBuster] = React.useState("v1");

    React.useEffect(() => {
        const asyncLocalStorage = {
            getItem: async (key: string) => window.localStorage.getItem(key),
            setItem: async (key: string, value: string) => {
                window.localStorage.setItem(key, value);
            },
            removeItem: async (key: string) => {
                window.localStorage.removeItem(key);
            },
        };

        setPersister(
            createAsyncStoragePersister({
                storage: asyncLocalStorage,
                key: PERSISTED_CACHE_KEY,
            })
        );

        const seedBuster = getCookieValue(SEED_BUSTER_COOKIE) ?? "v1";
        const previousBuster = window.localStorage.getItem(PERSISTED_BUSTER_KEY);

        if (previousBuster !== seedBuster) {
            window.localStorage.removeItem(PERSISTED_CACHE_KEY);
            window.localStorage.setItem(PERSISTED_BUSTER_KEY, seedBuster);
            queryClient.clear();
        }

        setCacheBuster(seedBuster);
    }, []);

    if (!persister) {
        return (
            <LanguageProvider>
                <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
            </LanguageProvider>
        );
    }

    return (
        <LanguageProvider>
            <PersistQueryClientProvider
                client={queryClient}
                persistOptions={{
                        persister,
                        maxAge: 1000 * 60 * 60 * 24,
                        buster: cacheBuster,
                        dehydrateOptions: {
                            shouldDehydrateQuery: (query) => {
                                const key = query.queryKey[0];
                                return key === "projects" || key === "project";
                            },
                        },
                    }}
                >
                    {children}
                </PersistQueryClientProvider>
        </LanguageProvider>
    );
}