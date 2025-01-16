import Image from "next/image"
import s from "./cursos.module.css"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cursos",
}

export default async function CursosPage() {
  return (
    <div className={s["main-title"]}>
      <h1>Front end e UI Design</h1>
      <Image
        src="https://api.origamid.online/imagens/lobo_1.jpg"
        width={1200} // use o valor original ou o valor máximo
        height={800} // deve ser proporcional ao width, respeitando a proporção
        alt="Lobo branco dormindo sobre pedras"
        quality={80} // define a qualidade da imagem
        sizes="100vw"
        priority
      />
    </div>
  )
}
