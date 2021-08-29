import Head from 'next/head'
import { Flex, SimpleGrid} from "@chakra-ui/react";
import { SideBar } from "../components/SideBar";
import NavItem from '../components/NavItem';


export default function Home() {
  return (
    
    <Flex direction="column" h="100vh">
       

    <Flex w="100%"  maxWidth={1480}  h="auto" >
        <SideBar />

        <SimpleGrid flex="1" gap="3" minChildWidth="320px"  >

        </SimpleGrid>
        
    </Flex>
    </Flex>

      
  )
}
