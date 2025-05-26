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
        about
      </Heading>
      <Heading as="h3" size="md" mb={2}>
        made in 🇨🇴
      </Heading>
      <Text mb={4} color="gray.500">
        i&apos;m a {age}-year-old software developer from the colombian eastern
        plains (yes, a cowboy 🤠). i love exploring new cultures, meeting
        people, and building things with code.
      </Text>
      <Heading as="h4" size="sm" mb={2}>
        hobbies
      </Heading>
      <HStack gap={2}>
        <Badge>read</Badge>
        <Badge variant="subtle">invest</Badge>
        <Badge variant="subtle">cook</Badge>
        <Badge variant="subtle">travel</Badge>
        <Badge variant="subtle">hiking</Badge>
        <Badge variant="subtle">football</Badge>
      </HStack>
    </VStack>

    <VStack alignItems='stretch'>
      <Heading as="h3" size="md" mb={2}>
        education 📚
      </Heading>
      <Heading as="h4" size="sm" mb={2}>
        universidad de los andes
      </Heading>
      <Text color="gray.500">
        <Badge variant="subtle">2018-2022</Badge> studied and graduated as a
        software engineer with a gpa of 4.04/5 (yeah, 404). here i fell in love
        with web development, creating stuff & finances.
      </Text>
      <Heading as="h4" size="sm" mb={2}>
        cees
      </Heading>
      <Text color="gray.500">
        <Badge variant="subtle">2002-2017</Badge> i would not
        define myself as a good student, but as a curious & competitive person.
        i participated (and sometimes won) in tennis, swimming, football, and
        math/physics competitions. in high school, i started my interests in
        tech & innovation.
      </Text>
    </VStack>
  </VStack>
);

export default About;
