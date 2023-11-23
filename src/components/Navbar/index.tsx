import { FC, useState } from 'react';
import { Spacer } from '@chakra-ui/react';
import NavbarLogo from './NavbarLogo';
import MenuToggle from './Menutoggle';
import NavBarContainer from './NavBarContainer';
import MenuLinks from './MenuLinks';
interface Props {
  navbar:any;
}
const Navbar: FC<Props> = ({navbar}) => {
  const {logo,links}= navbar
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <NavBarContainer>
      <NavbarLogo logo={logo} />
      <Spacer />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks links={links}  toggle={toggle} isOpen={isOpen}  />
    </NavBarContainer>
  );
};

export default Navbar;
