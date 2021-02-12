import { FC } from 'react';
import { Stack, Button, useColorMode } from '@chakra-ui/react';

import Link from 'next/link';
interface Props {
  someProp: String;
}
const NavbarActions: FC<Props> = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Stack direction="row" spacing={4} align="center">
      <Link href="/About">About</Link>
      <Link href="/Interests">Interests</Link>
      <Link href="/Experience">Experience</Link>
      <Link href="/Contact">Contact</Link>

      <Button colorScheme="teal" variant="solid" onClick={toggleColorMode}>
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </Button>
    </Stack>
  );
};

export default NavbarActions;
