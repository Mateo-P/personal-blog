import React from 'react';
import { Box, Link, useColorMode } from '@chakra-ui/react';
import Image from 'next/image';
import { ExternalLinkIcon } from '@chakra-ui/icons';
type Props = {
  namesite: string;
  site: string;
  children: string;
  image: string;
};
//
export default function Project({ site, namesite, children, image }: Props) {
  const { colorMode } = useColorMode();
  const textColor = colorMode === 'light' ? 'blue.600' : 'blue.200';

  return (
    <Box>
      <Box position={'relative'} h={200} overflow="hidden">
        <Image src={image} fill alt={image} />
      </Box>
      <Link
        mt={1}
        color={textColor}
        display="block"
        fontSize="md"
        lineHeight="normal"
        fontWeight="semibold"
        href={site}
        isExternal>
        {namesite}
        <ExternalLinkIcon mx="2px" />
      </Link>
      {children}
    </Box>
  );
}
