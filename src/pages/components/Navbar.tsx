import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <h1>Navbar</h1>
      <ul>
        <li>
          <Link href='/products'>Products</Link>
        </li>
      </ul>
    </div>
  )
}