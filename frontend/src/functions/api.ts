const baseURL = process.env.NEXT_PUBLIC_API_URL

function normalizarUrl(url: string) {
	const protocolo = url.split("://")[0]
	const restante = url.split("://")[1]
	return `${protocolo}://${restante.replaceAll(/\/{2,}/g, "/")}`
}

export async function httpGet(url: string) {
	const response = await fetch(normalizarUrl(`${baseURL}/${url}`))
	return response.json()
}
