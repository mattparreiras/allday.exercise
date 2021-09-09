import { Flex } from '@chakra-ui/react';
import React, {ReactNode} from 'react';

interface NavSectionProps {
  children:ReactNode
}

const NavSection: React.FC = ({children}:NavSectionProps) => {
  return(
    <Flex as="ul" mx="4" align="center" justifyContent='space-between'>
      {children}
    </Flex>
  );
}

export default NavSection;