import dynamic from 'next/dynamic';
import Layout from '../src/Layouts/index';
import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
const Landing = dynamic(() => import('../src/components/Landing/index'), {
  ssr: false
});

export default function Home() {
  return (
    <Layout>
      <Landing />
    </Layout>
  );
}
