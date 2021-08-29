import { Flex, Icon, Link, Menu, MenuButton, Text } from "@chakra-ui/react";




export default function NavItem({navSize, title, icon, active}) {
    return (
        <Flex
        mt={30}
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        >
            <Menu placement="right" >
                <Link
                backgroundColor={active && "#212927" }
                p={3}
                borderRadius={8}
                _hover={{ textDecor: 'none', backgroundColor: '#212927'}}
                w={navSize == "large" && "100%"}
                >
                    <MenuButton w="100%">
                        <Flex>
                            <Icon as={icon} fontSize="xl" color={active ? "gray.900" : "yellow.400"} />
                            <Text ml={5} display={navSize == "small" ? "none" : "flex"} >{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link>
            </Menu>

        </Flex>
    )
}