import { Icon, Link as ChakraLink, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ActiveLink } from "../ActiveLink";

interface NavItemProps extends ChakraLinkProps {
  children:string;
  href:string;
} 
export default function NavItem ({children, href,  ...rest }:NavItemProps){
  return(
    <ActiveLink href={href} passHref>
      <ChakraLink  mx="3"  display="flex" align="center" borderBottom="3px solid" borderBottomRadius={2} {...rest}>
        <Text fontSize="md" mb={0} fontFamily="Bungee" color="gray.600">{children}</Text>
      </ChakraLink>
    </ActiveLink>      
  )
}