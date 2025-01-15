import { cookies } from "next/headers"
import Link from "next/link"

export default async function Menu() {
  const cookie = await cookies()
  const token = cookie.get("access_token")

  if (!token) return

  const response = await fetch("https://api.origamid.online/conta/perfil", {
    headers: {
      Authorization: "Bearer " + token.value,
    },
  })

  const data = await response.json()

  console.log(data)
  return (
    <>
      <h1>Hello, {data.usuario}</h1>
      <ul className="menu">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          {/* default prefetch = true */}
          <Link href="/about" prefetch={true}>
            About
          </Link>
        </li>
        <li>
          {/* prevents page from scrolling to #form component */}
          <Link href="/contact#form" scroll={false} prefetch={false}>
            Contact
          </Link>
        </li>
        <li>
          <Link href="/cursos">Cursos</Link>
        </li>
        <li>
          <Link href="/acoes2">Ações</Link>
        </li>
      </ul>
    </>
  )
}
;<h1>Contact</h1>
