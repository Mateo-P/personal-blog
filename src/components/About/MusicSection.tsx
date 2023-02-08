import { FC } from 'react';
import { Text, Box } from '@chakra-ui/react';
type Props = {
  genre: string;
  src: string;
};
const MusicSection = ({ genre, src }: Props) => {
  return (
    <>
      <Text fontWeight="semibold" mt={2}>
        {genre}
      </Text>
      <Box overflow="hidden" display="flex">
        <iframe
          src={`https://open.spotify.com/embed/${src}`}
          width="300"
          height="80"
          allow="encrypted-media"></iframe>
      </Box>
    </>
  );
};

export default MusicSection;
