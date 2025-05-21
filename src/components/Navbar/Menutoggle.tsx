"use client";
import React from "react";
import { Box } from "@chakra-ui/react";
import { IoClose, IoMenu } from "react-icons/io5";

const MenuToggle = ({ toggle, isOpen }: { toggle: () => void; isOpen: boolean }) => {
  return (
    <Box display={{ base: 'block',sm: 'block',md: 'none' }} onClick={toggle}>
      {isOpen ? (
     <IoClose size={24} />
      ) : (
       <IoMenu size={24} />
      )}
    </Box>
  );
};
export default MenuToggle;
