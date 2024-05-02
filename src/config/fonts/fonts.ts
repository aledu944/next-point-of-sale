import localFont from "next/font/local";


export const Gilroy = localFont({
    src: [
        {
            path: './gilroy/Gilroy-Regular.ttf',
            weight: '400',
            style: 'normal'
        },
        {
            path: './gilroy/Gilroy-Medium.ttf',
            weight: '500',
            style: 'normal'
        },
        {
            path: './gilroy/Gilroy-Medium.ttf',
            weight: '600',
            style: 'normal'
        },
        {
            path: './gilroy/Gilroy-Semibold.ttf',
            weight: '700',
            style: 'normal'
        },
        {
            path: './gilroy/Gilroy-Bold.ttf',
            weight: '800',
            style: 'normal'
        }

    ],
    display: 'swap',
})
