import "./App.css";
import { useState, useEffect } from "react";
import { getAll } from "./api/api";

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
      {peoples.length > 0 && (
        <>
          <ul>
            {peoples.map((people) => {
              return (
                <li key={people._id}>
                  {people.name} {people.surname}
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}

export default App;
