import React from "react";
import styled from "styled-components";

const Container = styled.div`
  heigth: 200px;
  background-color: pink;
  width: 80%;
  display: flex;
  align-items: center;
`;
const SubTitle = styled.div`
  font-size: 35px;
  margin-bottom: 10px;
`;
const Description = styled.div`
  font-size: 28px;
`;
const FROM = styled.div`
  font-size: 30px;
  font-style: Bold;
`;
const Writer = styled.div`
  font-size: 30px;
`;

const DESC = ({ Subtitle, name, Text, From, Author }) => {
  return (
      console.log(name),
    <Container>
        <SubTitle>{Subtitle}</SubTitle>
        <Description>{Text}</Description>
        <FROM>{From}</FROM>
        <Writer>{Author}</Writer>
    </Container>
  );
};
export default DESC;
