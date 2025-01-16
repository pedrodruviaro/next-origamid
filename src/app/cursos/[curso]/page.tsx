import { getCurso, getCursos } from "@/api/cursos"
import Link from "next/link"

type PageProps = {
  params: {
    curso: string
  }
}

// generate all SSG pages from courses
export async function generateStaticParams() {
  const cursos = await getCursos()

  return cursos.map((curso) => {
    return {
      curso: curso.slug,
    }
  })
}

export default async function SingleCursoPage({ params }: PageProps) {
  const { curso } = await params

  const data = await getCurso(curso)

  return (
    <div>
      <h1>
        Curso: <strong>{data.nome}</strong>
      </h1>

      <p>{data.descricao}</p>
      <p>{data.total_horas}</p>
      <p>{data.total_aulas}</p>
      <ul>
        {data.aulas.map((aula) => (
          <li key={aula.id}>
            <p>{aula.nome}</p>
            <p>{aula.descricao}</p>
            <p>{aula.tempo}</p>
            <p>{aula.ordem}</p>
            <Link href={`/cursos/${curso}/${aula.slug}`}>Ver aula</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
