import { FC } from 'react';
import { Flex, Box, Spacer, Center } from '@chakra-ui/react';
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
        flexDirection="column"
        minHeight="100%"
        spacing={4}
        paddingLeft={[4, 16, 60]}
        paddingRight={[4, 16, 32]}>
        <Navbar />

        <Center mb={'16px'}>{children}</Center>
        <Spacer />
        <Box>
          <Footer />
        </Box>
      </Flex>
    </>
  );
};

export default Layout;
