import React from "react";
import styled from "styled-components";

const FileIcon = () => {
  return (
    <StyledWrapper>
      <div className="button">
        <div className="container">
          <div className="folder folder_one" />
          <div className="folder folder_two" />
          <div className="folder folder_three" />
          <div className="folder folder_four" />
        </div>
        <div className="active_line" />
      </div>
    </StyledWrapper>
  );
};
const StyledWrapper = styled.div`
  .button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5.5rem; /* Adjusted size for better proportion */
    height: 2.5rem;
    border: none;
    cursor: pointer;
    border-radius: 0.4rem;
    background: rgba(235, 252, 254, 0.8);
  }

  .container {
    position: relative;
    width: 3rem; /* Reduced size for better fit */
    height: 2.8rem;
    max-height: 5rem; /* Set a maximum height */
    max-width: 5rem; /* Set a maximum width */
    background: none;
    overflow: hidden;
  }

  .folder {
    content: "";
    position: absolute;
    max-height: 100%; /* Enforce maximum height */
    max-width: 100%; /* Enforce maximum width */
  }

  .folder_one {
    bottom: 0;
    width: 100%;
    height: 85%; /* Adjusted height for better proportion */
    max-height: 100%; /* Enforce maximum height */
    border-radius: 3px;
    border-top: 2px solid rgb(206, 167, 39);
    background: linear-gradient(
      -35deg,
      rgb(238, 194, 47) 5%,
      rgb(255, 223, 118)
    );
  }

  .folder_two {
    top: 5%;
    width: 35%; /* Adjusted width for better proportion */
    height: 18%;
    max-height: 100%; /* Enforce maximum height */
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    background-color: rgb(206, 167, 39);
    box-shadow: 0 1px 5px -2px rgba(0, 0, 0, 0.5);
  }

  .folder_two::before {
    content: "";
    position: absolute;
    display: inline;
    left: 88%;
    width: 0;
    height: 0;
    border-left: 6px solid rgb(206, 167, 39); /* Adjusted size */
    border-top: 0.25rem solid transparent;
    border-bottom: 0.25rem solid transparent;
  }

  .folder_three {
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0.5rem;
    bottom: 0;
    width: 2rem;
    height: 0.7rem;
    border-radius: 4px 4px 0 0;
    background: linear-gradient(-35deg, rgb(25, 102, 218), rgb(109, 165, 249));
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  }

  .folder_four {
    left: 0.8rem; /* Adjusted positioning */
    bottom: 0.2rem;
    width: 1.2rem;
    height: 0.15rem;
    border-radius: 1rem;
    background-color: rgb(20, 77, 163);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .active_line {
    content: "";
    position: absolute;
    bottom: 0.6rem; /* Adjusted to be just below the button */
    left: 50%; /* Center it horizontally */
    transform: translateX(-50%); /* Adjust position by half of its width */
    width: 1rem; /* Initial width */
    height: 0.3rem;
    background-color: #999;
    border: none;
    border-radius: 1rem;
    transition: all 0.15s linear;
  }

  .button:active .active_line,
  .button:focus .active_line {
    width: 2.5rem; /* Adjusted for proportional sizing */
    background-color: rgb(41, 126, 255);
  }

  .button:focus .container {
    animation: wow 1s forwards;
  }

  .text {
    content: "";
    position: absolute;
    top: -3rem;
    width: 6rem;
    height: 2rem;
    background-color: #666;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 5px;
    text-shadow: 0 0 10px rgb(0, 0, 0);
    opacity: 0;
    transition: all 0.25s linear;
  }

  .button:hover .text {
    opacity: 1;
  }
`;

export default FileIcon;
