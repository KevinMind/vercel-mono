import { useState } from 'react';
import { Button, Box, Text, Flex } from '@chakra-ui/react';

const Todo = ({ text, id, done, onToggle, onRemove }) => {
    const [visible, setVisible] = useState(false);

    const toggle = value => () => setVisible(value);

    return (
        <Flex
            justifyContent="space-between"
            alignItems="center"
            py={4}
            onMouseEnter={toggle(true)}
            onMouseLeave={toggle(false)}
        >
            <Button
                variant="ghost"
                onClick={() => onToggle(id)}
                mr={2} borderRadius={100}
                border="1px solid gray"
                w={10} h={10}
                textAlign="center"
                color="green.500"
                cursor="pointer"
            >
                {done ? '✓' : ''}
            </Button>
            <Box flexGrow={1}>
                <Text
                    textDecoration={done ? 'line-through' : 'none'}
                    color={done ? 'gray.300' : 'gray.800'}
                    fontWeight={200}
                >
                    {text} 
                </Text>
            </Box>
            <Box
                onClick={() => onRemove(id)}
                opacity={visible ? 1 : 0}
                cursor="pointer"
                _hover={{ color: 'red.700' }}
            >
                X
            </Box>
        </Flex>
    )
}

export default function TodoList({ todos, onToggle, onRemove }) {
    const [visible, setVisible] = useState(false);

    const toggle = value => () => setVisible(value);

    return (
        <Box boxShadow="inner">
            {Array.isArray(todos) ? todos.map(todo => (
                <Box borderColor="gray.200" borderTopWidth={1} px={4} key={todo.id}>
                    <Todo
                        {...todo}
                        onRemove={onRemove}
                        onToggle={onToggle}
                    />
                </Box>
            )) : null}
        </Box>
    )
}