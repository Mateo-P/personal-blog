import { FC, useState } from 'react';
import { Flex, Spacer } from '@chakra-ui/react';
import NavbarLogo from './NavbarLogo';
import MenuToggle from './Menutoggle';
import NavBarContainer from './NavBarContainer';
import MenuLinks from './MenuLinks';
interface Props {}
const Navbar: FC<Props> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <NavBarContainer {...props}>
      <NavbarLogo image={'/logo_me.png'} />
      <Spacer />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

export default Navbar;
