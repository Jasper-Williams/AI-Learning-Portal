import { Button, Heading, Text, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <VStack gap="4" p="10">
      <Heading>Hello World</Heading>
      <Text>AI Lab is working with Chakra UI.</Text>
      <Button colorPalette="blue">Start Learning</Button>
    </VStack>
  );
}