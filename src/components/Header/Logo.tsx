import { Image } from "@chakra-ui/react";

interface LogoProps{
  width:number
}
export default function Logo ({width= 320}) {
  return (
    <Image src="images/logo.svg" alt="Logo" width={width}/>
  )
}