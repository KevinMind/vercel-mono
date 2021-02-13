import { useState } from 'react';
import { styled } from '../stitches.config';

import Clickable from './Clickable';

const Container = styled('div', {
    display: 'flex',
    background: '$white',
    alignItems: 'center',
    padding: '$2',
    boxShadow: '$inner',
});

const Icon = styled('button', {
    padding: '$1',
    marginRight: '$2',
    background: 'inherit',
    border: 'none',
    outline: 'none',
    transition: '.2s ease',
    ':hover': {
        background: '$gray100'
    },
    ':focus': {
        background: '$gray100',
        boxShadow: '$outline',
        borderRadius: 4
    },
});

const Input = styled('input', {
    height: '100%',
    width: '100%',
    padding: '$2',
    border: 'none',
    outline: 'none',
    fontSize: '$4',
    fontWeight: 200,
});

export default function AddTodo({ onSubmit, active, toggle }) {
    const [value, setValue] = useState('');

    const handleChange = ({ target: { value }}) => setValue(value);

    const handleSubmit = (e) => {
        if (e.key === 'Enter' && value) {
            onSubmit(value);
            setValue('');
        }
    };

    return (
        <Container>
            <Clickable onClick={toggle}>
                ▼
            </Clickable>
            <Input
                onKeyDown={handleSubmit}
                onChange={handleChange}
                value={value}
            />
        </Container>
    )
}