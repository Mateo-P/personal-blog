import { Center, Image } from '@chakra-ui/react';
interface Props {
  logo: { src: string; alt: string };
}
const NavbarLogo = ({ logo }: Props) => {
  const { src, alt } = logo;
  return (
    <Center cursor="pointer">
      <a href={'#home'}>
        <Image src={src} alt={alt} width={75} height={65} />
      </a>
    </Center>
  );
};

export default NavbarLogo;
