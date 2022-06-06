import { FC } from 'react';
import { Grid, GridItem, ListItem, Wrap, UnorderedList, WrapItem } from '@chakra-ui/react';
import Section from './Section';

import MusicSection from './MusicSection';
const About: FC<{}> = (props) => {
  const age = new Date(Date.now() - 1970).getUTCFullYear() - 2000;

  return (
    <Grid
      id="about"
      w="100%"
      h={[]}
      mt="1rem"
      mb="1rem"
      templateRows={['repeat(2, 1fr)']}
      templateColumns={['repeat(2, 1fr)']}
      gap={4}>
      <GridItem p={2} borderWidth="1px" borderRadius="lg" rowSpan={[1]} ml={[]} colSpan={[2, 2, 1]}>
        <Section
          title=" Education 📚"
          subtitle="CES"
          link="https://colesan.edu.co/"
          content="[2002-2017] Colegio Espiritu Santo was the only school in which i studied. It is located in
          Colombia. In Elementary School i used to participate & won in varaiety of sports. In
          HighSchool i started my interests in E-Sports & Technology">
          <Section
            subtitle="Andes University"
            link="https://uniandes.edu.co/"
            content="[2018-2022] Andes Unversity is the best University in Colombia and 250th worldwide. I studied and graduated as a Software Engineer"
          />
        </Section>
      </GridItem>
      <GridItem p={2} borderWidth="1px" borderRadius="lg" rowSpan={[1]} colSpan={[2, 2, 1]}>
        <Section
          title=" Made in  🇨🇴"
          subtitle="Me"
          content={`Im a ${age} years old software developer from Colombia. To be more specific I am from  the Colombian Eastern Plains, which make me a cowboy. Even though I feel like a world citizen. I like meeting new people and cultures from different parts of the world.`}>
          <Section subtitle="Hobbies" content="">
            <UnorderedList>
              Games
              <ListItem>Programming</ListItem>
              <ListItem>Youtube</ListItem>
              <ListItem>Reading</ListItem>
              <ListItem>Hiking & Football</ListItem>
              <ListItem>Games</ListItem>
            </UnorderedList>
          </Section>
        </Section>
      </GridItem>
      <GridItem p={2} borderWidth="1px" borderRadius="lg" rowSpan={[1]} colSpan={[2]}>
        <Section
          title=" More 🎶"
          subtitle="Music Taste"
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
