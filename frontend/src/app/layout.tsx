import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

export const metadata: Metadata = {
	title: "Portfólio",
	description: "Portfólio de projetos de desenvolvimento",
}

const montserrat = Montserrat({
	subsets: ["latin"],
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR">
			<body className={`${montserrat.className} antialiased`}>{children}</body>
		</html>
	)
}
