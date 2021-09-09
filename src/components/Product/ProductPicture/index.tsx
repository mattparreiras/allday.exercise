import { Box } from '@chakra-ui/layout';
import React from 'react';
import ProductFeatures from './Features';
import ShipmentSecureHeader from './ShipmentSecureHeader';

const ProcuctPicture: React.FC = () => {
  return(
    <Box>
      <ShipmentSecureHeader/>
      <ProductFeatures features={["assembly","free-shipping","made-in-america","materials","trial","warranty"]}/>
    </Box>
  );
}

export default ProcuctPicture;