import { useState } from 'react';

export function uuidv4(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export enum Filter {
  all = 'all',
  active = 'active',
  complete = 'complete',
}

type Todo = {
  text: string;
  done: boolean;
  id: string;
};

type TodoList = Todo[];

type AddTodo = (text: string) => void;
type RemoveTodo = (id: string) => void;
type ToggleTodo = (id: string) => void;
type ClearComplete = () => void;
type ToggleAll = () => void;

type SetFilter = (filter: Filter) => void;

export const useTodos = (
  defaultTodos: TodoList = []
): {
  count: number;
  allDone: boolean;
  filter: Filter;
  setFilter: SetFilter;
  todos: TodoList;
  addTodo: AddTodo;
  toggleTodo: ToggleTodo;
  toggleAll: ToggleAll;
  removeTodo: RemoveTodo;
  clearComplete: ClearComplete;
} => {
  const [filter, setFilter] = useState<Filter>(Filter.all);
  const [todos, setTodos] = useState<TodoList>(defaultTodos);

  const allDone = todos.every(todo => todo.done);

  const addTodo: AddTodo = text =>
    setTodos([...todos, { text, done: false, id: uuidv4() }]);

  const removeTodo: RemoveTodo = (id: string) => {
    const newList: TodoList = [...todos];
    const idx = newList.findIndex(todo => todo.id === id);
    if (idx > -1) {
      newList.splice(idx, 1);
      setTodos(newList);
    }
  };

  const toggleTodo: ToggleTodo = (id: string) => {
    const newList = [...todos];
    const idx = newList.findIndex(todo => todo.id === id);
    if (idx > -1) {
      const todo = newList[idx];
      newList.splice(idx, 1, { ...todo, done: !todo.done });
      setTodos(newList);
    }
  };

  const clearComplete: ClearComplete = () => {
    const newTodos = [...todos].filter(todo => !todo.done);
    setTodos(newTodos);
  };

  const toggleAll: ToggleAll = () => {
    const newTodos = todos.map(todo => ({ ...todo, done: !allDone }));
    setTodos(newTodos);
  };

  const filtered: TodoList = todos.filter((todo: Todo) => {
    switch (filter) {
      case Filter.active:
        return !todo.done;
      case Filter.complete:
        return !!todo.done;
      case Filter.all:
      default:
        return true;
    }
  });

  console.log({ filter, filtered, todos });

  return {
    count: todos.length,
    allDone,
    filter,
    setFilter,
    todos: filtered,
    addTodo,
    toggleTodo,
    toggleAll,
    removeTodo,
    clearComplete,
  };
};
