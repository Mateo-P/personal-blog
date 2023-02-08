import { VStack, Button, Heading, Link, useColorMode, chakra, Text } from '@chakra-ui/react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaLinkedinIn,
  FaSpotify
} from 'react-icons/fa';
function Contact() {
  const { colorMode } = useColorMode();
  return (
    <VStack
      id="contact"
      p={4}
      m="auto"
      mt="1rem"
      mb="1rem"
      maxW={[' 384px']}
      borderWidth="1px"
      borderRadius="lg">
      <Heading textAlign={'center'}>
        Contact me on <br />
        👇🏼👇🏼👇🏼
      </Heading>
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
      <Link href="https://twitter.com/cmp_0508" isExternal>
        <Button w="270px" colorScheme="twitter" leftIcon={<FaTwitter />}>
          Twitter
        </Button>
      </Link>
      <Link textColor="white" href="https://www.instagram.com/cmp_0508/" isExternal>
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
      <Link
        href="https://open.spotify.com/user/22o5kwvupxfzdyvpxbfjfgtny?si=8a7223da5efa453e&nd=1"
        isExternal>
        <Button w="270px" colorScheme="green" leftIcon={<FaSpotify />}>
          Spotify
        </Button>
      </Link>
    </VStack>
  );
}

export default Contact;
