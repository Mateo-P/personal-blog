import { FC } from 'react';
import Layout from '../src/Layouts/index';
import Interests from '../src/components/Interest/index';
const interests: FC<{}> = () => {
  return (
    <Layout>
      <Interests />
    </Layout>
  );
};

export default interests;
