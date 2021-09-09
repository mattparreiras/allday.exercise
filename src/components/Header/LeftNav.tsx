import { Flex } from '@chakra-ui/react';
import React from 'react';
import NavSection from '../NavSection';
import NavItem from '../NavSection/NavItem';

const LeftNav: React.FC = () => {
  return(
    <Flex as="nav" align="center">
      <NavSection>
        <NavItem href='/'>The Sofa</NavItem>
        <NavItem href='#'>Review</NavItem>
        <NavItem href='#'>About us</NavItem>
      </NavSection>
    </Flex>
  );
}

export default LeftNav;