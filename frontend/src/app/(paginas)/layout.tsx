import BotaoChat from "@/components/chat/BotaoChat"
import React from "react"

export default function Layout(props: { children: React.ReactNode }) {
	return (
		<div>
			{props.children}
			<BotaoChat />
		</div>
	)
}
