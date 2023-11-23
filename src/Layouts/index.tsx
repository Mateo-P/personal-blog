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
      maxW={{sm:'90%',md:'80%','2xl':1280}}
      justifyContent="space-between"
      alignItems="center"
      flexDirection="column"
      minHeight="100%"
      gap={4}

    >
      <Navbar />

      <Box>{children}</Box>
      <Spacer />

      <Footer />
    </Flex>
  );
};

export default Layout;
