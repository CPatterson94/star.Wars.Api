import { Link } from "react-router-dom";

function People({ results }) {
  return (
    <Link to={"people/" + results.name}>
      {" "}
      <div className={"peopleBlock"} key={results.name}>
        <h2>{results.name}</h2>
        <h4>{results.height}</h4>
        <h4>{results.mass}</h4>
        <h4>{results.birth_year}</h4>
        <h4>{results.gender}</h4>
      </div>
    </Link>
  );
}
export default People;
