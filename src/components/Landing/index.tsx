import { useRef } from 'react';
import { Heading, Spacer, Box, Text, useColorModeValue } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Image from 'next/image';

const Landing = () => {
  const ref = useRef(document.createElement('div'));
  const nameColor = useColorModeValue('#2B6CB0', '#90CDF4');

  return (
    <Box
      id="home"
      pt={['7rem', '8rem', '12rem', '15rem', '15rem']}
      mt="1rem"
      pb="1rem"
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="space-between"
      minH={'100vh'}>
      {ref.current && (
        <Box
          display="flex"
          w="100%"
          alignItems="center"
          flexDirection={['column', 'column', 'column', 'column', 'row']}
          justifyContent="center"
          align="center">
          <Heading
            as="h1"
            size="3xl"
            mb="1rem"
            textAlign={['center', 'center', 'center', 'left', 'left']}>
            <>
              <Text as="kbd">Hello! I'm </Text>
              <Text as="kbd" color={nameColor}>
                Mateo Perez.
              </Text>
              <br />
              <Text as="kbd">I'm a Full-Stack Dev.</Text>
            </>
          </Heading>
          <Spacer />
          <Box
            position="relative"
            borderRadius="0.5rem"
            overflow="hidden"
            minH="450px"
            minW="370px"
            h="450px"
            w="370px">
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
