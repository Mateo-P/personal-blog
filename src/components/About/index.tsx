import {
  VStack,
  Heading,
  Text,
  HStack,
  Badge,
} from "@chakra-ui/react";

const birthYear = 2000;
const age = new Date().getFullYear() - birthYear;

const About = () => (
  <VStack id="about" gap={8} mt="2rem" mb="2rem">
    <VStack alignItems="stretch" w="100%">
      <Heading size="xl" textAlign="center">
        About
      </Heading>
      <Heading as="h3" size="md" mb={2}>
        Made in 🇨🇴
      </Heading>
      <Text mb={4} color="gray.500">
        I&apos;m a {age}-year-old software developer from the Colombian eastern
        plains (yes, a cowboy 🤠). I love exploring new cultures, meeting
        people, and building things with code.
      </Text>
      <Heading as="h4" size="sm" mb={2}>
        Hobbies
      </Heading>
      <HStack gap={2}>
        <Badge>Read</Badge>
        <Badge variant="subtle">Invest</Badge>
        <Badge variant="subtle">Cook</Badge>
        <Badge variant="subtle">Travel</Badge>
        <Badge variant="subtle">Hiking</Badge>
        <Badge variant="subtle">Football</Badge>
      </HStack>
    </VStack>

    <VStack alignItems='stretch'>
      <Heading as="h3" size="md" mb={2}>
        Education 📚
      </Heading>
      <Heading as="h4" size="sm" mb={2}>
        Universidad de los Andes
      </Heading>
      <Text color="gray.500">
        <Badge variant="subtle">2018-2022</Badge> Studied and graduated as a
        software engineer with a GPA of 4.04/5 (yeah, 404). Here I fell in love
        with web development, creating stuff & finances.
      </Text>
      <Heading as="h4" size="sm" mb={2}>
        CEES
      </Heading>
      <Text color="gray.500">
        <Badge variant="subtle">2002-2017</Badge> I would not
        define myself as a good student, but as a curious & competitive person.
        I participated (and sometimes won) in tennis, swimming, football, and
        math/physics competitions. In high school, I started my interests in
        tech & innovation.
      </Text>
    </VStack>
  </VStack>
);

export default About;
