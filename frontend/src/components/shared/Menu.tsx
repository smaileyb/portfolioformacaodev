"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Menu() {
	const path = usePathname()
	return (
		<nav className="flex gap-6">
			<MenuItem href="/" selecionado={path === "/"}>
				Início
			</MenuItem>
			<MenuItem href="/projeto/1" selecionado={path.startsWith("/projeto")}>
				Projetos
			</MenuItem>
			<MenuItem
				href="https://api.whatsapp.com/send/?phone=5541999605869&text&type=phone_number&app_absent=0"
				selecionado={false}
				novaAba={true}
			>
				Contato
			</MenuItem>
		</nav>
	)
}

function MenuItem(props: {
	href: string
	children: React.ReactNode
	selecionado: boolean
	novaAba?: boolean
}) {
	return (
		<Link href={props.href} target={props.novaAba ? "_blank" : "_self"}>
			<span
				className={`flex items-center gap-2 text-sm border-red-600 hover:text-white duration-200 ${
					props.selecionado ? "border-b-4 text-white" : "text-zinc-400"
				}`}
			>
				{props.children}
			</span>
		</Link>
	)
}
