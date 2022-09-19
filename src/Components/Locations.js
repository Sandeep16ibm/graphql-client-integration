import React from "react";
import { useQuery, gql } from "@apollo/client";
const Location = gql`
  query GetLocations {
    locations {
      id
      name
      description
    }
  }
`;

const Locations = () => {
  const { loading, error, data } = useQuery(Location);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.locations.map(({ id, name, description }) => (
    <div key={id}>
      <h3>{name}</h3>
      <b>About this location:</b>
      <p>{description}</p>
      <br />
    </div>
  ));
};
export default Locations;
