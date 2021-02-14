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
      <Button w="270px" colorScheme="linkedin" leftIcon={<FaLinkedinIn />}>
        <Link href="https://www.facebook.com/cristianmateo.perezmarin/" isExternal>
          LinkedIn
        </Link>
      </Button>
      <chakra.button
        display="flex"
        alignItems="center"
        justifyContent="center"
        w="270px"
        py="2"
        bg={colorMode === 'light' ? 'black' : 'white'}
        rounded="md">
        <FaGithub color={colorMode !== 'light' ? 'black' : 'white'} />
        <Link href="https://www.facebook.com/cristianmateo.perezmarin/" isExternal>
          <Text color={colorMode !== 'light' ? 'black' : 'white'} ml="8px">
            GitHub
          </Text>
        </Link>
      </chakra.button>

      <Button w="270px" colorScheme="facebook" leftIcon={<FaFacebook />}>
        <Link href="https://www.facebook.com/cristianmateo.perezmarin/" isExternal>
          Facebook
        </Link>
      </Button>
      <Button w="270px" colorScheme="twitter" leftIcon={<FaTwitter />}>
        <Link href="https://twitter.com/MateoPerez08" isExternal>
          Twitter
        </Link>
      </Button>
      <Button
        w="270px"
        bgGradient="linear(to-r,pink.500, #5851DB )"
        leftIcon={<FaInstagram color="white" />}>
        <Link textColor="white" href="https://www.instagram.com/mateoperez.08/" isExternal>
          Instagram
        </Link>
      </Button>
      <Button w="270px" colorScheme="red" leftIcon={<FaYoutube />}>
        <Link href="https://www.youtube.com/channel/UCPjytC4RPWf1WZ8FIqNT40w" isExternal>
          Youtube
        </Link>
      </Button>
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
