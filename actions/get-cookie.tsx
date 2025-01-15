"use server"

import { cookies } from "next/headers"

export async function getCookie(key: string) {
  const cookie = await cookies()
  const target = cookie.get(key)

  if (!target) {
    return {}
  }
  console.log(target.value)

  return target.value
}
