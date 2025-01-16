import { getAula } from "@/api/cursos"
import Teste from "@/components/Teste"
import Link from "next/link"
import { Suspense } from "react"

type PageProps = {
  params: {
    aula: string
    curso: string
  }
}

export default async function SingleAulaPage({ params }: PageProps) {
  const { aula, curso } = await params

  const data = await getAula(curso, aula)

  return (
    <div>
      <small>
        Curso: <strong>{curso}</strong>
      </small>

      <h1>
        Aula: <strong>{data.nome}</strong>
      </h1>
      <p>{data.descricao}</p>
      <p>{data.tempo} min</p>

      <Link href={`/cursos/${curso}`}>Voltar ao curso</Link>

      <Suspense>
        <Teste />
      </Suspense>
    </div>
  )
}
