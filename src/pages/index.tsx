
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // Cada componente e uma pagina e isso se torna uma url /about, /favorites...
  // Existem tambem os Nested Routes(sao rotas compostas), /product/shirt, pra fazer isso criamos pastas
  return (
    <div>
      <Navbar />
      <h1>Home</h1>
    </div>
  )
}
