import React, { useState } from "react";
import Button from "./button";
import Form from "./Form";
import Spinner from "./Spinner";
const FileUpload = ({ onParsingComplete }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State to track loading

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name); // Update fileName with the selected file's name
      setSelectedFile(event.target.files[0]);
    }
  };

  // Handle button click to upload the file
  const handleClick = async () => {
    console.log("Button clicked");
    if (!selectedFile) {
      console.error("No file selected");
      return;
    }

    setIsLoading(true); // Start loading
    const formData = new FormData();
    formData.append("pdf", selectedFile);

    try {
      const response = await fetch("http://localhost:5000/api/upload-pdf", {
        method: "POST",
        body: formData, // Send the file as form data
      });

      const data = await response.json();
      console.log("Response from backend:", data);
      onParsingComplete(data.parsed_text);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false); // Stop loading once the operation is complete
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "70vh", // Adjust based on your needs
        width: "100%", // Adjust based on your needs
      }}
    >
      <Form onChange={handleFileChange} fileName={fileName}></Form>
      <br />
      {isLoading ? (
        <Spinner /> // Show spinner when loading
      ) : (
        <Button onClick={handleClick}>Upload File</Button>
      )}
    </div>
  );
};

export default FileUpload;
