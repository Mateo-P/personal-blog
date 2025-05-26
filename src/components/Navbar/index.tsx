"use client"
import { useState } from "react";
import { Spacer } from "@chakra-ui/react";
import NavbarLogo from "./NavbarLogo";
import MenuToggle from "./Menutoggle";
import NavBarContainer from "./NavBarContainer";
import MenuLinks from "./MenuLinks";
export type NavbarProps = {
  logo: string;
  links: { label: string; to: string }[];
}
const Navbar = ({ logo, links }: NavbarProps) => {
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
