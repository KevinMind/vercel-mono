import * as React from 'react';
import { Filter } from 'todo-lib';

const ControllerItem = ({ value = '', onSelect, selected = false }) => (
    <div onClick={() => onSelect(value)} className={`capitalize cursor-pointer py-1 px-3 border border-transparent hover:border-red-50 ${selected ? 'border border-red-100' : ''}`}>
        {value}
    </div>
);

const filters = Object.keys(Filter);

export default function TodoController({ count, onChange, onClear, value }) {
    return (
        <div className="container flex items-center space-between text-xs text-center border-t py-3 px-4">
            <div className="">
                {count} items left
            </div>
            <div className="flex items-center justify-around flex-grow">
                {filters.map((filter) => (
                    <ControllerItem value={Filter[filter]} selected={Filter[filter] === value} onSelect={onChange} />
                ))}
            </div>
            <div onClick={onClear} className="cursor-pointer">
                Clear completed
            </div>
        </div>
    );
}