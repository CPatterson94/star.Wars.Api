import { useGetAllPeopleQuery } from "./api";
import { Route, Routes } from "react-router-dom";
import SinglePersonPage from "./components/PeopleFolder/SinglePersonPage";
import PeoplesPg from "./components/PeopleFolder/PeoplesPg";

function App() {
  const { isLoading } = useGetAllPeopleQuery();

  return (
    <>
      {/* <Nav /> */}
      {isLoading ? (
        <div className="loading">
          <h1>Loading Characters...</h1>
        </div>
      ) : (
        <Routes>
          <Route index element={<PeoplesPg />} />
          <Route path={"/people/name"} element={<SinglePersonPage />} />
        </Routes>
      )}
      <h1>Hello</h1>
    </>
  );
}

export default App;
