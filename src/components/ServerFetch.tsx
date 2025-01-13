type Product = {
  id: number
  nome: string
}

export default async function ServerFetch() {
  const response = await fetch("https://api.origamid.online/produtos")
  const data = (await response.json()) as Product[]
  console.log(data)

  return (
    <div>
      <h2>Server Fetch</h2>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <p>{product.nome}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
