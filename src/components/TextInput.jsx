import { useState } from "react"
import { Textarea,Button,useToast } from "@chakra-ui/react"

const TextInput = ({extractKeywords}) => {
    const [text,setText]=useState('');

    const toast=useToast();

    const SubmitText=()=>{
        if(text=== ''){
            toast({
                title:'text field is required',
                status:'error',
                duration:3000,
                isClosable:false
            });
        }
        else{
            extractKeywords(text)
        }
    }
    return (
    <>
    <Textarea bg="blue.100" color="black" padding ="4" marginTop={6} height={200}value={text}
    onChange={(e)=>setText(e.target.value)}
    />

    <Button bg="gray.200" color="Black" textStyle="bold" marginTop={4} width="100%" _hover={{bg:'gray.400'}} onClick={SubmitText} >
        Extract Keywords
    </Button>

    </>
  )
}

export default TextInput