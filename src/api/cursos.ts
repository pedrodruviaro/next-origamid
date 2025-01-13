export type Curso = {
  id: number
  slug: string
  nome: string
  descricao: string
  total_aulas: number
  total_horas: number
}

export type Aula = {
  id: number
  slug: string
  nome: string
  descricao: string
  curso_id: number
  tempo: number
  ordem: number
}

const BASE_URL = "https://api.origamid.online"

export async function getCursos() {
  const response = await fetch(`${BASE_URL}/cursos`)
  return (await response.json()) as Curso[]
}

export async function getCurso(curso: string) {
  const response = await fetch(`${BASE_URL}/cursos/${curso}`)
  return (await response.json()) as Curso & { aulas: Aula[] }
}

export async function getAula(curso: string, aula: string) {
  const response = await fetch(`${BASE_URL}/cursos/${curso}/${aula}`)
  return (await response.json()) as Aula
}
