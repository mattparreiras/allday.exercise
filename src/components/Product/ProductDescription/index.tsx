import { Box, Heading, Text, Button, Link, Flex } from '@chakra-ui/react';
import React from 'react';

const ProductDescription = ({title='The Sofa', description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac dui interdum, tincidunt velit sit amet.' }) => {
  return (
    <Box>
      <Heading as='h1' mb="2" color="blue.600">{title}</Heading>
      <Text mb="4">{description}</Text>
      <Button color="white" bg="blue.400"  colorScheme="blue" mb="3" fontFamily="Bungee" isFullWidth={true}> Add to Chart</Button>
      <Flex align="center" justifyContent="center">
        <Link href="#" fontFamily="Bungee" color="gray.500" borderBottom="3px solid" borderColor="blue.400"  _hover={{textDecoration:"none"}}> SAVE DESIGN FOR LATER</Link>
      </Flex>
    </Box>
  );
}

export default ProductDescription;