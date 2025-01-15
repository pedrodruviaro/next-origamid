"use client"

import { useState } from "react"
import LoginForm from "@/components/LoginForm"
import { getCookie } from "../../actions/get-cookie"

// import Width from "@/components/Width" // client component
// import AccessTxt from "@/components/Access" // server component (default)
// import ServerFetch from "@/components/ServerFetch"
// import ClientFetch from "@/components/ClientFetch"

export default function HomePage() {
  const [value, setValue] = useState("")

  const handleClick = async () => {
    const response = await getCookie("access_token")
    console.log("cookie ->", response)

    setValue(response as string)
  }

  return (
    <main>
      <h1>Home</h1>
      {/* <AccessTxt />
      <Width />

      <ClientFetch />
      <ServerFetch /> */}

      <p>The cookie value is: {value}</p>

      <button onClick={handleClick}>Get Cookie</button>

      <LoginForm />
    </main>
  )
}
