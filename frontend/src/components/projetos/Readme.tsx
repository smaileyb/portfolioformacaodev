import ConteudoMD from "../shared/ConteudoMD"

export interface ReadmeProps {
	conteudo: string
}

export default function Readme(props: ReadmeProps) {
	return (
		<div className="flex flex-col items-stretch p-6 bg-black border border-zinc-800 rounded-2xl">
			<div className="prose prose-zinc prose-invert" style={{ maxWidth: "100%" }}>
				<ConteudoMD markdown={props.conteudo} />
			</div>
		</div>
	)
}
