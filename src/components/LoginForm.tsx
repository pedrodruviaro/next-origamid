"use client"
import React, { FormEvent, useState } from "react"
import { loginAction } from "../../actions/login"

export default function LoginForm() {
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault()

    loginAction({ username, password })
  }
  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}
