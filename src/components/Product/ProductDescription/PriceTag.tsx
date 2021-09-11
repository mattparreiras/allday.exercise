import React from 'react';
import { Flex, Text, Button, Link} from '@chakra-ui/react';

interface PriceTagProps{
  discount:number;
  price:number;
}

const PriceTag = ({price, discount}:PriceTagProps) => {
  return (
    <Flex justifyContent="center" mb="9">
      <Flex direction="column" align="center" flex="1" borderRight="2px solid white">
        <Text fontSize="20">Pay Now</Text>
        <Text fontFamily="Helvetica" fontSize="40" lineHeight='40px' color="red.500" fontWeight='700'mb="1" >${price - discount}</Text>
        <Text fontSize="20" textDecoration="line-through">${price}</Text>
        <Text fontSize="14">${discount} OFF with code</Text>
      </Flex>
      <Flex direction="column" align="center" flex="1">
        <Text fontSize="20">Pay as low as</Text>
        <Text fontFamily="Helvetica" fontSize="40" lineHeight='40px' fontWeight='700' color="red.500">$25<Text as="span"fontSize="25">/month</Text></Text>
        <Text fontSize="20">with Klarna</Text>
        <Link href="#"fontSize="14" textDecoration="underline">Learn More</Link>
      </Flex>
    </Flex>
  );
}

export default PriceTag;