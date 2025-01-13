import Width from "@/components/Width" // client component
import AccessTxt from "@/components/Access" // server component (default)
import ServerFetch from "@/components/ServerFetch"
import ClientFetch from "@/components/ClientFetch"

export default function HomePage() {
  return (
    <main>
      <h1>Home</h1>
      <AccessTxt />
      <Width />

      <ClientFetch />
      <ServerFetch />
    </main>
  )
}
