import { Box, Button, Stack, useColorMode } from '@chakra-ui/react';
import MenuItem from './MenuItem';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
type Props = {
  links: any[];
  toggle: () => void;
  isOpen?: boolean;
};

const MenuLinks = ({ links, toggle, isOpen }: Props) => {
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
        {links.map(({ label, to }) => (
          <MenuItem key={label} onClick={toggle} to={to}>
            {label}
          </MenuItem>
        ))}

        <Button colorScheme="blue" variant="solid" onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Stack>
    </Box>
  );
};

export default MenuLinks;
