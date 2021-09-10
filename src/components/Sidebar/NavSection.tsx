import { Box, Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface NavSectionProps {
  children:ReactNode
}
export default function NavSection ({children}: NavSectionProps){
  return(
    <Box>
      <Stack spacing="4" mt="4" align="stretch">
        {children}
      </Stack>
    </Box>
  )
}