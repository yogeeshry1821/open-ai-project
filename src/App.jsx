import { Container, Box } from "@chakra-ui/react";
import Header from "./components/header";
import Footer from "./components/Footer";
import TextInput from "./components/TextInput";
import { useState } from "react";
import KeywordsModal from "./components/KeywordsModal";
function App() {
  const [keywords, setKeywords] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const extractKeywords = async (text) => {
    setLoading(true);
    setIsOpen(true);
    console.log("lol :>>");
    const options = {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt:
          "Extract keywords from this text. Make the first letter of each letter upper-case and separate them with commas \n\n" +
          text +
          "",
        temperature: 0.5,
        max_tokens: 40,
        frequency_penalty: 0.8,
      }),
    };
    try {
      const response = await fetch(import.meta.env.VITE_API_URL, options);
      const json = await response.json();
      console.log(json.choices[0].text.trim());
      setKeywords(json.choices[0].text.trim());
      setLoading(false);
    } 
    catch (e) {
      console.error(e);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Box bg="gray.100" color="black" height="100vh" paddingTop={130}>
      <Container maxW="3xl" centerContent>
        <Header />
        <TextInput extractKeywords={extractKeywords} />
        <Footer />
      </Container>
      <KeywordsModal
        keywords={keywords}
        loading={loading}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </Box>
  );
}

export default App;
