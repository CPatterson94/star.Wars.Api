import { useSelector } from "react-redux";
import People from "./PeoplePg";
import { useState } from "react";

function PeoplesPg() {
  const allPeople = useSelector((state) => state.people);

  return (
    <>
      <div className="wrapper">
        {PeoplesPg.length < 1 ? (
          <h1>No Characters Currently...</h1>
        ) : (
          allPeople.map((i) => <People key={i.name} data={i} />)
        )}
      </div>
    </>
  );
}
export default PeoplesPg;
