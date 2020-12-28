import { useState } from 'react';
import Head from 'next/head';
import { useTodos } from 'todo-lib';

import Container from '../components/Container';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import TodoController from '../components/TodoController';


export default function Home() {
  const { count, todos, addTodo, toggleTodo, toggleAll, removeTodo, clearComplete, filter, setFilter } = useTodos([{ id: '123', text: 'complete', done: true }, { id: '456', text: 'in complete', done: false }]);

  return (
    <>
      <Head>
        <title>App One</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <AddTodo onSubmit={addTodo} todos={todos} toggle={toggleAll} />
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
    </>
  )
}
