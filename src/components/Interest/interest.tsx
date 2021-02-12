import { FC } from 'react';
import { AspectRatio, Heading } from '@chakra-ui/react';
interface Props {
  title: string;
  src: string;
}
const Interest: FC<Props> = ({ title, src }) => {
  return (
    <>
      <Heading as="h2" size="xl">
        {title}
      </Heading>
      <AspectRatio overflow="hidden" borderRadius="lg" maxW="460px" ratio={1}>
        <iframe
          width="460"
          height="315"
          src={src}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </AspectRatio>
    </>
  );
};

export default Interest;
