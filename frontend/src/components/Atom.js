import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Atom.css";

const Container = styled.div`
  height: 50px;
  border-radius: 7px;
  width: 50px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-image: linear-gradient(-45deg, #d3cce3, #e9e4f0);
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
  return (
    <Container>
        <Link to={`/${Name}` }>
            <NUM>{Number}</NUM>
            <ATOM>{Name}</ATOM>
        </Link>
    </Container>
  );
};
export default Atom;