import { FC } from 'react';
import { Flex, Box, Spacer } from '@chakra-ui/react';
import Navbar from '../components/Navbar/index';
import Footer from '../components/Footer/index';
import Head from 'next/head';
interface Props {
  children: React.ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
  return (
    <Flex
      margin={'auto'}
      maxW={1280}
      justifyContent="space-between"
      alignItems="center"
      flexDirection="column"
      minHeight="100%"
      gap={4}
      pl={[4, 16, 32, 32]}
      pr={[4, 16, 32, 32]}>
      <Navbar />

      <Box>{children}</Box>
      <Spacer />

      <Footer />
    </Flex>
  );
};

export default Layout;
