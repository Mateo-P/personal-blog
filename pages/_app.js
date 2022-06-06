import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import '../styles/main.css';

// 2. Update the breakpoints as key-value pairs
const breakpoints = createBreakpoints({
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px'
});

// 3. Extend the theme
const theme = extendTheme({
  breakpoints,
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
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
