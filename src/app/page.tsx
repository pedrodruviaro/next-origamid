import Width from "@/components/Width" // client component
import AccessTxt from "@/components/Access" // server component (default)

export default function HomePage() {
  return (
    <main>
      <h1>Home</h1>
      <AccessTxt />
      <Width />
    </main>
  )
}
