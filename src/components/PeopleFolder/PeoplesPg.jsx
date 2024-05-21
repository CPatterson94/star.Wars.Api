import { useSelector } from "react-redux";
import People from "./PeoplePg";

function PeoplePg() {
  const allPeople = useSelector((state) => state.People);

  return (
    <>
      <div className="wrapper">
        {fishes.length < 1 ? (
          <h1>No Characters Currently...</h1>
        ) : (
          allPeople.map((i) => <People key={i.name} data={i} />)
        )}
      </div>
    </>
  );
}
