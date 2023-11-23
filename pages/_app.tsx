import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import Head from 'next/head';
import '../styles/main.css';

const theme = extendTheme({
  breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    "2xl": '1536px'
  },
  colors: {
    primary: {
      100: '#fff'
    },
    dark_primary: {
      100: '#1A202C'
    }
  }
});
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mateo Perez</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
