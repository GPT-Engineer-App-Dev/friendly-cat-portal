import { Box, Container, Heading, Text, VStack, Flex, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <VStack spacing={0} align="stretch">
        {/* Header */}
        <Box bg="brand.700" color="white" py={4}>
          <Container maxW="container.lg">
            <Heading as="h1" size="xl" textAlign="center">
              Welcome to Cat World
            </Heading>
          </Container>
        </Box>

        {/* Main Section */}
        <Box flex="1" py={10}>
          <Container maxW="container.lg">
            <VStack spacing={6}>
              <Heading as="h2" size="lg">
                All About Cats
              </Heading>
              <Image src="https://placekitten.com/200/300" alt="Placeholder Cat" borderRadius="md" boxShadow="md" />
              <Text fontSize="md" mt={4}>
                Cats are small, carnivorous mammals that are often kept as pets. They are known for their agility, playful behavior, and ability to hunt vermin. Cats have been domesticated for thousands of years and are one of the most popular pets in the world.
              </Text>
              <Text fontSize="md" mt={4}>
                There are many different breeds of cats, each with its own unique characteristics and personality traits. Whether you prefer a playful kitten or a calm, older cat, there is a breed that is perfect for you.
              </Text>
            </VStack>
          </Container>
        </Box>

        {/* Footer */}
        <Box bg="brand.900" color="white" py={4}>
          <Container maxW="container.lg">
            <Text textAlign="center">
              &copy; {new Date().getFullYear()} Cat World. All rights reserved.
            </Text>
          </Container>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;