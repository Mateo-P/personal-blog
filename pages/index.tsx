import Layout from '../src/Layouts';

import { About, Interests, Experience, Contact, Landing } from '../src/components';

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
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/data`); // Update URL as per your setup
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
