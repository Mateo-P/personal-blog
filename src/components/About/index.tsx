import { Grid, GridItem, ListItem, Wrap, UnorderedList, WrapItem } from '@chakra-ui/react';
import Section from './Section';

import MusicSection from './MusicSection';
const About = () => {
  const age = new Date(Date.now() - 1970).getUTCFullYear() - 2000;

  return (
    <Grid
      id="about"
      w="100%"
      h={[]}
      mt="1rem"
      mb="1rem"
      templateRows={{md:'repeat(2, 1fr)'}}
      templateColumns={{md:'repeat(2, 1fr)'}}
      gap={4}>
      <GridItem p={2} borderWidth="1px" borderRadius="lg" rowSpan={[1]} ml={[]} colSpan={{sm:2,md:1}}>
        <Section
          title=" Education 📚"
          subtitle="CES"
          link="https://colesan.edu.co/"
          content="[2002-2017] CES, now CEES, was the only school I studied. In Elementary School i used to participate (some times won) in varaiety of competitions such as tennis, swimming, football & math physics. At
          HighSchool i started my interests in Tech & Innovation.">
          <Section
            subtitle="Andes University"
            link="https://uniandes.edu.co/"
            content="[2018-2022] At Andes Unversity I studied and graduated as a Software Engineer with a PGA of 4.04/5 (yeah 404). Here i fell in love with web development and creating stuff."
          />
        </Section>
      </GridItem>
      <GridItem p={2} borderWidth="1px" borderRadius="lg" rowSpan={[1]} colSpan={{sm:2,md:1}}>
        <Section
          title=" Made in  🇨🇴"
          subtitle="Me"
          content={`Im a ${age} years old software developer from Colombia and world wide citizen. To be more specific I am from  the Colombian Eastern Plains, which make me a cowboy. I like meeting new people and cultures from different parts of the world.`}>
          <Section subtitle="Hobbies" content="">
            <UnorderedList>
              <ListItem>Read</ListItem>
              <ListItem>Invest</ListItem>
              <ListItem>Cook</ListItem>
              <ListItem>Travel</ListItem>
              <ListItem>Hiking & Football</ListItem>
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
