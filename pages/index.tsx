import Layout from '../src/Layouts';

import { About, Interests, Experience, Contact, Landing } from '../src/components';

export default function Home() {
  return (
    <Layout>
      <Landing />
      <About />
      <Experience />
      <Contact />
    </Layout>
  );
}
