import React from 'react';
import { Box, Text, Flex, Image } from '@chakra-ui/react';

interface ProductOptionType{
  value:string;
  label:string;
}
interface ProductOptionProps{
  option:ProductOptionType;
  isActive:boolean;
  onClick:(string)=>void
}

const ProductOption= ({option, isActive, onClick}:ProductOptionProps) => {

  const handleChange = (value)=>{
    onClick ? onClick(value):''
  }
  
  return (
    <Box onClick={()=>handleChange(option.value)} borderRadius={6} borderWidth="2px" bg={isActive?'blue.400':'gray.300'} 
         borderColor={isActive?'blue.400':'transparent'} 
         overflow="hidden" mr='5' cursor="pointer" _hover={{borderColor:'blue.400'}}>
      <Image src={`images/${option.value}.jpg`} alt={option.value}/>
      <Text align="center" my="10px" color={isActive?'white':'gray.700'}>{option.label}</Text>
    </Box>
  );
}

export default ProductOption;