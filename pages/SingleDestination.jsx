import React from "react";
import { useParams } from "react-router-dom";

export default function SingleDestination() {
  const { id } = useParams();
  return <h1>Destination {id}</h1>;
}
