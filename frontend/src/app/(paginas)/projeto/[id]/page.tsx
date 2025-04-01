import Readme from "@/components/projetos/Readme"
import Cabecalho from "@/components/shared/Cabecalho"
import CarrosselImagens from "@/components/shared/CarrosselImagens"
import Container from "@/components/shared/Container"
import Tecnologias from "@/components/tecnologias/tecnologias"
import { obterReadme } from "@/functions/github"
import { obterProjeto } from "@/functions/projetos"
import { Projeto } from "@core"

export default async function PaginaProjeto(props: { params: Promise<{ id: string }> }) {
	const { id } = await props.params
	const projeto = (await obterProjeto(id)) as Projeto

	if (!projeto) return null

	const readme = await obterReadme(projeto.repositorio)

	return (
		<div className="bg-black">
			<Cabecalho />
			<Container className="py-7 flex flex-col items-center gap-10">
				<h1 className="text-3xl font-bold self-start">{projeto.nome}</h1>
				<CarrosselImagens imagens={projeto.imagens.slice(1)} />
				<Tecnologias dados={projeto.tecnologias} tamanhoMenor />
				<Readme conteudo={readme} />
			</Container>
		</div>
	)
}
