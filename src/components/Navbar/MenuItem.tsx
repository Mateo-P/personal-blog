import { Text, useColorMode } from '@chakra-ui/react';

type Props = {
  children?: any;
  to?: string;
};
const MenuItem = ({ children, to = '/' }: Props) => {
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
