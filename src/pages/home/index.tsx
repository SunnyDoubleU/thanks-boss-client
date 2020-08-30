import React from "react";
import styled from "styled-components";

const SMainContainter = styled.div``;
const STitle = styled.div`
  color: ${(props) => props.theme.text};
`;

const Home: React.FC = () => {
  return (
    <>
      <STitle>this is home page</STitle>
    </>
  );
};

export default Home;
