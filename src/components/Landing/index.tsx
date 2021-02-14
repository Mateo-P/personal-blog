import { useRef, useEffect, useState } from 'react';
import { Heading, VStack, Box, useColorModeValue } from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';

const Landing = () => {
  const ref = useRef(document.createElement('div'));
  const [width, setWidth] = useState(0);
  const nameColor = useColorModeValue('#2B6CB0', '#90CDF4');
  console.log(width);
  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.offsetWidth + 25);
    }
  }, [ref.current]);

  return (
    <VStack h="100vh">
      {ref.current && (
        <Box display="flex" align="center">
          <Heading as="h1" size="3xl" textAlign="left">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    `Welcome. I'm <span style="color: ${nameColor};" >Mateo Pérez</span>.</br>I'm a Frontend developer.`
                  )
                  .start();
              }}
            />
          </Heading>
        </Box>
      )}
      <Heading as="h1" size="3xl" ref={ref} visibility="hidden">
        holiwis pai vamo a dejar esto melo
      </Heading>
    </VStack>
  );
};

export default Landing;
