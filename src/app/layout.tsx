import '@/styles/index.css';

import type {PropsWithChildren} from 'react';
import {ThemeProvider} from '@/providers/theme-provider';

export default async function RootLayout(props: PropsWithChildren) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="antialiased theme-1">
                <ThemeProvider>
                    {props.children}
                </ThemeProvider>
            </body>
        </html>
    );
}
