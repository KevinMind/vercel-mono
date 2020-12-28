import Head from 'next/head';
import { useTodos } from 'todo-lib';

import Container from '../components/Container';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import TodoController from '../components/TodoController';

export default function Home() {
  const { count, allDone, todos, addTodo, toggleTodo, toggleAll, removeTodo, clearComplete, filter, setFilter } = useTodos([{ id: '123', text: 'complete', done: true }, { id: '456', text: 'in complete', done: false }]);

  console.log({ count, todos, filter });
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <AddTodo onSubmit={addTodo} active={allDone} toggle={toggleAll} />
        <TodoList todos={todos} onToggle={toggleTodo} onRemove={removeTodo} />
        {count > 0 ? (
          <TodoController
            onClear={clearComplete}
            onSelect={setFilter}
            count={count}
            value={filter}
            />  
        ) : null}
      </Container>
    </div>
  )
}
