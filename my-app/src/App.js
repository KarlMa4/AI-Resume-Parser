import "./App.css";
import { Flex } from "@chakra-ui/react";
import BackgroundBox from "./BackgroundBox";
import "./index.css";
import { SvgBackground } from "./graphic_components/BG";
import Button from "./button";

function App() {
  return (
    <Flex
      position="relative"
      w="100%"
      h="100%"
      bg="black"
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <SvgBackground />
      <BackgroundBox />
      <ExampleAppScreen />
    </Flex>
  );
}

export default App;
function ExampleAppScreen() {
  return (
    <Flex
      className="example-screen"
      zIndex="1"
      alignSelf="center"
      justifySelf="center"
      w="50vw"
      maxW="20em"
      h="70vh"
      maxH="35em"
      bg="white"
      borderRadius="1em"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
    >
      <h1>Upload resume!</h1>
      <Button />
    </Flex>
  );
}
