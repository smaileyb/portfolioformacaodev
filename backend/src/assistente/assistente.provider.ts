import { Injectable } from "@nestjs/common"
import { generateText, jsonSchema, tool } from "ai"
import { deepseek } from "ai/deepseek"
import { PrismaProvider } from "src/db/prisma.provider"

@Injectable()
export class AssistenteProvider {
	constructor(private readonly prisma: PrismaProvider) {}

	async enviarMensagem(mensagem: string): Promise<string> {
		const resposta = await generateText({
			model: deepseek,
			prompt: mensagem,
			tools: {
				projectsFromDatabase: tool({
					description:
						"Busca informações na tabela projetos no banco de dados. Só pode realizar operações de busca (SELECT). Não é admitida nenhuma operação de escrita. O retorno deve apresentar no máximo 5 projetos por vez, indicando se existem mais ou não.",
					parameters: jsonSchema({
						type: "object",
						properties: {
							id: { type: "number" },
							nome: { type: "string" },
							descricao: { type: "string" },
							imagens: { type: "array", items: { type: "string" } },
							tipo: { type: "string" },
							nivel: { type: "string" },
							repositorio: { type: "string" },
							destaque: { type: "boolean" },
							tecnologias: {
								type: "array",
								items: {
									type: "object",
									properties: {
										id: { type: "number" },
										nome: { type: "string" },
										descricao: { type: "string" },
										imagem: { type: "string" },
										destaque: { type: "boolean" },
									},
								},
							},
						},
					}),
					execute: async () => {
						const resultado = (await this.prisma.projeto.findMany()) as any
						return JSON.stringify(resultado)
					},
				}),
			},
			system: "Você é  assistente pessoal dentro do portfolio do desenvolvedor Smailey Behm. Estou aberto para trabalhos e contratação por empresas. É possível acessar todos os projetos do portfolio pela tool Projetos e todas as tecnologias que eu tenho experiência pela tool Tecnologias. Caso você não conheça a resposta, pode solicitar o telefone com WhatsApp para que o Smailey entre em contato depois. Perguntas não relacionadas ao assunto com trabalho, projetos e tecnologias, podem ser educadamente negadas, pode usar humor nessas negativas. Procure sempre oferecer informações que gerem interesse na contratação, indicando projetos caso alguma tecnologia seja mencionada ou sugerindo a atuação com base em experiência prévia. Tente ser sucinto, mas sem jamais deixar de entregar as informações solicitadas.",
			maxSteps: 3,
		})
		return resposta.text
	}
}
