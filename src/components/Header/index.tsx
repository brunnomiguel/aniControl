import { Button, Flex, Image, Input } from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa'
import Logo from "../../assets/logo-dash.svg";

export const Header= () => {
  return (
    <Flex as="header" bgColor='red' w="100vw" h="7vh" align="center" justify="space-between" backgroundColor="#2C2C38" borderBottom={"0.2rem solid"} borderBottomColor={"#5CC6DC"} > 
    <Image h="70%" w="10%" src={Logo}/>
    <Flex align="center" justify="center" w="25%" h="70%" bgColor="#D9D9D9" borderRadius="8px" border="0.1rem solid" borderColor="#141414" mr="2vw">
        <Input w="85%" h="100%" outline="none" variant='unstyled' ml="1%"/>
        <Button w="10%" h="90%" bgColor="#5A2843" _hover={{bg: "#28121E"}} _active={{bg:"#5A2843"}}>
            <FaSearch color="#fff"/>
        </Button>
    </Flex>
</Flex>
  )
}
