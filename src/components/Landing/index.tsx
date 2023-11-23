import { Heading, Box, Text, useColorModeValue } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Image from 'next/image';

const Landing = () => {
  const nameColor = useColorModeValue('#2B6CB0', '#90CDF4');

  return (
    <Box
      id="home"
      pt={{sm:'5rem',md: '7rem',xl: '15rem'}}
      mt="1rem"
      pb={{sm:'9rem',md:'1rem'}}
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="space-between"
      minH={'100vh'}>
      <Box
        display="flex"
        w="100%"
        alignItems="center"
        flexDirection={['column', 'column', 'column', 'column', 'row']}
        justifyContent="space-between">
        <Heading
          as="h5"
          size="3xl"
          mb="2rem"
       
          textAlign={['center', 'center', 'center', 'left', 'left']}>
          <>
            <Text fontSize={{sm:'2xl',md:'6xl'}} as="kbd">hello! </Text>
            <br />
            <Box>
              <Text fontSize={{sm:'2xl',md:'6xl'}} as="kbd">i'm </Text>

              <Text fontSize={{sm:'2xl',md:'6xl'}} as="kbd" color={nameColor}>
                mateo pérez.
              </Text>
            </Box>
      
            <Text fontSize={['xl','2xl','2xl','6xl','6xl']} as="kbd">i google & gpt stuff, people usually call it full stack dev 🤔.</Text>
          </>
        </Heading>

        <Box minH={{sm:250,md:345}} minW={{sm:181,md:250}} position="relative" borderRadius="0.5rem" overflow="hidden">
          <Image src="/Subject.png" alt="Picture of the author" fill />
        </Box>
      </Box>

      <a href="#about">
        <ChevronDownIcon cursor="pointer" w="12" h="12" ></ChevronDownIcon>
      </a>
    </Box>
  );
};

export default Landing;
