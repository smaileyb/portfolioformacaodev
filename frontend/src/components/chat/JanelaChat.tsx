"use client"
import useChat from "@/hooks/useChat"
import { IconMessages, IconReload, IconSend } from "@tabler/icons-react"
import { ChangeEvent, useEffect, useRef, useState } from "react"
import BalaoMensagem from "./BalaoMensagem"
import Image from "next/image"

export default function JanelaChat() {
	const { mensagens, pensando, adicionarMensagem, limparMensagens } = useChat()
	const [texto, setTexto] = useState("")
	const fimChatRef = useRef<HTMLDivElement>(null)

	function enviarMensagem() {
		adicionarMensagem(texto)
		setTexto("")
	}

	useEffect(() => {
		fimChatRef.current?.scrollIntoView({ behavior: "smooth" })
	}, [mensagens])

	return (
		<div className="flex flex-col bg-zinc-300 rounded-2xl text-black overflow-hidden">
			<div className="flex justify-between items-center bg-white p-4">
				<h2 className="text-xl text-bold">Olá visitante!</h2>
				<IconReload
					size={24}
					className="text-black cursor-pointer"
					onClick={limparMensagens}
				/>
			</div>
			{mensagens.length === 0 ? (
				<div className="flex flex-col justify-center items-center min-h-[400px] sm:min-h-[500px]">
					<IconMessages size={230} stroke={0.2} className="text-black/30" />
					<span>Vamos conversar?</span>
				</div>
			) : (
				<div className="flex flex-col min-h-[400px] sm:min-h-[500px] p-2 gap-2 max-h-[400px] sm:max-h-[500px] overflow-y-scroll">
					{mensagens.map((mensagem, index) => {
						const mesmoAutor =
							index > 0 && mensagens[index - 1].autor === mensagem.autor
						return (
							<BalaoMensagem
								key={mensagem.id}
								mensagem={mensagem}
								omitirAutor={mesmoAutor}
							/>
						)
					})}
					{pensando && (
						<Image
							src={`/pensando.gif`}
							alt="Pensando"
							width={50}
							height={50}
							unoptimized
						/>
					)}
					<div ref={fimChatRef}></div>
				</div>
			)}
			<div className="h-px bg-zinc-400 mt-4" />
			<div className="flex items-center gap-2 p-1 m-4 rounded-full h-10 bg-white">
				<input
					type="text"
					value={texto}
					className="flex-1 bg-transparent h-8 outline-none pl-3"
					onChange={({ target }: ChangeEvent<HTMLInputElement>) => setTexto(target.value)}
					onKeyDown={(event) => {
						if (event.key === "Enter") enviarMensagem()
					}}
				/>
				<button
					className="flex justify-center items-center min-h-8 min-w-8 rounded-full bg-red-500 cursor-pointer"
					onClick={enviarMensagem}
				>
					<IconSend className="text-white" size={18} />
				</button>
			</div>
		</div>
	)
}
