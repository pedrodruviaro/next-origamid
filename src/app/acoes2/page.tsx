import Update from "@/components/Update"

export const revalidate = 10 // default revalidate for all requests made by this specific page

export default async function AcoesPage() {
  const response = await fetch("https://api.origamid.online/acoes/lua", {
    next: {
      revalidate: 10, // in seconds
    },
  })
  const acao = await response.json()

  console.log(acao)

  return (
    <div>
      <h1>Ação</h1>

      <h2>{acao.nome}</h2>
      <p>{acao.preco}</p>
      <p>{acao.atualizada}</p>

      <Update />
    </div>
  )
}
