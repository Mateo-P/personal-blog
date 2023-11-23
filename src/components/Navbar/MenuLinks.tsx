import { Box, Button, Stack, useColorMode } from '@chakra-ui/react';
import MenuItem from './MenuItem';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
type Props = {
  toggle: () => void;
  isOpen?: boolean;
};

const MenuLinks = ({ toggle, isOpen }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}>
      <Stack
        spacing={8}
        align="center"
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={{ sm: 'column', md: 'row' }}
        pt={[4, 4, 0, 0]}>
        <MenuItem onClick={toggle} to="about">
          About
        </MenuItem>
        <MenuItem onClick={toggle} to="interests">
          Interests
        </MenuItem>
        <MenuItem onClick={toggle} to="experience">
          Experience
        </MenuItem>
        <MenuItem onClick={toggle} to="contact">
          Contact
        </MenuItem>

        <Button colorScheme="blue" variant="solid" onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Stack>
    </Box>
  );
};

export default MenuLinks;
