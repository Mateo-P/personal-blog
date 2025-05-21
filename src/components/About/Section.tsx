'use client'
import { Text, Link, } from '@chakra-ui/react';
import { useColorMode } from '../ui/color-mode';
interface Props {
  title?: string;
  subtitle: string;
  link?: string;
  content: string;
  children?: React.ReactNode;
}
const Section = ({ title, subtitle, link, content, children }: Props) => {
  const { colorMode } = useColorMode();
  const textColor = colorMode === 'light' ? 'gray.500' : 'gray.200';
  return (
    <>
      {title && (
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="xl"
          letterSpacing="wide"
          color="blue.600">
          {title}
        </Text>
      )}

      <Link
        mt={1}
        display="flex"
        alignItems={'center'}
        fontSize="xl"
        lineHeight="normal"
        fontWeight="semibold"
        href={link}>
        {subtitle}
      </Link>
      <Text fontSize="lg" mt={2} color={textColor}>
        {content}
      </Text>
      {children}
    </>
  );
};

export default Section;
