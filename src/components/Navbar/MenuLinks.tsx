"use client";
import { Box, Stack } from "@chakra-ui/react";
import MenuItem from "./MenuItem";
import { useColorMode } from "../ui/color-mode";
import { IoMoon, IoSunny } from "react-icons/io5";
type Props = {
  links: any[];
  toggle: () => void;
  isOpen?: boolean;
};

const MenuLinks = ({ links, toggle, isOpen }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        gap={{base: 2,sm: 4, md: 8}}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={{base: "column",sm: "column", md: "row" }}
        pb={{base: 2,sm: 2, md: 0}}
      >
        {links.map(({ label, to }) => (
          <MenuItem key={label} onClick={toggle} to={to}>
            {label}
          </MenuItem>
        ))}
        {colorMode === "light" ? (
          <IoMoon cursor="pointer" width={5} height={5} onClick={toggleColorMode} />
        ) : (
          <IoSunny cursor="pointer" width={5} height={5} onClick={toggleColorMode} />
        )}
      </Stack>
    </Box>
  );
};

export default MenuLinks;
