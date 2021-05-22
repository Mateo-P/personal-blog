import React from 'react';
import { VStack, Button, Heading, Link, useColorMode, chakra, Text } from '@chakra-ui/react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaLinkedinIn
} from 'react-icons/fa';
function Contact() {
  const { colorMode } = useColorMode();
  return (
    <VStack p={4} maxW={[' 320px']} borderWidth="1px" borderRadius="lg">
      <Heading>Follow me on</Heading>
      <Link href="https://www.linkedin.com/in/mateo-perez-4156291b2/" isExternal>
        <Button w="270px" colorScheme="linkedin" leftIcon={<FaLinkedinIn />}>
          LinkedIn
        </Button>
      </Link>
      <Link href="https://github.com/Mateo-P" isExternal>
        <chakra.button
          display="flex"
          alignItems="center"
          justifyContent="center"
          w="270px"
          py="2"
          bg={colorMode === 'light' ? 'black' : 'white'}
          rounded="md">
          <FaGithub color={colorMode !== 'light' ? 'black' : 'white'} />
          <Text color={colorMode !== 'light' ? 'black' : 'white'} ml="8px">
            GitHub
          </Text>
        </chakra.button>
      </Link>

      <Link href="https://www.facebook.com/cristianmateo.perezmarin/" isExternal>
        <Button w="270px" colorScheme="facebook" leftIcon={<FaFacebook />}>
          Facebook
        </Button>
      </Link>
      <Link href="https://twitter.com/MateoPerez08" isExternal>
        <Button w="270px" colorScheme="twitter" leftIcon={<FaTwitter />}>
          Twitter
        </Button>
      </Link>
      <Link textColor="white" href="https://www.instagram.com/mateoperez.08/" isExternal>
        <Button
          w="270px"
          bgGradient="linear(to-r,pink.500, #5851DB )"
          leftIcon={<FaInstagram color="white" />}>
          Instagram
        </Button>
      </Link>

      <Link href="https://www.youtube.com/channel/UCPjytC4RPWf1WZ8FIqNT40w" isExternal>
        <Button w="270px" colorScheme="red" leftIcon={<FaYoutube />}>
          Youtube
        </Button>
      </Link>

      <iframe
        src={`https://open.spotify.com/follow/1/?uri=spotify:user:22o5kwvupxfzdyvpxbfjfgtny&size=detail&theme=${
          colorMode === 'light' ? 'light' : 'dark'
        }`}
        width="269"
        height="56"
        scrolling="no"></iframe>
    </VStack>
  );
}

export default Contact;
