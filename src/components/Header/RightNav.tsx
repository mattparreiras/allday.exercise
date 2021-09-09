import { Flex } from '@chakra-ui/react';
import React from 'react';
import NavSection from '../NavSection';
import NavItem from '../NavSection/NavItem';


const RightNav: React.FC = () => {
  return(
    <Flex as="nav" align="center">
      <NavSection>
        <NavItem href='#'>Showroom</NavItem>
        <NavItem href='#'>Swatches</NavItem>
      </NavSection>
    </Flex>
  );
}

export default RightNav;