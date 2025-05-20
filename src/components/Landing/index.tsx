'use client'
import { Heading, Box, Text, Link } from '@chakra-ui/react';
import { IoChevronDownSharp } from "react-icons/io5";
import Image from 'next/image';
import { motion } from 'framer-motion';

const MotionChevronDown = motion(IoChevronDownSharp);

interface Props {
  message: string;
  image: string;
}

const Landing = ({ message="", image }: Props) => {

  return (
    <Box
      id="home"
      pb={{sm:'1rem',md:'1rem'}}
      display="flex"
      position="relative"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
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
            <Text
              fontSize={{sm:'2xl',md:'6xl'}}
              lineHeight="1"
              as="kbd"
              mb={2}
            >
              {message}
            </Text>
        </Heading>

        <Box minH={{base:250,sm:250,md:345}} minW={{base:181,sm:181,md:250}} position="relative" borderRadius="0.5rem" overflow="hidden">
          <Image src={image} alt="Picture of the author" fill />
        </Box>
      </Box>

      <Link position="absolute" bottom={0} href="#about">
        <MotionChevronDown
          cursor="pointer"
          size={30}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </Link>
    </Box>
  );
};

export default Landing;
