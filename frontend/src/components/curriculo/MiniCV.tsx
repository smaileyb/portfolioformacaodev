import Image from "next/image"

export default function MiniCV() {
	return (
		<div
			className="
    flex-1 flex 
    flex-col-reverse md:flex-row lg:flex-col-reverse xl:flex-row gap-6
    items-center md:items-start lg:items-center xl:items-start 
    bg-black border border-zinc-800 rounded-2xl px-6 pt-6"
		>
			<div className="relative min-w-72 h-64 xl:self-end">
				<Image src={`/minha-foto.png`} alt="Foto de perfil" fill />
			</div>
			<div className="flex flex-col gap-5 self-center py-6 items-center md:items-start lg:items-center xl:items-start">
				<div className="flex flex-col items-center md:items-start lg:items-center xl:items-start">
					<span className="bg-gradient-to-r from-red-500 via-white to-white text-transparent bg-clip-text text-2xl font-bold">
						Smailey Alexandre
					</span>
					<span>CTO da Cod3r Ensino e Consultoria</span>
				</div>
				<p className="text-sm text-center md:text-left lg:text-center xl:text-left text-zinc-400">
					Desenvolvedor de software em transição de carreira para a área da tecnologia,
					com experiência em trabalho em equipe e resolução de problemas. Habilidades de
					desenvolvimento front-end e back-end. Procurando por oportunidades.
				</p>
			</div>
		</div>
	)
}
