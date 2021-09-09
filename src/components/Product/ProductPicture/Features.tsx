import { Flex, Image } from '@chakra-ui/react';
import React from 'react';

interface ProductFeaturesProps{
  features: string[];
}

const ProductFeatures = ({features}:ProductFeaturesProps) => {
  return (
    <Flex align="center" justifyContent="space-between">
      {features.map(feature=><Image src={`images/${feature}.svg`} alt={feature}/>)}
    </Flex>
  );
}

export default ProductFeatures;
