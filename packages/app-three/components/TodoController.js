import { Filter } from 'todo-lib';
import { styled } from '../stitches.config';

const filters = Object.keys(Filter);

const Button = styled('button', {
    textTransform: 'capitalize',
});

const ClearAll = styled('button', {

});

const Container = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '$2 $3'
});

export default function TodoController({ count, onChange, onClear, value }) {
    return (
        <Container>
            <div>
                {count} items left
            </div>
            <div>
                {filters.map((filter) => (
                    <Button onClick={() => onChange(Filter[filter])} key={filter}>
                        {filter}
                    </Button>
                ))}
            </div>
            <div>
                <ClearAll onClick={onClear}>
                    Clear completed
                </ClearAll>
            </div>
        </Container>
    )
}