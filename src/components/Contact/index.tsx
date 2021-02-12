import React from 'react';
import { VStack, Button, Heading, Link, useColorMode } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
function Contact() {
  const { colorMode } = useColorMode();
  return (
    <VStack p={4} maxW={[' 320px']} borderWidth="1px" borderRadius="lg">
      <Heading>Follow me on</Heading>
      <Button colorScheme="facebook" leftIcon={<FaFacebook />}>
        <Link href="https://www.facebook.com/cristianmateo.perezmarin/" isExternal>
          Facebook
        </Link>
      </Button>
      <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
        <Link href="https://twitter.com/MateoPerez08" isExternal>
          Twitter
        </Link>
      </Button>
      <Button colorScheme="pink" leftIcon={<FaInstagram />}>
        <Link href="https://www.instagram.com/mateoperez.08/" isExternal>
          Instagram
        </Link>
      </Button>
      <Button colorScheme="red" leftIcon={<FaYoutube />}>
        <Link href="https://www.youtube.com/channel/UCPjytC4RPWf1WZ8FIqNT40w" isExternal>
          Youtube
        </Link>
      </Button>
      <iframe
        src={`https://open.spotify.com/follow/1/?uri=spotify:user:22o5kwvupxfzdyvpxbfjfgtny&size=detail&theme=${
          colorMode === 'light' ? 'light' : 'dark'
        }`}
        width="300"
        height="56"
        scrolling="no"></iframe>
    </VStack>
  );
}

export default Contact;
