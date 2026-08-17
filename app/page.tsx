"use client";

import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  LuArrowRight,
  LuBrain,
  LuCheck,
  LuCircleHelp,
  LuGraduationCap,
  LuShieldCheck,
  LuSparkles,
  LuTrophy,
} from "react-icons/lu";

const modules = [
  {
    icon: LuBrain,
    number: "01",
    title: "AI Fundamentals",
    description:
      "Understand how artificial intelligence, machine learning, and generative AI actually work.",
    lessons: "6 lessons",
    color: "blue",
  },
  {
    icon: LuSparkles,
    number: "02",
    title: "AI in Practice",
    description:
      "Learn how to write better prompts, evaluate outputs, and use AI as a learning tool.",
    lessons: "7 lessons",
    color: "purple",
  },
  {
    icon: LuShieldCheck,
    number: "03",
    title: "Responsible AI",
    description:
      "Explore bias, hallucinations, privacy, copyright, and academic integrity.",
    lessons: "6 lessons",
    color: "green",
  },
];

const stats = [
  { value: "19+", label: "Interactive Lessons" },
  { value: "50+", label: "Practice Questions" },
  { value: "8", label: "Achievements" },
];

export default function Home() {
  return (
    <Box minH="100vh" bg="gray.950" color="white">
      {/* Navigation */}
      <Box
        position="sticky"
        top="0"
        zIndex="50"
        borderBottom="1px solid"
        borderColor="whiteAlpha.200"
        bg="rgba(3, 7, 18, 0.85)"
        backdropFilter="blur(16px)"
      >
        <Container maxW="1200px">
          <Flex h="72px" align="center" justify="space-between">
            {/* Logo */}
            <HStack gap="3">
              <Flex
                w="42px"
                h="42px"
                rounded="12px"
                align="center"
                justify="center"
                bg="blue.500"
                boxShadow="0 0 30px rgba(59,130,246,0.35)"
              >
                <Text fontSize="sm" fontWeight="800">
                  AI
                </Text>
              </Flex>

              <Box>
                <Text fontWeight="800" fontSize="lg" lineHeight="1">
                  AI Lab
                </Text>
                <Text fontSize="xs" color="gray.500" mt="1">
                  Learn. Practice. Think.
                </Text>
              </Box>
            </HStack>

            {/* Desktop Navigation */}
            <HStack gap="8" display={{ base: "none", md: "flex" }}>
              <Text
                fontSize="sm"
                color="gray.300"
                cursor="pointer"
                _hover={{ color: "white" }}
              >
                Learn
              </Text>

              <Text
                fontSize="sm"
                color="gray.300"
                cursor="pointer"
                _hover={{ color: "white" }}
              >
                Challenges
              </Text>

              <Text
                fontSize="sm"
                color="gray.300"
                cursor="pointer"
                _hover={{ color: "white" }}
              >
                Progress
              </Text>
            </HStack>

            <Button
              size="sm"
              bg="white"
              color="gray.950"
              rounded="lg"
              fontWeight="700"
              _hover={{ bg: "gray.200" }}
            >
              Start Learning
            </Button>
          </Flex>
        </Container>
      </Box>

      {/* Hero */}
      <Box
        position="relative"
        overflow="hidden"
        borderBottom="1px solid"
        borderColor="whiteAlpha.100"
      >
        {/* Background glow */}
        <Box
          position="absolute"
          top="-250px"
          left="50%"
          transform="translateX(-50%)"
          w="800px"
          h="600px"
          bg="blue.600"
          opacity="0.12"
          filter="blur(120px)"
          rounded="full"
          pointerEvents="none"
        />

        <Container maxW="1200px" position="relative">
          <Grid
            templateColumns={{ base: "1fr", lg: "1.1fr 0.9fr" }}
            gap={{ base: "16", lg: "20" }}
            alignItems="center"
            py={{ base: "20", md: "28" }}
          >
            {/* Hero text */}
            <Stack gap="7">
              <Badge
                w="fit-content"
                px="3"
                py="1.5"
                rounded="full"
                bg="blue.500/10"
                color="blue.300"
                border="1px solid"
                borderColor="blue.400/20"
                fontSize="xs"
                fontWeight="700"
                letterSpacing="wide"
              >
                AI LITERACY FOR HIGH SCHOOL STUDENTS
              </Badge>

              <Heading
                fontSize={{ base: "5xl", md: "6xl", lg: "7xl" }}
                lineHeight="0.98"
                letterSpacing="-0.05em"
                maxW="700px"
              >
                Learn AI.
                <br />
                <Text as="span" color="blue.400">
                  Think smarter.
                </Text>
              </Heading>

              <Text
                fontSize={{ base: "lg", md: "xl" }}
                lineHeight="1.7"
                color="gray.400"
                maxW="620px"
              >
                A hands-on learning portal that teaches you how AI works,
                how to use it effectively, and how to think critically about
                the technology shaping your future.
              </Text>

              <HStack gap="3" flexWrap="wrap">
                <Button
                  size="lg"
                  px="7"
                  bg="blue.500"
                  rounded="xl"
                  fontWeight="700"
                  _hover={{
                    bg: "blue.400",
                    transform: "translateY(-2px)",
                  }}
                  transition="all 0.2s"
                >
                  Start Learning
                  <Icon as={LuArrowRight} ml="2" />
                </Button>

                <Button
                  size="lg"
                  px="7"
                  variant="outline"
                  rounded="xl"
                  borderColor="whiteAlpha.300"
                  color="gray.200"
                  _hover={{ bg: "whiteAlpha.100" }}
                >
                  Explore the Lab
                </Button>
              </HStack>

              <HStack gap="6" pt="2" color="gray.500" fontSize="sm">
                <HStack>
                  <Icon as={LuCheck} color="green.400" />
                  <Text>Free to learn</Text>
                </HStack>

                <HStack>
                  <Icon as={LuCheck} color="green.400" />
                  <Text>Self-paced</Text>
                </HStack>
              </HStack>
            </Stack>

            {/* Hero visual */}
            <Box
              position="relative"
              display={{ base: "none", lg: "block" }}
            >
              <Box
                rounded="3xl"
                border="1px solid"
                borderColor="whiteAlpha.200"
                bg="gray.900"
                p="6"
                boxShadow="0 30px 80px rgba(0,0,0,0.45)"
              >
                <Flex justify="space-between" align="center" mb="6">
                  <HStack>
                    <Flex
                      w="10"
                      h="10"
                      rounded="lg"
                      bg="blue.500/15"
                      align="center"
                      justify="center"
                    >
                      <Icon as={LuGraduationCap} color="blue.400" />
                    </Flex>

                    <Box>
                      <Text fontSize="sm" fontWeight="700">
                        Your Learning Path
                      </Text>
                      <Text fontSize="xs" color="gray.500">
                        AI Fundamentals
                      </Text>
                    </Box>
                  </HStack>

                  <Badge colorPalette="blue" variant="subtle">
                    Level 2
                  </Badge>
                </Flex>

                {/* Progress */}
                <Box
                  rounded="2xl"
                  bg="whiteAlpha.50"
                  border="1px solid"
                  borderColor="whiteAlpha.100"
                  p="5"
                >
                  <Flex justify="space-between" mb="3">
                    <Text fontSize="sm" color="gray.300">
                      Module Progress
                    </Text>

                    <Text fontSize="sm" color="blue.300" fontWeight="700">
                      68%
                    </Text>
                  </Flex>

                  <Box
                    h="2"
                    rounded="full"
                    bg="whiteAlpha.100"
                    overflow="hidden"
                  >
                    <Box
                      h="full"
                      w="68%"
                      bg="blue.500"
                      rounded="full"
                    />
                  </Box>

                  <Text mt="3" fontSize="xs" color="gray.500">
                    4 of 6 lessons completed
                  </Text>
                </Box>

                {/* Lessons */}
                <VStack align="stretch" gap="3" mt="5">
                  {[
                    ["What is AI?", true],
                    ["How Machines Learn", true],
                    ["Neural Networks", true],
                    ["Generative AI", false],
                  ].map(([lesson, complete]) => (
                    <Flex
                      key={lesson as string}
                      align="center"
                      justify="space-between"
                      p="3"
                      rounded="xl"
                      bg={complete ? "blue.500/5" : "whiteAlpha.50"}
                    >
                      <HStack>
                        <Flex
                          w="7"
                          h="7"
                          rounded="full"
                          align="center"
                          justify="center"
                          bg={complete ? "green.500/15" : "whiteAlpha.100"}
                        >
                          {complete ? (
                            <Icon as={LuCheck} color="green.400" boxSize="3.5" />
                          ) : (
                            <Text fontSize="xs" color="gray.500">
                              4
                            </Text>
                          )}
                        </Flex>

                        <Text fontSize="sm" color="gray.300">
                          {lesson as string}
                        </Text>
                      </HStack>

                      {complete && (
                        <Text fontSize="xs" color="green.400">
                          Complete
                        </Text>
                      )}
                    </Flex>
                  ))}
                </VStack>
              </Box>

              {/* XP floating card */}
              <Box
                position="absolute"
                bottom="-5"
                left="-10"
                bg="gray.900"
                border="1px solid"
                borderColor="whiteAlpha.200"
                rounded="2xl"
                px="5"
                py="4"
                boxShadow="0 20px 50px rgba(0,0,0,0.4)"
              >
                <HStack>
                  <Flex
                    w="10"
                    h="10"
                    rounded="full"
                    bg="yellow.400/10"
                    align="center"
                    justify="center"
                  >
                    <Icon as={LuTrophy} color="yellow.400" />
                  </Flex>

                  <Box>
                    <Text fontSize="xs" color="gray.500">
                      Experience
                    </Text>
                    <Text fontWeight="800">420 XP</Text>
                  </Box>
                </HStack>
              </Box>
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* Stats */}
      <Box borderBottom="1px solid" borderColor="whiteAlpha.100">
        <Container maxW="1000px">
          <SimpleGrid columns={{ base: 1, md: 3 }}>
            {stats.map((stat) => (
              <Box
                key={stat.label}
                textAlign="center"
                py="8"
                borderRight={{ base: "none", md: "1px solid" }}
                borderColor="whiteAlpha.100"
              >
                <Text fontSize="3xl" fontWeight="800">
                  {stat.value}
                </Text>

                <Text mt="1" fontSize="sm" color="gray.500">
                  {stat.label}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Learning Path */}
      <Box py={{ base: "20", md: "28" }}>
        <Container maxW="1200px">
          <Stack gap="3" maxW="650px">
            <Text
              fontSize="sm"
              fontWeight="800"
              letterSpacing="widest"
              color="blue.400"
            >
              YOUR LEARNING PATH
            </Text>

            <Heading fontSize={{ base: "3xl", md: "5xl" }} letterSpacing="-0.03em">
              From curious to AI literate.
            </Heading>

            <Text color="gray.400" fontSize="lg" lineHeight="1.7">
              Three focused modules take you from understanding the basics
              to confidently using AI and evaluating its impact.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 3 }} gap="5" mt="12">
            {modules.map((module) => (
              <Box
                key={module.number}
                p="7"
                rounded="2xl"
                border="1px solid"
                borderColor="whiteAlpha.150"
                bg="whiteAlpha.50"
                transition="all 0.25s"
                _hover={{
                  transform: "translateY(-5px)",
                  borderColor: "whiteAlpha.300",
                  bg: "whiteAlpha.100",
                }}
              >
                <Flex justify="space-between" align="start">
                  <Flex
                    w="12"
                    h="12"
                    rounded="xl"
                    bg={`${module.color}.500/10`}
                    align="center"
                    justify="center"
                  >
                    <Icon
                      as={module.icon}
                      boxSize="5"
                      color={`${module.color}.400`}
                    />
                  </Flex>

                  <Text
                    fontSize="sm"
                    fontWeight="800"
                    color="gray.600"
                  >
                    {module.number}
                  </Text>
                </Flex>

                <Heading mt="7" fontSize="xl">
                  {module.title}
                </Heading>

                <Text mt="3" color="gray.400" lineHeight="1.7">
                  {module.description}
                </Text>

                <Flex
                  mt="7"
                  pt="5"
                  borderTop="1px solid"
                  borderColor="whiteAlpha.100"
                  justify="space-between"
                  align="center"
                >
                  <Text fontSize="sm" color="gray.500">
                    {module.lessons}
                  </Text>

                  <Icon as={LuArrowRight} color="gray.500" />
                </Flex>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Challenge */}
      <Box
        py={{ base: "20", md: "24" }}
        borderTop="1px solid"
        borderBottom="1px solid"
        borderColor="whiteAlpha.100"
        bg="gray.900"
      >
        <Container maxW="1200px">
          <Grid
            templateColumns={{ base: "1fr", md: "1fr 1fr" }}
            gap="12"
            alignItems="center"
          >
            <Stack gap="5">
              <Badge
                w="fit-content"
                colorPalette="purple"
                variant="subtle"
              >
                PRACTICE
              </Badge>

              <Heading fontSize={{ base: "3xl", md: "5xl" }}>
                Don't just learn about AI.
                <br />
                <Text as="span" color="purple.400">
                  Put it to the test.
                </Text>
              </Heading>

              <Text color="gray.400" fontSize="lg" lineHeight="1.7">
                Test your knowledge with interactive questions, scenarios,
                and challenges designed to make AI concepts stick.
              </Text>

              <Button
                w="fit-content"
                size="lg"
                bg="white"
                color="gray.950"
                rounded="xl"
                _hover={{ bg: "gray.200" }}
              >
                Take a Challenge
                <Icon as={LuArrowRight} ml="2" />
              </Button>
            </Stack>

            {/* Challenge card */}
            <Box
              rounded="3xl"
              border="1px solid"
              borderColor="whiteAlpha.150"
              bg="gray.950"
              p={{ base: "6", md: "8" }}
            >
              <HStack justify="space-between">
                <HStack>
                  <Icon as={LuCircleHelp} color="purple.400" />
                  <Text fontWeight="700">AI Detective</Text>
                </HStack>

                <Badge colorPalette="purple">+100 XP</Badge>
              </HStack>

              <Text mt="7" fontSize="lg" lineHeight="1.6">
                An AI gives you a confident answer with three sources.
                What should you do before using the information?
              </Text>

              <VStack align="stretch" gap="3" mt="6">
                {[
                  "Trust the answer because it has sources",
                  "Verify the claims and check the sources",
                  "Ask the AI if it is correct",
                ].map((answer, index) => (
                  <Box
                    key={answer}
                    p="4"
                    rounded="xl"
                    border="1px solid"
                    borderColor="whiteAlpha.100"
                    bg="whiteAlpha.50"
                    cursor="pointer"
                    _hover={{
                      borderColor: "purple.400/40",
                      bg: "purple.400/5",
                    }}
                  >
                    <HStack>
                      <Flex
                        w="7"
                        h="7"
                        rounded="full"
                        border="1px solid"
                        borderColor="whiteAlpha.200"
                        align="center"
                        justify="center"
                        fontSize="xs"
                        color="gray.500"
                      >
                        {String.fromCharCode(65 + index)}
                      </Flex>

                      <Text fontSize="sm" color="gray.300">
                        {answer}
                      </Text>
                    </HStack>
                  </Box>
                ))}
              </VStack>
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* Final CTA */}
      <Box py={{ base: "20", md: "28" }}>
        <Container maxW="800px" textAlign="center">
          <Stack align="center" gap="5">
            <Flex
              w="14"
              h="14"
              rounded="2xl"
              bg="blue.500/10"
              align="center"
              justify="center"
            >
              <Icon as={LuGraduationCap} boxSize="7" color="blue.400" />
            </Flex>

            <Heading fontSize={{ base: "3xl", md: "5xl" }}>
              Ready to understand AI?
            </Heading>

            <Text color="gray.400" fontSize="lg" maxW="600px">
              Start your learning path and build the skills you need to use
              artificial intelligence thoughtfully and effectively.
            </Text>

            <Button
              size="lg"
              px="8"
              bg="blue.500"
              rounded="xl"
              fontWeight="700"
              _hover={{ bg: "blue.400" }}
            >
              Begin Your Journey
              <Icon as={LuArrowRight} ml="2" />
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Footer */}
      <Box borderTop="1px solid" borderColor="whiteAlpha.100">
        <Container maxW="1200px">
          <Flex
            py="7"
            justify="space-between"
            align="center"
            direction={{ base: "column", md: "row" }}
            gap="4"
          >
            <Text fontSize="sm" color="gray.600">
              AI Lab • AI Literacy for the next generation
            </Text>

            <HStack gap="6" fontSize="sm" color="gray.600">
              <Text cursor="pointer" _hover={{ color: "gray.300" }}>
                About
              </Text>
              <Text cursor="pointer" _hover={{ color: "gray.300" }}>
                Sources
              </Text>
              <Text cursor="pointer" _hover={{ color: "gray.300" }}>
                AI Disclosure
              </Text>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}