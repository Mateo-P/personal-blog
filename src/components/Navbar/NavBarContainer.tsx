import React from 'react';
import { Flex, useColorMode } from '@chakra-ui/react';
const NavBarContainer = ({ children, ...props }) => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      position="fixed"
      zIndex={'sticky'}
      boxShadow={`0 2px 24px rgb(0 0 ${colorMode !== 'light' ? '0/25%' : '0/7%'})`}
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={4}
      bg={[colorMode === 'light' ? 'primary.100' : 'dark_primary.100']}
  >
      {children}
    </Flex>
  );
};

export default NavBarContainer;
