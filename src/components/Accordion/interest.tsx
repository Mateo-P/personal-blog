import { FC } from 'react';
import { Heading, Text, Image, VStack, HStack, Badge } from '@chakra-ui/react';

interface Book {
  title: string;
  author: string;
  coverUrl: string;
  year: string;
  rating?: number;
  genre?: string;
}

interface Props {
  title: string;
  items: Book[];
}

const Interest: FC<Props> = ({ title, items }) => {
  return (
    <VStack align="start" gap={4}>
      <Heading as="h2" size="xl">
        {title}
      </Heading>
      <HStack gap={6} align="start" w="100%">
        {items.map((item, index) => (
          <HStack 
            key={index} 
            gap={4} 
            p={4} 
            borderRadius="lg" 
            borderWidth="1px"
          >
            <Image
              src={item.coverUrl}
              alt={`${item.title} cover`}
              boxSize="100px"
              objectFit="cover"
              borderRadius="md"
            />
            <VStack align="start" gap={1}>
              <Heading size="md">{item.title}</Heading>
              <Text color="gray.600">{item.author}</Text>
              <HStack gap={2}>
                <Badge colorScheme="blue">{item.year}</Badge>
                {item.genre && <Badge colorScheme="purple">{item.genre}</Badge>}
                {item.rating && (
                  <Badge colorScheme="green">
                    {item.rating}/5 ⭐
                  </Badge>
                )}
              </HStack>
            </VStack>
          </HStack>
        ))}
      </HStack>
    </VStack>
  );
};

export default Interest;
