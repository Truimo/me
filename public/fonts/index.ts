import localFont from 'next/font/local';

const geistSans = localFont({
    src: "./GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const geistMono = localFont({
    src: "./GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

const iconfont = localFont({
    src: './iconfont.ttf',
    variable: '--font-icon',
});

export {
    geistSans, geistMono, iconfont
}