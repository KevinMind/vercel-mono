import Head from 'next/head';

import { useTodos } from 'todo-lib';
import { styled, css } from '../stitches.config';

import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import TodoController from '../components/TodoController';

const Container = styled('div', {
  padding: '$2',
  boxShadow: '$default',
  background: '$white',
  margin: '$4 auto',
  maxWidth: '550px',
});

const Heading = styled('h1', {
  fontSize: '$10',
  fontWeight: 100,
  textAlign: 'center',
  color: '$red200',
  margin: 0,
});

const Text = styled('p', {
  textAlign: 'center',
});

export default function Home() {
  const { count, allDone, todos, addTodo, toggleTodo, toggleAll, removeTodo, clearComplete, filter, setFilter } = useTodos([{ id: '123', text: 'complete', done: true }, { id: '456', text: 'in complete', done: false }]);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading>Todos</Heading>
      <Text>Styled with Stitches.dev</Text>
      <Container>
        <AddTodo onSubmit={addTodo} active={allDone} toggle={toggleAll} />
        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onRemove={removeTodo}
          />
        {count > 0 ? (
          <TodoController
            count={count}
            onChange={setFilter}
            onClear={clearComplete}
            value={filter}
          />
        ) : null}
      </Container>
    </div>
  )
}
