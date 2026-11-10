import { Text } from "@chakra-ui/react";

type Props = {
  children?: React.ReactNode;
  to?: string;
  onClick?: () => void;
};
const MenuItem = ({ onClick, children, to = "/" }: Props) => {
  return (
    <a onClick={onClick} href={to}>
      <Text
        cursor="pointer"
        display="block"
        fontSize="14px"
        _hover={{ color: "var(--chakra-colors-fg)" }}
        color="var(--chakra-colors-fg-muted)"
      >
        {children}
      </Text>
    </a>
  );
};
export default MenuItem;
