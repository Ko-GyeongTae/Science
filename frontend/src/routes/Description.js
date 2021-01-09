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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const Header = styled.div`
  display: flex;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  heigh: 200px;
  width: 100%;
  color: white;
`;
const ConTable = styled.div`
  display: flex;
  width: 80%;
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;

const Descs = () => {
  const { name } = useParams();
  const { loading, data } = useQuery(GET_DESC);
  console.log(data);
  return (
    <Container>
      <Header>
        <Title>{loading ? "loading..." : name}</Title>
      </Header>
      <ConTable>
        {data?.descriptions?.find((a) => {
          console.log(a.name === name);
          <p>Hoo</p>
          if (a.name === name) {
            <DESC
              Subtitle={a.Subtitle}
              name={a.name}
              Text={a.Text}
              From={a.From}
              Author={a.Author}
            />;
          }
        })}
      </ConTable>
    </Container>
  );
};
export default Descs;
