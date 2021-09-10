import {Flex} from "@chakra-ui/react";
import Header from "../components/Header";
import Product from "../components/Product";
import Sidebar from "../components/Sidebar";

let sofa = {
  name:"The Sofa",
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac dui interdum, tincidunt velit sit amet.",
  options:[{
    value:"sofa-amber",
    label:"Amber"
  },{
    value:"sofa-red",
    label:"Red"
  },{
    value:"sofa-charcoal",
    label:"Charcoal"
  }],
  optionDescription: "Choose your choice from fabrics to leather.",
  optionType:"Fabric",
  discount:200,
  price:1450,
  features:["assembly","free-shipping","made-in-america","materials","trial","warranty"]
}

export default function Home() {
  return (
    <Flex direction="column" h="100vh">
      <Header/>
      <Sidebar/>
      <Product product={sofa}/>
    </Flex>
  )
}


