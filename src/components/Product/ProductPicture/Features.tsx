import { SimpleGrid, Image, Box } from '@chakra-ui/react';
import React from 'react';

interface ProductFeaturesProps{
  features: string[];
}

const ProductFeatures = ({features}:ProductFeaturesProps) => {
  return (
    <SimpleGrid flex="1" gap="4" minChildWidth={80} align="flex-start">
      {features.map(feature=> <Box key={feature}> <Image  maxW='100%' src={`images/${feature}.svg`} alt={feature}/> </Box>)}
    </SimpleGrid>
  );
}

export default ProductFeatures;
