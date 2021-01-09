import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";

const GET_ATOMS = gql`
  query {
    atoms {
        id
        Name
        Number
        locationX
        locationY
    }
  }
`;

const atoms = () => {
  const { loading, data, error } = useQuery(GET_ATOMS);
  console.log(data);
  console.log(error);
  console.log(loading);
  return (
    <>
      <h1>Atoms</h1>
      {loading && <h3>Loading..</h3>}
      {error && <h3>{error}</h3>}
      <ul>
        {data?.atoms?.map((a) => (
          <li>
            <div>
              <p>{a.id}</p>
              <p>{a.Name}</p>
              <p>{a.Number}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default atoms;
