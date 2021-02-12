import dynamic from 'next/dynamic';
import Layout from '../src/Layouts/index';
import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
const Landing = dynamic(() => import('../src/components/Landing/index'), {
  ssr: false
});
// 2. Update the breakpoints as key-value pairs
const breakpoints = createBreakpoints({
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px'
});
// 3. Extend the theme
const theme = extendTheme({ breakpoints });
export default function Home() {
  return (
    <Layout>
      <Landing />
    </Layout>
  );
}
