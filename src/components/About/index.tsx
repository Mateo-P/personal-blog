import {
  VStack,
  Box,
  Heading,
  Text,
  List,
  ListItem,
  HStack,
  Badge,
} from "@chakra-ui/react";

const birthYear = 2000;
const age = new Date().getFullYear() - birthYear;

const About = () => (
  <VStack id="about" gap={8} mt="2rem" mb="2rem">
    <VStack alignItems="stretch">
      <Heading size="xl" textAlign="center">
        about
      </Heading>
      <Text textAlign="center" color="gray.500" maxW="2xl" mx="auto">
        Here are some of the projects I've worked on. Each project represents a
        unique challenge and learning opportunity.
      </Text>
      <Heading as="h3" size="md" mb={2}>
        made in 🇨🇴
      </Heading>
      <Text mb={4} divideX="1px">
        i'm a {age}-year-old software developer from the colombian eastern
        plains (yes, a cowboy 🤠). i love exploring new cultures, meeting
        people, and building things with code.
      </Text>
      <Heading as="h4" size="sm" mb={2}>
        hobbies
      </Heading>
      <HStack gap={2}>
        <Badge variant="subtle">read</Badge>
        <Badge variant="subtle">invest</Badge>
        <Badge variant="subtle">cook</Badge>
        <Badge variant="subtle">travel</Badge>
        <Badge variant="subtle">hiking & football</Badge>
      </HStack>
    </VStack>

    <Box>
      <Heading as="h3" size="md" mb={2}>
        education 📚
      </Heading>
      <Text>
        <b>andes university</b> <br />
        <Badge variant="subtle">2018-2022</Badge> studied and graduated as a
        software engineer with a gpa of 4.04/5 (yeah, 404). here i fell in love
        with web development, creating stuff & finances.
      </Text>
      <Text>
        <b>cees</b> <br />
        <Badge variant="subtle">2002-2017</Badge> i would not
        define myself as a good student, but as a curious & competitive person.
        i participated (and sometimes won) in tennis, swimming, football, and
        math/physics competitions. in high school, i started my interests in
        tech & innovation.
      </Text>
    </Box>
  </VStack>
);

export default About;
