import { getCursos } from "@/api/cursos"
import { Metadata } from "next"
import Link from "next/link"
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Cursos",
}

export default async function CursosLayout({
  children,
}: {
  children: ReactNode
}) {
  const cursos = await getCursos()

  return (
    <div className="flex">
      <nav>
        <h2>Cursos</h2>
        <ul>
          {cursos.map((curso) => (
            <li key={curso.id}>
              <Link href={`/cursos/${curso.slug}`}>{curso.nome}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div>{children}</div>
    </div>
  )
}
