import React from "react";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";

const GET_ATOM = gql`
  query atom($id: String!) {
    atom(number: $id) {
      id
      Name
      Number
      locationX
      locationY
    }
  }
`;

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  margin-left: 10px;
  width: 50%;
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;
const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;
const Description = styled.p`
  font-size: 28px;
`;


export default () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_ATOM, {
    variables: { number: id }
  });
  return (
    <Container>
      <Column>
        <Title>{loading 
          ? "Loading..." 
          : `${data.atom.Name}`}</Title>
        <Subtitle>
          {data.atom.id} · {data.atom.Number}
        </Subtitle>
        <Description>A</Description>
      </Column>
    </Container>
  );
};