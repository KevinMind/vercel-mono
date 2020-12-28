import { useState } from 'react';
import { Box, Spacer, Input, InputGroup, InputLeftElement, Flex, Button } from '@chakra-ui/react';

const ToggleVisible = ({ onClick, active }) => (
    <Button
        onClick={onClick}
        h="1.75rem"
        size="sm"
        fontWeight={100}
        bg={active ? 'gray.100' : 'inherit'}
        color={active ? 'black' : 'grey.100'}
        variant="ghost"
    >
        ▼
    </Button>
)

export default function AddTodo({ onSubmit, active, toggle }) {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        if (e.key === 'Enter' && value) {
            onSubmit(value);
            setValue('');
        }
    }

    const handleChange = ({ target: { value }}) => setValue(value);

    return (
        <Flex p={4}>
            <Box mr={2}>
                <ToggleVisible onClick={toggle} active={active} />
            </Box>
            <Box>
                <Input
                    onKeyDown={handleSubmit}
                    value={value}
                    onChange={handleChange}
                    size="lg"
                    variant="unstyled"
                    pr="4.5rem"
                    type="text"
                    fontWeight={200}
                    placeholder="What needs to be done"
                />
            </Box>
        </Flex>
    );
}