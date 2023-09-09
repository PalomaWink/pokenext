import Link from "next/link";

export default function Products() {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        <li>
          <Link href='/products/shirt'>Products</Link>
        </li>
      </ul>
    </div>
  )
}