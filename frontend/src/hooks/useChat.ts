import { Id, Mensagem } from "@core"
import useLocalStorage from "./useLocalStorage"
import conversar from "@/functions/chat"
import { useState } from "react"

export default function useChat() {
	const [chatId] = useLocalStorage<string>("chatId", Id.gerar())
	const [mensagens, setMensagens] = useLocalStorage<Mensagem[]>("mensagens", [])
	const [pensando, setPensando] = useState(false)

	async function adicionarMensagem(mensagem: string) {
		try {
			setPensando(true)
			const novaMensagem: Mensagem = {
				id: Id.gerar(),
				texto: mensagem,
				autor: "Usuário",
				lado: "direito",
			}
			setMensagens((msgs) => [...msgs, novaMensagem])

			const resposta = await conversar(chatId, novaMensagem)
			if (!resposta) return

			const mensagemResposta: Mensagem = {
				id: Id.gerar(),
				texto: resposta,
				autor: "Assistente",
				lado: "esquerdo",
			}
			setMensagens((msgs) => [...msgs, mensagemResposta])
		} finally {
			setPensando(false)
		}
	}

	function limparMensagens() {
		setMensagens([])
	}

	return {
		chatId,
		mensagens,
		pensando,
		adicionarMensagem,
		limparMensagens,
	}
}
