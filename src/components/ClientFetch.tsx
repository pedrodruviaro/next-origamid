"use client"

import { useEffect, useState } from "react"

type Product = {
  id: number
  nome: string
}

export default function ServerFetch() {
  const [data, setData] = useState<Product[]>([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.origamid.online/produtos")
      const json = (await response.json()) as Product[]
      console.log(json)
      setData(json)
    }

    fetchData()
  }, [])

  return (
    <div>
      <h2>Client Fetch</h2>
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
