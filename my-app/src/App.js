import "./App.css";
import { Flex } from "@chakra-ui/react";
import BackgroundBox from "./BackgroundBox";
import "./index.css";
import { SvgBackground } from "./graphic_components/BG";
import FileUpload from "./FileUpload";

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
      zIndex="2"
      alignSelf="center"
      justifySelf="center"
      w="50vw"
      maxW="25em"
      h="70vh"
      maxH="35em"
      bg="white"
      borderRadius="1em"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      minW="25em" // Minimum width constraint
      minH="35em" // Minimum height constraint
    >
      <h1>Upload resume!</h1>
      <FileUpload></FileUpload>
    </Flex>
  );
}
