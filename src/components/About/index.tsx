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
import Section from './Section';
import Image from 'next/image';
import MusicSection from './MusicSection';
const About: FC<{}> = (props) => {
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
        <Section
          title=" School &#128512;"
          subtitle="CES"
          link="https://colesan.edu.co/"
          content="[2002-2017] Colegio Espiritu Santo was the only school in which i studied. It is located in
          Colombia. In Elementary School i used to participate & won in varaiety of sports. In
          HighSchool i started my interests in E-Sports & Technology"
        />
      </GridItem>
      <GridItem p={2} borderWidth="1px" borderRadius="lg" rowSpan={[1]} colSpan={[1, 2]}>
        <Section
          title=" University &#128512;"
          subtitle="Andes University"
          link="https://uniandes.edu.co/"
          content="[2018-Present] Andes Unversity is the best University in Colombia and 250th worldwide. Im
          a 7th semester student in Computer Science & Industrial Engineering"
        />
      </GridItem>
      <GridItem p={2} borderWidth="1px" borderRadius="lg" rowSpan={[1]} colSpan={[1, 4]}>
        <Section
          title=" More 😆"
          subtitle="Music Taste"
          link="https://uniandes.edu.co/"
          content=" If you ask me about my taste it had changed and it will change in the next years. you can
          even perceive the change in time in my personality. Here is a bit :"
        />

        <Wrap spacing="30px">
          <WrapItem display="flex" flexDirection="column">
            <MusicSection genre="Latin" src="track/6RmnotfWeDu72fXhpo26Bq" />
          </WrapItem>
          <WrapItem display="flex" flexDirection="column">
            <MusicSection genre="Rock" src="track/4oDZ5L8izBals6jKBJDBcX" />
          </WrapItem>
          <WrapItem display="flex" flexDirection="column">
            <MusicSection genre="Electronic" src="track/1cG0umU5TKStygKsPFZ9pY" />
          </WrapItem>
          <WrapItem display="flex" flexDirection="column">
            <MusicSection genre="Full Playlist" src="playlist/5JCT2TbnPKQp5tGWJ8zCdH" />
          </WrapItem>
        </Wrap>
      </GridItem>
    </Grid>
  );
};

export default About;
