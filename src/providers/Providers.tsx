"use client";

import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import { LanguageProvider } from "@/providers/LanguageProvider";

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
                key: "my-portfolio-rq-cache",
            })
        );
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
                        buster: "v1",
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