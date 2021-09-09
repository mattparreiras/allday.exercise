import {Flex} from "@chakra-ui/react";
import Header from "../components/Header";
import Product from "../components/Product";

export default function Home() {
  return (
    <Flex direction="column" h="100vh">
      <Header/>
      <Product/>
    </Flex>
  )
}


