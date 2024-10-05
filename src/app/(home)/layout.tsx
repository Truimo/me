import type {Metadata, Viewport} from 'next';
import {geistMono, geistSans} from '@/fonts';

export const metadata: Metadata = {
    title: 'QianXiaomo',
    description: 'This is QianXiaomo\'s website.',
    keywords: ['QianXiaomo', 'Xiaomo', '浅小沫', 'truimo', '小沫', '小白']
};

export const viewport: Viewport = {
    colorScheme: 'normal',
    width: 'device-width',
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 5,
    userScalable: true,
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="zh-CN">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SayHi/>
        {children}
        </body>
        </html>
    );
}

function SayHi() {
    return (
        <script dangerouslySetInnerHTML={{
            __html: 'console.log("%c Truimo %c https://github.com/Truimo ", "color: #fff; margin: 1em 0; padding: 5px 0; background: #0ea5e9;", "margin: 1em 0; padding: 5px 0; background: #efefef;");'
        }}></script>
    )
}
