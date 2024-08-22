import React, { useState } from "react";
import styled from "styled-components";

import FileIcon from "./FileIcon";
const Form = ({ onChange, fileName }) => {
  const [fileSelected, setFileSelected] = useState(false);

  const handleFileChange = (event) => {
    onChange(event);
    if (event.target.files.length > 0) {
      setFileSelected(true); // Set fileSelected to true when a file is chosen
    } else {
      setFileSelected(false); // Reset if no file is chosen
    }
  };
  return (
    <StyledWrapper>
      <div className="container">
        <div
          className="header"
          style={{
            backgroundColor: fileSelected ? "skyblue" : "transparent", // Change background based on state
            padding: "10px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          {!fileName ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M7 10V9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9V10C19.2091 10 21 11.7909 21 14C21 15.4806 20.1956 16.8084 19 17.5M7 10C4.79086 10 3 11.7909 3 14C3 15.4806 3.8044 16.8084 5 17.5M7 10C7.43285 10 7.84965 10.0688 8.24006 10.1959M12 12V21M12 12L15 15M12 12L9 15"
                  stroke="#000000"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{" "}
              </g>
            </svg>
          ) : (
            <FileIcon></FileIcon>
          )}
          <p>{fileName ? "" : "Browse File to upload!"}</p>{" "}
        </div>
        <label htmlFor="file" className="footer">
          <svg
            fill="#000000"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <path d="M15.331 6H8.5v20h15V14.154h-8.169z" />
              <path d="M18.153 6h-.009v5.342H23.5v-.002z" />
            </g>
          </svg>
          <p>{fileName ? fileName : "No file selected"}</p>{" "}
          {/* Conditionally display file name */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </label>

        <input
          id="file"
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
        />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container {
    height: 300px;
    width: 300px;
    border-radius: 10px;
    box-shadow: 4px 4px 30px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    gap: 5px;
    background-color: rgba(0, 110, 255, 0.041);
  }

  .header {
    flex: 1;
    width: 100%;
    border: 2px dashed royalblue;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .header svg {
    height: 100px;
  }

  .header p {
    text-align: center;
    color: black;
  }

  .footer {
    background-color: rgba(0, 110, 255, 0.075);
    width: 100%;
    height: 40px;
    padding: 8px;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: black;
    border: none;
  }

  .footer svg {
    height: 130%;
    fill: royalblue;
    background-color: rgba(70, 66, 66, 0.103);
    border-radius: 50%;
    padding: 2px;
    cursor: pointer;
    box-shadow: 0 2px 30px rgba(0, 0, 0, 0.205);
  }

  .footer p {
    flex: 1;
    text-align: center;
  }

  #file {
    display: none;
  }
`;

export default Form;
