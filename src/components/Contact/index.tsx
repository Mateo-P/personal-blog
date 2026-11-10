import { Heading, Box } from "@chakra-ui/react";

function Contact() {
  return (
    <Box
      id="contact"
      m="auto"
      mt="1rem"
      mb="1rem"
      width={{ base: "100%", sm: "100%", md: "50%" }}
    >
      <Heading size="xl" textAlign="center">
        Contact
      </Heading>
    </Box>
  );
}

export default Contact;
