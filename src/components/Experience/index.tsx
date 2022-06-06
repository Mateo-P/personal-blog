import { FC } from 'react';
import { Wrap, WrapItem } from '@chakra-ui/react';
import Project from './Project';

const Experience: FC<{}> = () => {
  return (
    <Wrap id="experience" h={[]} mt="1rem" mb="1rem" spacing={[8, 8, 12, 16, 24]} justify="center">
      <WrapItem maxW="sm" p={8} borderWidth="1px" borderRadius="lg">
        <Project
          site="https://compleat.com.co/"
          namesite="compleat.com.co"
          image="/compleatLogo.jpeg">
          This personal project aims to improve the productivity and efficiency of restaurants in
          their daily operation. simplifying multiple processes starting from the order to the
          accounting and billing passing by the kitchen part and more.
        </Project>
      </WrapItem>
      <WrapItem maxW="sm" p={8} borderWidth="1px" borderRadius="lg" colSpan={1}>
        <Project site="https://amcon.com.co/" namesite="Amcom en Linea" image="/amconlogo.png">
          Amcon en linea aims to improve the control over the progress of projects, allowing the
          engineers to report the current state of every section of the project. in short, it is
          like GitHub but for its civil engineers and architects
        </Project>
      </WrapItem>
      <WrapItem maxW="sm" p={8} borderWidth="1px" borderRadius="lg" colSpan={1}>
        <Project site="https://uniandes.edu.co/" namesite="Monitoring" image="/Andeslogo.png">
          Since the beginning of 2019, I have been a teaching assistant for 3 courses. Starting by
          Algorithms & Object-Oriented Programming I (APO 1) followed by Algorithms &
          Object-Oriented Programming II (APO 2). Finally management control systems (SISCONGER).
        </Project>
      </WrapItem>
    </Wrap>
  );
};

export default Experience;
