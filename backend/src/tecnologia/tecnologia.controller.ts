import { Controller, Get } from "@nestjs/common"
import { Tecnologia } from "@core"
import { TecnologiaPrisma } from "./tecnologia.prisma"

@Controller("tecnologias")
export class TecnologiaController {
	constructor(private readonly tecnologiaProvider: TecnologiaPrisma) {}
	@Get()
	async obterTodas(): Promise<Tecnologia[]> {
		return this.tecnologiaProvider.obterTodas()
	}
	@Get("destaques")
	async obterDestaque(): Promise<Tecnologia[]> {
		return this.tecnologiaProvider.obterDestaques()
	}
}
