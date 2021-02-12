import { FC } from 'react';
import Layout from '../src/Layouts/index';
import About from '../src/components/About/index';
interface Props {}
const about: FC<Props> = () => {
  return (
    <Layout>
      <About />
    </Layout>
  );
};

export default about;
