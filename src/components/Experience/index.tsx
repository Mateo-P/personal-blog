import { Box, Divider, WrapItem } from '@chakra-ui/react';
import Project from './Project';
import Section from '../About/Section';

const Experience = () => {
  return (
    <Box   id="experience" p={2} borderWidth="1px" borderRadius="lg">
      <Section
        title="Experience 📚"
        subtitle="teacher assistant"
        link="https://uniandes.edu.co/"
        content="[2019-2020] Since the beginning of 2019, I have been a teaching assistant for 3 courses. Starting by
          Algorithms & Object-Oriented Programming I (APO 1) followed by Algorithms &
          Object-Oriented Programming II (APO 2). Finally management control systems (SISCONGER)."></Section>
      <Divider marginY={2} />
      <Section
        subtitle="amcon"
        link="https://amcon.com.co/"
        content="[2020-2021] Amcon en linea aims to improve the control over the progress of projects, allowing the
          engineers to report the current state of every section of the project. in short, it is
          like GitHub but for its civil engineers and architects"></Section>
      <Divider marginY={2} />
      <Section
        subtitle="homil"
        link="https://www.hospitalmilitar.gov.co/"
        content="[2021-2022] This project aimed the improvement the experience of the former military with the process of replacing and acquiring prostheses."></Section>
      <Divider marginY={2} />
      <Section
        subtitle="compleat"
        link="https://compleat.com.co/"
        content="[2021-2023] This personal project aims to improve the productivity and efficiency of restaurants in
          their daily operation. simplifying multiple processes starting from the order to the
          accounting and billing passing by the kitchen part and more."></Section>
      <Divider marginY={2} />
      <Section
        subtitle="auxo"
        link="https://www.auxo.co/"
        content="[2021-2023] This personal project aims to improve the productivity and efficiency of restaurants in
          their daily operation. simplifying multiple processes starting from the order to the
          accounting and billing passing by the kitchen part and more."></Section>
      <Divider marginY={2} />
      <Section
        subtitle="hellobuild"
        link="https://www.hellobuild.co/"
        content="[2021-2023] This personal project aims to improve the productivity and efficiency of restaurants in
          their daily operation. simplifying multiple processes starting from the order to the
          accounting and billing passing by the kitchen part and more."></Section>
      <Divider marginY={2} />

      <Section
        subtitle="praxent"
        link="https://praxent.com/"
        content="[2021-2023] This personal project aims to improve the productivity and efficiency of restaurants in
          their daily operation. simplifying multiple processes starting from the order to the
          accounting and billing passing by the kitchen part and more."></Section>
    </Box>
  );
};

export default Experience;
