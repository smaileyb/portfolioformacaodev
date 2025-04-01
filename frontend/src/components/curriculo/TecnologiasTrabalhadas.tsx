import { Tecnologia } from "@core"

export interface TecnologiasTrabalhadasProps {
	tecnologias: Tecnologia[]
}

export default function TecnologiasTrabalhadas(props: TecnologiasTrabalhadasProps) {
	return props.tecnologias ? (
		<div className="flex justify-center items-center p-6 w-full lg:w-72 bg-black border border-zinc-800 rounded-2xl">
			<div className="flex justify-center flex-wrap gap-x-3 ">
				{props.tecnologias.map((tecnologia) => {
					return (
						<div key={tecnologia.id} className="flex items-center gap-x-0.5">
							<span className="text-red-500 font-bold">#</span>
							<span>{tecnologia.nome}</span>
						</div>
					)
				})}
			</div>
		</div>
	) : null
}
