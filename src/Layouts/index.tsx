import { Flex, Box, Spacer } from '@chakra-ui/react';
import Navbar from '../components/Navbar/index';
import Footer from '../components/Footer/index';
interface Props {
  navbar: any;
  children: React.ReactNode;
  footer: any;
}
const Layout = ({navbar, children, footer }: Props) => {
  return (
    <Flex
      margin={'auto'}
      maxW={{ sm: '90%', md: '80%', '2xl': 1280 }}
      justifyContent="space-between"
      alignItems="center"
      flexDirection="column"
      minHeight="100%"
      gap={4}>
      <Navbar navbar={navbar} />

      <Box>{children}</Box>
      <Spacer />

      <Footer footer={footer} />
    </Flex>
  );
};

export default Layout;
