import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";

function SinglePersonPage() {
  const People = useSelector((state) => state.people);

  const params = useParams();

  const chosenPerson = People.find((i) => i.name === params.name);

  console.log(chosenPerson);

  return (
    <div className="profile">
      <h1>{chosenPerson.name}</h1>
      <h3>{chosenPerson.gender}</h3>
      <h3></h3>
    </div>
  );
}

export default SinglePersonPage;
