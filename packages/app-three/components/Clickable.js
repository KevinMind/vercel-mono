import { styled } from '../stitches.config';

const Container = styled('button', {
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
    },
});

export default Container;