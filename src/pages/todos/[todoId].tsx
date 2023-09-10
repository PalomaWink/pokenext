import Link from "next/link";
import { useRouter } from 'next/router'

export default function Todo() {
  // Esse componente está trabalhando com rotas dinamicas
  const router = useRouter()
  const todoId = router.query.todoId
  return (
    <>
      <Link href='/'>Voltar</Link>
      <h1>Exibindo o todo: {todoId}</h1>
      <p>Comentário: lalala...<Link href={`/todos/${todoId}/comments/1`}>Detalhes</Link></p>
      <p>Comentário: lelele...<Link href={`/todos/${todoId}/comments/2`}>Detalhes</Link></p>
      <p>Comentário: lilili...<Link href={`/todos/${todoId}/comments/3`}>Detalhes</Link></p>
    </>
  )
}