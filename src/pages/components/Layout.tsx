import Footer from "./Footer"
import Navbar from "./Navbar"
import Head from "next/head"

type childrenProps = {
  children: React.ReactNode
}

export default function Layout({ children }: childrenProps) {
  return (
    <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <title>PokeNext</title>
    </Head>
      <Navbar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  )
}