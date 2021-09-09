import {Flex, Text, useBreakpointValue} from '@chakra-ui/react'
import LeftNav from './LeftNav'

import Logo from './Logo'
import RightNav from './RightNav'

export default function Header() {
  const isWideVersion = useBreakpointValue({
    base:false,
    lg:true,
  })

  return (
    <Flex as="header" w="100%" maxWidth={1480} h="120" mx="auto" mt="4" px="6" align="center" justifyContent='space-between'>
      <LeftNav/>
      <Logo/>
      <RightNav/>
    </Flex>
  )
}
