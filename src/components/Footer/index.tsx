import React from 'react';
import { Center, Box, Divider } from '@chakra-ui/react';

type Props ={
  footer:any;
}

function Footer({footer}:Props) {
  return (
    <Box>
      <Divider />
      <Center p={5}>made with nextjs & chakra hosted in vercel.</Center>
    </Box>
  );
}

export default Footer;
