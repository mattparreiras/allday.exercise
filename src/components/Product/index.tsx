import { Grid, GridItem } from '@chakra-ui/react';
import React, {useState} from 'react';
import ProductDescription from './ProductDescription';
import ProductOptions from './ProductOptions';
import ProductPicture from './ProductPicture'


interface ProductOptionsType{
  value:string;
  label:string;
}
interface ProductType{
  name:string;
  description:string;
  options:ProductOptionsType[];
  optionDescription: string;
  optionType:string;
  features:string[];
  discount:number;
  price:number;
}
interface ProductProps{
  product:ProductType
}


const Product = ({product}:ProductProps) => {
  const [selectedProduct, setSelectedProduct ] = useState(product.options[0].value)
  return (
    <Grid
      w="100%" maxWidth={1480} mx="auto" mt="6" px="6"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(3, 1fr)"
      columnGap="9"
      rowGap="10"
    >
      <GridItem rowSpan={2} colSpan={2}><ProductPicture features={product.features} selectedProduct={selectedProduct}/></GridItem>
      <GridItem colSpan={1}><ProductDescription name={product.name} description={product.description} price={product.price} discount={product.discount}/></GridItem>
      <GridItem colSpan={1}>
        <ProductOptions 
          options={product.options} optionDescription={product.optionDescription}
          optionType={product.optionType} 
          selectedProduct={selectedProduct} 
          setSelectedProduct={setSelectedProduct}/>
      </GridItem>
    </Grid>
  );
}

export default Product;