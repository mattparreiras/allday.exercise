import { Grid, GridItem , Flex, Box} from '@chakra-ui/react';
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
    <Box
      display={{ lg: "flex" }}
      w="100%" maxWidth={1480} mx="auto" mt="6" px="6"
    >
      <Box flex={{ lg: 2 }} mr={{ lg: "9" }} mb="10"><ProductPicture features={product.features} selectedProduct={selectedProduct}/></Box>
     
      <Flex direction="column" flex={{ lg: 1 }} >
        <Box mb="10"><ProductDescription name={product.name} description={product.description} price={product.price} discount={product.discount}/></Box>
        <Box mb="10">
          <ProductOptions 
            options={product.options} optionDescription={product.optionDescription}
            optionType={product.optionType} 
            selectedProduct={selectedProduct} 
            setSelectedProduct={setSelectedProduct}/>
        </Box>
      </Flex>
    </Box>
  );
}

export default Product;