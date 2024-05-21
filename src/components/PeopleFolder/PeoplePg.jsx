import { Link } from "react-router-dom";

function People({ data }) {
  return (
    <Link to={"people/" + data.name}>
      {" "}
      <div className={"peopleBlock"} key={data.name}>
        <h2>{data.name}</h2>
        <h4>{data.height}</h4>
        <h4>{data.mass}</h4>
        <h4>{data.birth_year}</h4>
        <h4>{data.gender}</h4>
      </div>
    </Link>
  );
}
export default People;
