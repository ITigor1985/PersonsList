import "./App.css";
import { useState, useEffect } from "react";
import { getAll } from "./api/api";
import PeopleTable from "./components/PeopleTable";

function App() {
  const [peoples, setPeoples] = useState([]);

  useEffect(() => {
    const getPeoples = async () => {
      try {
        const { data } = await getAll();
        console.log(data);
        const allPeoples = data.result.map((people) => {
          return people;
        });
        setPeoples(allPeoples);
      } catch (error) {
        console.log(error);
      }
    };
    getPeoples();
  }, []);

  return (
    <div className="App">
      {peoples.length > 0 && <PeopleTable peoples={peoples} />}
    </div>
  );
}

export default App;
