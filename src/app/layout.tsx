import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
    title: 'Blog Codelândia',
    description: 'Desafio frontend #03',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-BR">
            <body className={roboto.className}>{children}</body>
        </html>
    )
}
