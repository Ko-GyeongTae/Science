import React from "react";
import { gql } from "apollo-boost";
import styled from "styled-components";
import { useQuery } from "react-apollo";
import { useParams } from "react-router-dom";
import DESC from "../components/Desc";

const GET_DESC = gql`
  query {
    descriptions {
      id
      Subtitle
      name
      Text
      From
      Author
    }
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 25px;
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  color: white;
`;
const Header = styled.div`
  display: flex;
  height: 150px;
  width: 100%;
  color: white;
`;
const ConTable = styled.div`
  display: grid;
  margin-left:50px;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px;
  position: relative;
  width: 80%;
`;

const Title = styled.h1`
  font-size: 120px;
  margin-bottom: 15px;
`;

const Descs = () => {
  const { name } = useParams();
  const { loading, data } = useQuery(GET_DESC);
  return (
    <Container>
      <Header>
        <Title>{loading ? "loading..." : name}</Title>
      </Header>
      <ConTable>
        {data?.descriptions?.map((a) => {
          if (a.name === name) {
            return (
              <DESC
                key={a.id}
                Subtitle={a.Subtitle}
                name={a.name}
                Text={a.Text}
                From={a.From}
                Author={a.Author}
              />
            );
          }
        })}
      </ConTable>
    </Container>
  );
};
export default Descs;
