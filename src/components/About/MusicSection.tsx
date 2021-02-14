import { FC } from 'react';
import { Text, Box } from '@chakra-ui/react';
interface Props {
  genre: string;
  src: string;
}
const MusicSection: FC<Props> = ({ genre, src }) => {
  return (
    <>
      <Text fontWeight="semibold" mt={2}>
        {genre}
      </Text>
      <Box overflow="hidden" borderWidth="1px" borderRadius="lg" display="flex">
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
