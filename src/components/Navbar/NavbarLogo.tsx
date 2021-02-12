import { FC } from 'react';
import { Box, Center, Image } from '@chakra-ui/react';
interface Props {
  image: string;
}
const NavbarLogo: FC<Props> = ({ image }) => {
  return (
    <Center>
      <Image src={image} alt="mateo perez" width={75} height={65} />
    </Center>
  );
};

export default NavbarLogo;
