import { getCursos } from "@/api/cursos"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Cursos",
}

export default async function CursosPage() {
  const cursos = await getCursos()

  return (
    <div>
      <h1>Cursos</h1>
      <ul>
        {cursos.map((curso) => (
          <li key={curso.id}>
            <Link href={`/cursos/${curso.slug}`}>{curso.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
