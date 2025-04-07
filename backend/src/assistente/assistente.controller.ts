import { Body, Controller, Post } from "@nestjs/common"
import { AssistenteProvider } from "./assistente.provider"

@Controller("assistente")
export class AssistenteController {
	constructor(private readonly assistenteProvider: AssistenteProvider) {}

	@Post()
	async enviarMensagem(
		@Body() { chatId, mensagem }: { chatId: string; mensagem: string },
	): Promise<string | null> {
		return this.assistenteProvider.enviarMensagem(mensagem)
	}
}
