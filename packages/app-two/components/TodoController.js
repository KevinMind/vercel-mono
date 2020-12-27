import { Flex, Box, Button, HStack } from '@chakra-ui/react';

const filters = ['all', 'active', 'complete'];

export default function TodoController({ count, onSelect, onClear, value }) {
    return (
        <Flex alignItems="center" justifyContent="space-between" p={4}>
            <Box>
                {count} item{count > 1 ? 's' : ''} left
            </Box>
            <Box>
                <HStack>
                    {filters.map((filter) => (
                        <Button
                            variant={filter === value ? 'outline' : 'ghost'}
                            borderColor="red.200"
                            onClick={() => onSelect(filter)}
                            textTransform="capitalize"
                        >
                            {filter}
                        </Button>
                    ))}
                </HStack>
            </Box>
            <Box>
                <Button onClick={onClear} variant="ghost">
                    clear complete
                </Button>
            </Box>
        </Flex>
    )
}