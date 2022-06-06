import { Text, useColorMode } from '@chakra-ui/react';

const MenuItem = ({ children, to = '/' }) => {
  const { colorMode } = useColorMode();
  return (
    <a href={`#${to}`}>
      <Text cursor="pointer" display="block" color={colorMode === 'light' ? 'black' : 'white'}>
        {children}
      </Text>
    </a>
  );
};
export default MenuItem;
