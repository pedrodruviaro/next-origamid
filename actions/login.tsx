"use server"

import { cookies } from "next/headers"

interface LoginOptions {
  username: string
  password: string
}

export async function loginAction({ username, password }: LoginOptions) {
  const url = "https://api.origamid.online/conta/login"

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })

  if (!response.ok) {
    throw new Error("Failed to login")
  }

  const data = await response.json()

  ;(await cookies()).set("access_token", data.token, {
    httpOnly: true,
    secure: true,
  })

  return {
    ok: true,
  }
}
