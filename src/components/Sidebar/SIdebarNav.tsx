import { Box, Stack } from "@chakra-ui/react";
import NavItem from "./NavItem";
import NavSection from "./NavSection";

export default function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection>
        <NavItem href='/'>The Sofa</NavItem>
        <NavItem href='#'>Review</NavItem>
        <NavItem href='#'>About us</NavItem>
      </NavSection>
      <NavSection>
        <NavItem href='#'>Showroom</NavItem>
        <NavItem href='#'>Swatches</NavItem>
      </NavSection>
    </Stack>
  )
}