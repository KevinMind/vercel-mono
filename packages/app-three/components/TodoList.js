import { styled } from '../stitches.config';

import Clickable from './Clickable';

const Container = styled('div', {

});

const Toggle = styled(Clickable, {
    marginRight: '$2',
    padding: '10 20',
    background: '$gray100',
    width: '$6',
    height: '$6',
    borderRadius: '100%',
});

const Delete = styled(Clickable, {
    color: '$red500',
});

const TodoContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    px: '$2',
    py: '$3'
});

const TodoText = styled('div', {
    flex: 2,
    textAlign: 'left'
});

const Todo = ({ text, id, done, onDelete, onToggle }) => (
    <TodoContainer>
        <Toggle onClick={() => onToggle(id)}>
            {done ? '✓' : ''}
        </Toggle>
        <TodoText>
            {text}
        </TodoText>
        <Delete onClick={() => onDelete(id)}>
            X
        </Delete>
    </TodoContainer>
)

export default function TodoList({ todos, onToggle, onRemove }) {
    return (
        <Container>
            {todos.map((todo) => (
                <Todo {...todo}  onDelete={onRemove} onToggle={onToggle} key={todo.id} />
            ))}
        </Container>
    )
}