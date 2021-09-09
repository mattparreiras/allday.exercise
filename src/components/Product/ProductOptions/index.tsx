import { Box, Text, Flex } from '@chakra-ui/react';
import React from 'react';
import ProductOption from'./ProductOption'

interface ProductOptionsType{
  value:string;
  label:string;
}

interface ProductOptionsProps{
  options:ProductOptionsType[];
  optionDescription: string;
  optionType:string;
  selectedProduct:string;
  setSelectedProduct:(string)=>void;
}

const ProductOptions = ({options, optionDescription, optionType, selectedProduct, setSelectedProduct}:ProductOptionsProps) => {
  
  
  return (
    <Box>
      <Text fontFamily="Bungee" color="blue.600">1. Choose a {optionType}</Text>
      <Text mb="8">{optionDescription}</Text>
      <Text mb="3" color="gray.600" fontWeight="700">{optionType} Choices</Text>
      <Flex>
        {options.map(option=><ProductOption onClick={(value)=>setSelectedProduct(value)} key={option.value} option={option} isActive={selectedProduct==option.value}/>)}
      </Flex>
    </Box>
  );
}

export default ProductOptions;