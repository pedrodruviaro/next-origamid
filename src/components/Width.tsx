"use client"

import { useEffect, useState } from "react"

export default function Width() {
  const [width, setWidth] = useState<number>()
  const [active, setActive] = useState(false)

  useEffect(() => {
    setWidth(window.innerWidth)
    const handler = () => setWidth(window.innerWidth)

    window.addEventListener("resize", handler)

    return () => window.removeEventListener("resize", handler)
  }, [])

  return (
    <div>
      <h2>
        Width: <span style={{ color: active ? "green" : "red" }}>{width}</span>
      </h2>
      <button onClick={() => setActive((v) => !v)}>asd</button>
    </div>
  )
}
