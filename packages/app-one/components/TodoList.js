import * as React from 'react';

const Todo = ({ text, done, id, toggle, remove }) => {
    const [focused, setFocus] = React.useState(false);

    const toggleFocus = () => {
        setFocus(!focused);
    };
    return (
        <div className="flex items-center space-between py-3 px-4 border-t" onMouseEnter={() => setFocus(true)} onMouseLeave={() => setFocus(false)}>
            <div onClick={() => toggle(id)} className="rounded-full h-7 w-7 flex items-center justify-center border border-gray-200 text-green-500 cursor-pointer mr-3">
                {done ? '✓' : ''}
            </div>
            <div className={`flex-grow text-lg font-thin ${done ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                {text}
            </div>
            <div onClick={() => remove(id)} className={`${focused ? '' : 'hidden'} text-red-100 hover:text-red-500 cursor-pointer`}>
                X
            </div>
        </div>
    );
}

export default function TodoList({ todos, onToggle, onRemove }) {
    return (
        <div className="shadow-inner">
            {Array.isArray(todos) ? todos.map(todo => (
                <Todo {...todo} toggle={onToggle} remove={onRemove} key={todo.id} />
            )) : null}
        </div>
    );
}