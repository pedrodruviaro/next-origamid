"use client"

import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation"
import React from "react"

export default function Teste() {
  const params = useParams()
  const pathName = usePathname()
  const searchParams = useSearchParams()

  console.log(params)
  console.log(pathName)
  console.log(searchParams)
  console.log(searchParams.get("search"))

  const router = useRouter()

  return (
    <>
      <h2>Teste</h2>
      <button onClick={() => router.push("/")}>Push</button>
      <button onClick={() => router.refresh()}>Refresh</button>
    </>
  )
}
