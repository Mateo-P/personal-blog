import dynamic from 'next/dynamic';
import Layout from '../src/Layouts/';

import { About, Interests, Experience, Contact } from '../src/components';
const Landing = dynamic(() => import('../src/components/Landing/index'), {
  ssr: false
});

export default function Home() {
  return (
    <Layout>
      <Landing />
      <About id="about" />
      <Interests id="interests" />
      <Experience id="experience" />
      <Contact id="contact" />
    </Layout>
  );
}
