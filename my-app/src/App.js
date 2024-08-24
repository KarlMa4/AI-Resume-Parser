import "./App.css";
import { Flex } from "@chakra-ui/react";
import BackgroundBox from "./BackgroundBox";
import "./index.css";
import { SvgBackground } from "./graphic_components/BG";
import FileUpload from "./FileUpload";
import React, { useState } from "react";
function App() {
  const [parsedText, setParsedText] = useState(""); // State to hold parsed text
  const [isParsed, setIsParsed] = useState(false); // State to check if parsed text exists

  // Function to handle parsing completion and update state
  const handleParsingComplete = (parsedText) => {
    setParsedText(parsedText);
    setIsParsed(true);
  };
  return (
    <Flex
      position="relative"
      w="100%"
      h="100%"
      bg="black"
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      <SvgBackground />
      <BackgroundBox />
      {/* Left Side: Original ExampleAppScreen */}
      <ExampleAppScreen onParsingComplete={handleParsingComplete} />

      {/* Right Side: Conditionally Render New Screen for Parsed Text */}
      {isParsed && <ParsedTextScreen parsedText={parsedText} />}
    </Flex>
  );
}

export default App;
function ExampleAppScreen({ parsedText, isParsed, onParsingComplete }) {
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
      <FileUpload onParsingComplete={onParsingComplete} />
    </Flex>
  );
}
function ParsedTextScreen({ parsedText }) {
  return (
    <Flex
      className="parsed-text-screen"
      zIndex="2"
      alignSelf="center"
      justifySelf="center"
      w="auto"
      h="auto"
      maxW="90vw" // Max width constraint to ensure it fits within the screen
      maxH="90vh" // Max height constraint to ensure it fits within the screen
      bg="white"
      borderRadius="1em"
      justifyContent="flex-start"
      flexDirection="column"
      alignItems="flex-start"
      overflow="auto" // Allow scrolling if content exceeds height
      padding="1em" // Add padding for better readability
      ml="2em" // Margin to separate from the original screen
    >
      <h1>Parsed Resume</h1>
      <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
        {parsedText}
      </pre>{" "}
      {/* Display parsed text with proper wrapping */}
    </Flex>
  );
}
