import { FC } from 'react';
import { Center, Image } from '@chakra-ui/react';
interface Props {
  image: string;
}
const NavbarLogo: FC<Props> = ({ image }) => {
  return (
    <Center cursor="pointer">
      <a href={'#home'}>
        <Image src={image} alt="mateo perez" width={75} height={65} />
      </a>
    </Center>
  );
};

export default NavbarLogo;
