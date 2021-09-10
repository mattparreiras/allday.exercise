import {Flex, IconButton, Icon, useBreakpointValue} from '@chakra-ui/react'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { RiMenuLine } from 'react-icons/ri';

import LeftNav from './LeftNav'
import Logo from './Logo'
import RightNav from './RightNav'

export default function Header() {
  const isWideVersion = useBreakpointValue({
    base:false,
    lg:true,
  })
  const {onOpen} = useSidebarDrawer()

  return (
    <Flex as="header" w="100%" maxWidth={1480} h="120" mx="auto" mt="4" px="6" align="center" justifyContent={isWideVersion?'space-between':'flex-start'}>
      {!isWideVersion && (
        <IconButton aria-label="Open Navigation" fontSize="24" variant="unstyled" onClick={onOpen} mr="2" icon={<Icon as ={RiMenuLine}/>}>

        </IconButton>
      )}
      {isWideVersion && <LeftNav/>}
      <Logo width={isWideVersion?320:200}/>
      {isWideVersion && <RightNav/>}
    </Flex>
  )
}
