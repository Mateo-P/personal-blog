import { FC, useState } from 'react';
import {
  Text,
  Grid,
  GridItem,
  Box,
  Center,
  Link,
  Wrap,
  WrapItem,
  useColorMode
} from '@chakra-ui/react';
import ReactAudioPlayer from 'react-audio-player';
import Image from 'next/image';
const About: FC<{}> = (props) => {
  const { colorMode } = useColorMode();
  const textColor = colorMode === 'light' ? 'gray.500' : 'gray.200';
  console.log(textColor);
  return (
    <Grid
      w="100%"
      h={[]}
      templateRows={['repeat(1, 1fr)', 'repeat(3, 1fr)', 'repeat(2, 1fr)']}
      templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(5, 1fr)']}
      gap={4}>
      <GridItem
        display="flex"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        rowSpan={[1, 2]}
        colSpan={1}>
        <Image src="/vertical_me.jpg" alt="Picture of the author" width={400} height={500} />
      </GridItem>
      <GridItem p={2} borderWidth="1px" borderRadius="lg" rowSpan={[1]} ml={[]} colSpan={[1, 2]}>
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="sm"
          letterSpacing="wide"
          color="teal.600">
          School
        </Text>
        <Link
          mt={1}
          display="block"
          fontSize="md"
          lineHeight="normal"
          fontWeight="semibold"
          isExternal
          href="https://colesan.edu.co/">
          CES
        </Link>
        <Text mt={2} color={textColor}>
          [2002-2017] Colegio Espiritu Santo was the only school in which i studied. It is located
          in Colombia. In Elementary School i used to participate & won in varaiety of sports. In
          HighSchool i started my interests in E-Sports & Tecnology
        </Text>
      </GridItem>
      <GridItem p={2} borderWidth="1px" borderRadius="lg" rowSpan={[1]} colSpan={[1, 2]}>
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="sm"
          letterSpacing="wide"
          color="teal.600">
          University
        </Text>
        <Link
          mt={1}
          display="block"
          fontSize="lg"
          lineHeight="normal"
          isExternal
          fontWeight="semibold"
          href="#">
          Andes University
        </Link>
        <Text mt={2} color={textColor}>
          [2018-Present] Andes Unversity is the best University in Colombia and 250th worldwide. Im
          a 7th semester student in Computer Science & Industrial Engineering
        </Text>
      </GridItem>
      <GridItem p={2} borderWidth="1px" borderRadius="lg" rowSpan={[1]} colSpan={[1, 4]}>
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="sm"
          letterSpacing="wide"
          color="teal.600">
          More
        </Text>
        <Link
          mt={1}
          display="block"
          fontSize="lg"
          lineHeight="normal"
          fontWeight="semibold"
          isExternal
          href="#">
          Music Taste
        </Link>
        <Text mt={2} color={textColor}>
          If you ask me about my taste it had changed and it will change in the next years. you can
          even perceive the change in time in my personality. Here is a bit :
        </Text>
        <Wrap spacing="30px">
          <WrapItem display="flex" flexDirection="column">
            <Text fontWeight="semibold" mt={2} color={textColor}>
              Latin
            </Text>
            <Box overflow="hidden" borderWidth="1px" borderRadius="lg" display="flex">
              <iframe
                src="https://open.spotify.com/embed/track/6RmnotfWeDu72fXhpo26Bq"
                width="300"
                height="80"
                allow="encrypted-media"></iframe>
            </Box>
          </WrapItem>
          <WrapItem display="flex" flexDirection="column">
            <Text fontWeight="semibold" mt={2} color={textColor}>
              Rock
            </Text>
            <Box overflow="hidden" borderWidth="1px" borderRadius="lg" display="flex">
              <iframe
                src="https://open.spotify.com/embed/track/4oDZ5L8izBals6jKBJDBcX"
                width="300"
                height="80"
                allow="encrypted-media"></iframe>
            </Box>
          </WrapItem>
          <WrapItem display="flex" flexDirection="column">
            <Text fontWeight="semibold" mt={2} color={textColor}>
              Electronic
            </Text>
            <Box overflow="hidden" borderWidth="1px" borderRadius="lg" display="flex">
              <iframe
                src="https://open.spotify.com/embed/track/1cG0umU5TKStygKsPFZ9pY"
                width="300"
                height="80"
                allow="encrypted-media"></iframe>
            </Box>
          </WrapItem>
          <WrapItem display="flex" flexDirection="column">
            <Text fontWeight="semibold" mt={2} color={textColor}>
              Full Playlist
            </Text>
            <Box overflow="hidden" borderWidth="1px" borderRadius="lg" display="flex">
              <iframe
                src="https://open.spotify.com/embed/playlist/5JCT2TbnPKQp5tGWJ8zCdH"
                width="300"
                height="80"
                allow="encrypted-media"></iframe>
            </Box>
          </WrapItem>
        </Wrap>
      </GridItem>
    </Grid>
  );
};

export default About;
