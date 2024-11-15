import '@/styles/index.css';

import type {PropsWithChildren} from 'react';
import {ThemeProvider} from "next-themes";

export default async function RootLayout({children}: PropsWithChildren) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="antialiased theme-1">
                <ThemeProvider attribute="class">
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
