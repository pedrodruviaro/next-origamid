import Link from "next/link"

export default function Menu() {
  return (
    <ul className="menu">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        {/* default prefetch = true */}
        <Link href="/about" prefetch={true}>
          About
        </Link>
      </li>
      <li>
        {/* prevents page from scrolling to #form component */}
        <Link href="/contact#form" scroll={false} prefetch={false}>
          Contact
        </Link>
      </li>
      <li>
        <Link href="/imc">IMC</Link>
      </li>
    </ul>
  )
}
;<h1>Contact</h1>
