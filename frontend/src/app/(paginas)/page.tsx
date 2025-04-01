// Code: Home page

import Curriculo from "@/components/curriculo"
import Principal from "@/components/landing/Principal"
import Projetos from "@/components/projetos/Projetos"
import Container from "@/components/shared/Container"
import { obterProjetos } from "@/functions/projetos"
import { obterTecnologias } from "@/functions/tecnologias"

export default async function Home() {
	const tecnologias = await obterTecnologias()
	const projetos = await obterProjetos()
	return (
		<div>
			<Principal tecnologias={tecnologias.destaques} />
			<Container className="py-16 flex flex-col gap-10 items-center">
				<Projetos titulo="Destaque" listaProjetos={projetos.destaques} />
				<Projetos titulo="Web" listaProjetos={projetos.web} />
				<Projetos titulo="Mobile" listaProjetos={projetos.mobile} />
				<Projetos titulo="Jogos" listaProjetos={projetos.jogos} />
				<Curriculo tecnologias={tecnologias.todas} />
			</Container>
		</div>
	)
}
