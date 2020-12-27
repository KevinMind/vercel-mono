import { useState } from 'react';
import Head from 'next/head';

import Container from '../components/Container';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import TodoController from '../components/TodoController';

const useTodos = (defaultTodos = []) => {
  function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  const [todos, setTodos] = useState(defaultTodos);

  const addTodo = (text) => setTodos([...todos, { text, done: false, id: uuidv4() }]);

  const removeTodo = (id) => {
    const newList = [...todos];
    const idx = newList.findIndex((todo) => todo.id === id);
    if (idx > -1) {
      const todo = newList[idx];
      newList.splice(idx, 1);
      setTodos(newList);
    }
  }

  const toggleTodo = (id) => {
    const newList = [...todos];
    const idx = newList.findIndex((todo) => todo.id === id);
    if (idx > -1) {
      const todo = newList[idx];
      newList.splice(idx, 1, { ...todo, done: !todo.done });
      setTodos(newList);
    }
  };

  const clearComplete = () => {
    const newTodos = [...todos].filter((todo) => !todo.done);
    setTodos(newTodos);
  };

  return [todos, addTodo, toggleTodo, removeTodo, clearComplete];
}

export default function Home() {
  const [visible, setVisible] = useState(true);
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const toggleVisible = () => setVisible(!visible);

  const [todos, addTodo, toggleTodo, removeTodo, clearComplete] = useTodos([{ id: '123', text: 'complete', done: true }, { id: '456', text: 'in complete', done: false }]);

  const filtered = todos.filter((todo) => {
    if (visible) {
      switch(filter) {
        case 'active':
          return !todo.done
        case 'complete':
          return todo.done
        case 'all':
        default:
          return visible;
      }
    }
    return false;
  });

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <AddTodo onSubmit={addTodo} onToggleVisible={toggleVisible} visible={visible} />
        <TodoList todos={filtered} onToggle={toggleTodo} onRemove={removeTodo} />
        <TodoController
          onClear={clearComplete}
          onSelect={handleFilterChange}
          count={todos.length}
          value={filter}
          />
      </Container>
    </div>
  )
}
