import { Box,Image,Text,Flex } from "@chakra-ui/react"
import logo from "../assets/openai5002.jpg"

const Footer = () => {
  return (
    <Box marginTop={50}>
        <Flex justifyContent="center" alignItems='center'>
            <Image src={logo} marginRight={1} boxSize={9}/>
            <Text>
                Powered by Open AI 
            </Text>
        </Flex>
    </Box>

    )
}

export default Footer