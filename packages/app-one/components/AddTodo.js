import * as React from 'react';

const fontThin = 'font-thin text-gray-200';
const fontThick = 'font-thick text-gray-500';

export default function AddTodo({ onSubmit, visible, toggleVisible }) {
    const [text, setText] = React.useState('');

    const handleChange = ({ target: { value }}) => {
        setText(value);
    };

    const handleSubmit = ({ key }) => {
        if (key === 'Enter' && text.length > 0) {
            onSubmit(text);
            setText('');
        }
    }

    return (
        <div className="flex px-4 py-3 align-center space-between">
            <div className={`${visible ? fontThick : fontThin} mr-3 cursor-pointer`} onClick={toggleVisible}>
                ▼
            </div>
            <div>
                <input
                    className="ring-0 outline-none text-xl font-thin"
                    type="text"
                    placeholder="What needs to be done?"
                    value={text}
                    onChange={handleChange}
                    onKeyDown={handleSubmit}
                />
            </div>
        </div>
    );
}