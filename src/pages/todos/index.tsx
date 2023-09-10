import styles from '../../styles/Todos.module.css'
import { Todo } from '../../types';

export async function getStaticProps() {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos')
  const todos: Todo[] = await data.json()
  
  return {
    props: { todos },
  }
}

export default function Todos({ todos }: any) {

  return (
    <>
      <h1>Tarefas para fazer</h1>
      <ul className={styles.todolist}>
        {todos.map((item: Todo) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  )
}