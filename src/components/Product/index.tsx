import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';


const Product: React.FC = () => {
  return (
    <Grid
      w="100%" maxWidth={1480} mx="auto" mt="6" px="6"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(3, 1fr)"
      columnGap="9"
      rowGap="10"
    >
      <GridItem rowSpan={2} colSpan={2} bg="tomato" />
      <GridItem colSpan={1} h={50} bg="tomato" />
      <GridItem colSpan={1} h={50} bg="tomato" />
    </Grid>
  );
}

export default Product;