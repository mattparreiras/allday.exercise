import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import ProductFeatures from './Features';
import ShipmentSecureHeader from './ShipmentSecureHeader';

interface ProcuctPictureProps{
  features:string[];
  selectedProduct:string;
}
const ProcuctPicture = ({features, selectedProduct}:ProcuctPictureProps) => {
  return(
    <Box>
      <ShipmentSecureHeader/>
      <Box mb="4" bg="gray.50" ><Image  mixBlendMode='multiply' src={`images/${selectedProduct}.jpg`} alt={selectedProduct}/></Box>
      <ProductFeatures features={features}/>
    </Box>
  );
}

export default ProcuctPicture;