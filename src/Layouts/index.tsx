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
    <>
      <Head>
        <title>Mateo Perez</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        flexDirection="column"
        minHeight="100%"
        spacing={4}
        pl={[4, 16, 32, 48]}
        pr={[4, 16, 32, 48]}>
        <Navbar />

        <Box>{children}</Box>
        <Spacer />
        <Box>
          <Footer />
        </Box>
      </Flex>
    </>
  );
};

export default Layout;
