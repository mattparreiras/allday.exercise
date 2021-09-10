import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from "@chakra-ui/react";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import SidebarNav from "./SIdebarNav";


export default function Sidebar() {
  const isDrawerSideBar = useBreakpointValue({
    base:true,
    lg:false
  })
  const {isOpen, onClose} = useSidebarDrawer()
 
  if (isDrawerSideBar){
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.200" p="4">
            <DrawerCloseButton mt="6"></DrawerCloseButton>
            <DrawerHeader fontFamily="Bungee">Menu</DrawerHeader>
            <DrawerBody>
              <SidebarNav/>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }
  return (<div/>)
}