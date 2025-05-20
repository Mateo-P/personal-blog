"use client"
import { useState } from "react";
import { Spacer } from "@chakra-ui/react";
import NavbarLogo from "./NavbarLogo";
import MenuToggle from "./Menutoggle";
import NavBarContainer from "./NavBarContainer";
import MenuLinks from "./MenuLinks";
interface Props {
  logo: string;
  links: any;
}
const Navbar = ({ logo, links }: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <NavBarContainer>
      <NavbarLogo logo={logo} />
      <Spacer />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks links={links} toggle={toggle} isOpen={isOpen} />
    </NavBarContainer>
  );
};

export default Navbar;
