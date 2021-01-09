import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  border-radius: 7px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: white;
  width: 300px;
  align-items: center;
  height: 300px;
  color: gray;
`;
const SubTitle = styled.div`
  font-size: 35px;
  margin-bottom: 10px;
`;
const Description = styled.div`
  font-size: 15px;
`;
const FROM = styled.div`
  font-size: 20px;
`;
const Writer = styled.div`
  font-size: 20px;
`;

const DESC = ({ Subtitle, name, Text, From, Author }) => {
  return (
    <Container>
        <SubTitle>{Subtitle}</SubTitle>
        <Description>{Text}</Description>
        <FROM>{From}</FROM>
        <Writer>{Author}</Writer>
    </Container>
  );
};
export default DESC;
