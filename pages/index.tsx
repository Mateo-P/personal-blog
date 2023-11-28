
import Layout from '../src/Layouts';

import { About, Interests, Experience, Contact, Landing } from '../src/components';
import { getData } from './api/data';

export default function Home({ data }) {
  const { navbar, body, footer } = data;

  return (
    <Layout navbar={navbar} footer={footer}>
      <Landing />
      <About />
      <Interests />
      <Experience />
      <Contact />
    </Layout>
  );
}

export async function getServerSideProps() {
  let data;
  try {
    data = await getData();
  } catch (e) {
    /**
     * If something goes wrong, we return a 404 page
     */
    return {
      notFound: true,
    };
  }

  if (!data) {
    /**
     * If we don't get a `photo` back, we return a 404 page
     */
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
}