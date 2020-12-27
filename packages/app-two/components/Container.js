import { Box, Heading, Text, Container as ChkContainer, Link } from '@chakra-ui/react';

export default function Container({ children }) {
    return (
        <ChkContainer maxW="lg" centerContent py={2} px={1}>
            <div>
                <Heading as="h1" size="4xl" fontWeight={100}>todos</Heading>
                <Text mt={3}>Styled with Chakra UI</Text>
            </div>
            <Box w="100%" boxShadow="lg">
                {children}        
            </Box>
            <Box p={4}>
                Visit <Link color="blue.400" href={process.env.NEXT_PUBLIC_APP_ONE_HREF}>App One</Link>
            </Box>
        </ChkContainer>
    );
}