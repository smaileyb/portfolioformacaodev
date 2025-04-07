"use server"

import { Mensagem } from "@core"

export default async function conversar(
	chatId: string,
	mensagem: Mensagem
): Promise<string | null> {
	const webhookUrl = process.env.CHAT_WEBOOK
	if (!webhookUrl) return null

	const response = await fetch(webhookUrl, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			chatId,
			mensagem: mensagem.texto,
		}),
	})
	const mensagemResposta = await response.text()
	return mensagemResposta
}
