import { FC } from 'react';
import { Text, Link, useColorMode } from '@chakra-ui/react';

interface Props {
  title: string;
  subtitle: string;
  link: string;
  content: string;
}
const Section: FC<Props> = ({ title, subtitle, link, content }) => {
  const { colorMode } = useColorMode();
  const textColor = colorMode === 'light' ? 'gray.500' : 'gray.200';
  return (
    <>
      <Text
        fontWeight="bold"
        textTransform="uppercase"
        fontSize="xl"
        letterSpacing="wide"
        color="blue.600">
        {title}
      </Text>
      <Link
        mt={1}
        display="block"
        fontSize="xl"
        lineHeight="normal"
        fontWeight="semibold"
        isExternal
        href={link}>
        {subtitle}
      </Link>
      <Text fontSize="lg" mt={2} color={textColor}>
        {content}
      </Text>
    </>
  );
};

export default Section;
