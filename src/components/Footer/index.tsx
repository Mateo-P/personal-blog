import React from "react";
import {
  Center,
  Link,
  VStack,
} from "@chakra-ui/react";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

type SocialLink = {
  name: string;
  href: string;
  color: string;
};

type Props = {
  socialLinks: SocialLink[];
  footerText: string;
};
 const icons = {
  linkedin: <FaLinkedinIn size={25} />,
  github: <FaGithub size={25} />,
  facebook: <FaFacebook size={25} />,
  twitter: <FaTwitter size={25} />,
  instagram: <FaInstagram size={25} />,
 }
function Footer({ socialLinks, footerText }: Props) {
  const year = new Date(Date.now() - 1970).getUTCFullYear();

  return (
    <VStack id="contact" p={4}>
      <Center gap={5} p={5}>
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            opacity={0.5}
            position="relative"
            target="_blank"
            rel="noopener noreferrer"
            transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            _after={{
              content: '""',
              position: 'absolute',
              width: '100%',
              height: '2px',
              bottom: '-4px',
              left: '0',
              backgroundColor: link.color,
              transform: 'scaleX(0)',
              transformOrigin: 'bottom right',
              transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            _hover={{
              opacity: 1,
              transform: 'translateY(-3px) scale(1.1)',
              color: link.color,
              textDecoration: 'none',
              _after: {
                transform: 'scaleX(1)',
                transformOrigin: 'bottom left'
              }
            }}
          >
            {icons[link.name as keyof typeof icons]}
          </Link>
        ))}
      </Center>

      <Center opacity={0.5}>© {year} {footerText}</Center>
    </VStack>
  );
}

export default Footer;
