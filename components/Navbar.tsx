import Link from "next/link";
import Image from "next/image";
import pokeball from '../public/images/pokeball.png'
import styles from '../src/styles/Navbar.module.css' 

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src={pokeball} width="30" height="30" alt="pokenext" />
        <h1>PokeNext</h1>
      </div>
      <ul className={styles.link_items}>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
        <Link href="/about">
            Sobre
          </Link>
        </li>
      </ul>
    </nav>
  )
}