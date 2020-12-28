import { renderHook, act } from '@testing-library/react-hooks';
import { uuidv4, useTodos, Filter } from '../src';

describe('uuidv4', () => {
  it('works', () => {
    expect(typeof uuidv4()).toEqual('string');
  });
});

describe('useTodos', () => {
  it('add todo', () => {
    const { result } = renderHook(() => useTodos());
    expect(result.current.count).toEqual(0);
    act(() => result.current.addTodo('sample'));
    expect(result.current.count).toEqual(1);
    expect(result.current.todos[0].text).toEqual('sample');
  });

  it('remove todo', () => {
    const { result } = renderHook(() =>
      useTodos([{ id: 'test', text: 'sample', done: false }])
    );
    expect(result.current.count).toEqual(1);
    act(() => result.current.removeTodo('test'));
    expect(result.current.count).toEqual(0);
  });

  it('toggle todo', () => {
    const { result } = renderHook(() =>
      useTodos([{ id: 'test', text: 'sample', done: false }])
    );
    expect(result.current.todos[0].done).toEqual(false);
    act(() => result.current.toggleTodo('test'));
    expect(result.current.todos[0].done).toEqual(true);
  });

  it('toggle todo', () => {
    const { result } = renderHook(() =>
      useTodos([
        { id: 'one', text: 'sample', done: true },
        { id: 'two', text: 'sample', done: false },
      ])
    );
    expect(result.current.count).toEqual(2);
    act(() => result.current.clearComplete());
    expect(result.current.count).toEqual(1);
  });

  it('toggle all todos', () => {
    const { result } = renderHook(() =>
      useTodos([
        { id: 'one', text: 'sample', done: true },
        { id: 'two', text: 'sample', done: false },
      ])
    );
    expect(result.current.count).toEqual(2);
    act(() => result.current.toggleAll(true));
    expect(result.current.todos).toEqual([
      { id: 'one', text: 'sample', done: true },
      { id: 'two', text: 'sample', done: true },
    ]);
    act(() => result.current.toggleAll(false));
    expect(result.current.todos).toEqual([
      { id: 'one', text: 'sample', done: false },
      { id: 'two', text: 'sample', done: false },
    ]);
    act(() => result.current.toggleAll(true));
    expect(result.current.todos).toEqual([
      { id: 'one', text: 'sample', done: true },
      { id: 'two', text: 'sample', done: true },
    ]);
  });

  // set filter
  it('set filter', () => {
    const { result } = renderHook(() =>
      useTodos([
        { id: 'one', text: 'sample', done: true },
        { id: 'two', text: 'sample', done: false },
      ])
    );
    expect(result.current.filter).toEqual(Filter.all);
    expect(result.current.todos).toEqual([
      { id: 'one', text: 'sample', done: true },
      { id: 'two', text: 'sample', done: false },
    ]);
    act(() => result.current.setFilter(Filter.active));
    expect(result.current.filter).toEqual(Filter.active);
    expect(result.current.todos).toEqual([
      { id: 'two', text: 'sample', done: false },
    ]);
    act(() => result.current.setFilter(Filter.complete));
    expect(result.current.filter).toEqual(Filter.complete);
    expect(result.current.todos).toEqual([
      { id: 'one', text: 'sample', done: true },
    ]);
  });
});
