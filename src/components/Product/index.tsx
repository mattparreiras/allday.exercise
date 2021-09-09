import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import ProductDescription from './ProductDescription';
import ProductOptions from './ProductOptions';
import ProductPicture from './ProductPicture'

const Product: React.FC = () => {
  return (
    <Grid
      w="100%" maxWidth={1480} mx="auto" mt="6" px="6"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(3, 1fr)"
      columnGap="9"
      rowGap="10"
    >
      <GridItem rowSpan={2} colSpan={2}><ProductPicture/></GridItem>
      <GridItem colSpan={1}><ProductDescription/></GridItem>
      <GridItem colSpan={1}><ProductOptions/></GridItem>
    </Grid>
  );
}

export default Product;