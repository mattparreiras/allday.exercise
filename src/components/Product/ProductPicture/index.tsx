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
      <Image mb="4"src={`images/${selectedProduct}.jpg`} alt={selectedProduct}/>
      <ProductFeatures features={features}/>
    </Box>
  );
}

export default ProcuctPicture;