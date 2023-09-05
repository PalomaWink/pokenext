import Link from "next/link";

export default function Products() {
  return (
    <div>
      <h1>/products</h1>
      <ul>
        <li>
          <Link href='/products'>Products</Link>
        </li>
      </ul>
    </div>
  )
}