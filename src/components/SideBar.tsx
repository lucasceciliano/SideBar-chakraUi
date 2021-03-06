import { Avatar, Divider, Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FiCalendar, FiGrid, FiHash, FiHome, FiLayout, FiMenu, FiSettings, FiUser, FiUsers } from 'react-icons/fi';
import NavItem from "./NavItem";

export function SideBar(){
    const [navSize, changeNavSize] = useState("large")

    return (
        <Flex
        position="sticky"
        h="100vh"
        bg="gray.900"
        borderRadius={navSize == "small" ? "0  50px 50px 0" : "0 15px 15px 0"}
        boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.5)"
        w={navSize == "small" ? "8rem" : "20rem"}
        flexDir="column"
        justifyContent="space-between"
        color="white"
        >
            <Flex
            p="5%"
            flexDir="column"
            alignItems={navSize == "small" ? "center" : "flex-start"}
            as="nav"
            >
                <IconButton
                    aria-label=" Menu database"
                    color="yellow.400"
                    background="none"
                    mt={5}
                    _hover={{background: 'none'}}
                    icon={<FiMenu />}
                    onClick={() => {
                        if (navSize == "small")
                            changeNavSize("large")
                        else
                            changeNavSize("small")
                    }}
                />
                <NavItem  navSize={navSize} icon={FiHash} title="Equipes"  />
                <NavItem  navSize={navSize} icon={FiUser} title="Clientes" />
                <NavItem  navSize={navSize} icon={FiLayout} title="Workspace" />
                <NavItem  navSize={navSize} icon={FiSettings} title="Configurações"  />


            </Flex>

            <Flex
            p="5%"
            flexDir="column"
            w="100%"
            alignItems={navSize == "small" ? "center" : "flex-start"}
            mb={4}
            >
            
                <Divider  display={navSize == "small" ? "none" : "flex"} />
                <Flex mt={4} align="center" > 
                    <Avatar size="sm"
                    src="https://github.com/lucasceciliano.png" />
                    <Flex flexDir="column" ml={4} display={navSize == "small" ? "none" : "flex"} >
                        <Heading as="h3" size="sm"  >Lucas Ceciliano</Heading>
                        <Text>Front-end</Text>
                    
                    </Flex>
                </Flex>

            </Flex>

        </Flex>
    )
}