import { getAula, getCurso, getCursos } from "@/api/cursos"
import Teste from "@/components/Teste"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Suspense } from "react"

type PageProps = {
  params: {
    aula: string
    curso: string
  }
}

// generate all SSG pages from courses
export async function generateStaticParams() {
  const cursos = await getCursos()
  const aulas = await Promise.all(cursos.map((curso) => getCurso(curso.slug)))

  return aulas
    .reduce((acc, aula) => acc.concat(aula.aulas), [])
    .map((aula) => ({
      aula: aula.slug,
      curso: cursos.find((c) => c.id === aula.curso_id)?.slug,
    }))
}

export default async function SingleAulaPage({ params }: PageProps) {
  const { aula, curso } = await params

  const data = await getAula(curso, aula)

  if (data.error) {
    return notFound()
  }

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
