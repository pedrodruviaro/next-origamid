"use server"

import { cookies } from "next/headers"

// not expose to client (unlike route handler)
export async function setCookie(key: string, value: string) {
  ;(await cookies()).set(key, value, {
    httpOnly: true,
    secure: true,
  })

  return { ok: true, value }
}
