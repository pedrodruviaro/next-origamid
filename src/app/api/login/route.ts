import { cookies } from "next/headers"
import { NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  const body = await request.json()

  const response = await fetch("https://api.origamid.online/conta/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })

  if (!response) {
    return { error: "Error" }
  }

  const data = await response.json()

  const cookie = await cookies()

  cookie.set("access_token", data.token, {
    httpOnly: true,
    secure: true,
  })

  return Response.json({ ok: true, token: data.token })
}
