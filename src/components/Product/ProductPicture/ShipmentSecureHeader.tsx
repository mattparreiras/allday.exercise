import { Image } from '@chakra-ui/image';
import { Flex, Text } from '@chakra-ui/layout';
import React from 'react';

const ShimentSecureHeader: React.FC = () => {
  return (
    <Flex align="center" justifyContent="space-between" my='2'>
      <Flex as="span" align="center" >
        <Image src="images/padlock.svg" alt='padlock'/>
        <Text ml="2" fontSize="md">Secure Checkout</Text>
      </Flex>

      <Text fontSize="md" textAlign="right">Ships in 5-7 Business Days</Text>
    </Flex>
  );
}

export default ShimentSecureHeader;