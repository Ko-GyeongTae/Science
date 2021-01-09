import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 50px;
  border-radius: 7px;
  width: 50px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: transparent;
`;
const ATOM = styled.div`
    font-size:20px;
    font-color:black;
    text-align: center;
    vertical-align: middle;
    position:center center;
`;
const NUM = styled.div`
    font-size:10px;
    font-color:black;
    text-align: left;
    vertical-align: text-top;
    position:center bottom;
`;

const Atom = ({ Name, Number }) => {
    console.log(Name, Number);
  return (
    <Container>
        <Link to={`/${Number}`}>
            <NUM>{Number}</NUM>
        </Link>
        <ATOM>{Name}</ATOM>
    </Container>
  );
};
export default Atom;