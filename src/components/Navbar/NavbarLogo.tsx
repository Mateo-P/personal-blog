import { Center, Heading } from '@chakra-ui/react';
interface Props {
  logo: string;
}
const NavbarLogo = ({ logo }: Props) => {
  return (
    <Center cursor="pointer">
      <a href={'#home'}>
        <Heading mt={-3} textAlign={"center"} size="4xl">
          {logo}
        </Heading>
      </a>
    </Center>
  );
};

export default NavbarLogo;
