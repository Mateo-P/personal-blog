import { useRef } from 'react';
import { Heading, Box, Text, useColorModeValue } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Image from 'next/image';

const Landing = () => {
  const ref = useRef(document.createElement('div'));
  const nameColor = useColorModeValue('#2B6CB0', '#90CDF4');

  return (
    <Box
      id="home"
      pt={['8rem', '8rem', '15rem']}
      mt="1rem"
      pb="1rem"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      h={'100vh'}>
      {ref.current && (
        <Box display="flex" w="100%" flexWrap="wrap" justifyItems="center" align="center">
          <Heading as="h1" size="3xl" textAlign="left">
            <>
              <Text as="kbd">Hello! I'm </Text>
              <Text as="kbd" color={nameColor}>
                Mateo Perez.
              </Text>
              <br />
              <Text as="kbd">I'm a Full-Stack Dev.</Text>
            </>
          </Heading>
          <Box position="relative" borderRadius="0.5rem" overflow="hidden" h="450px" w="370px">
            <Image src="/vertical_me.jpeg" alt="Picture of the author" layout="fill" />
          </Box>
        </Box>
      )}
      <a href="#about">
        <ChevronDownIcon cursor="pointer" w="12" h="12" top="35%"></ChevronDownIcon>
      </a>
    </Box>
  );
};

export default Landing;
