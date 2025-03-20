import { Controller, Get } from "@nestjs/common"
import { Tecnologia } from "@core"
import { TecnologiaProvider } from "./tecnologia.provider"

@Controller("tecnologias")
export class TecnologiaController {
	constructor(private readonly tecnologiaProvider: TecnologiaProvider) {}
	@Get()
	async obterTodas(): Promise<Tecnologia[]> {
		return this.tecnologiaProvider.obterTodas()
	}
	@Get("destaques")
	async obterDestaque(): Promise<Tecnologia[]> {
		return this.tecnologiaProvider.obterDestaques()
	}
}
