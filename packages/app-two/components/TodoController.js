import { Flex, Box, Button, HStack } from '@chakra-ui/react';

const filters = ['all', 'active', 'complete'];

export default function TodoController({ count, onSelect, onClear, value }) {
    return (
        <Flex alignItems="center" justifyContent="space-between" p={4} flexWrap="wrap">
            <Box m={2}>
                {count} item{count > 1 ? 's' : ''} left
            </Box>
            <Box m={2}>
                <HStack>
                    {filters.map((filter) => (
                        <Button
                            size="sm"
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
            <Box m={2}>
                <Button onClick={onClear} variant="ghost" size="sm">
                    clear complete
                </Button>
            </Box>
        </Flex>
    )
}