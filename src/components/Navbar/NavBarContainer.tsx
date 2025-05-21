"use client";
import { Flex } from "@chakra-ui/react";
const NavBarContainer = ({ children, ...props }: { children: React.ReactNode }) => {
  return (
    <Flex
      position="fixed"
      zIndex={"sticky"}
 borderBottomWidth="1px"

      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"

      px={{base:4,sm:4,md:16}}
      py={2}
      bg='bg'
      {...props}>
      {children}
    </Flex>
  );
};

export default NavBarContainer;
