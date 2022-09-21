import "./App.css";
import { useState, useEffect } from "react";
import { deletePeople, getAll } from "./api/api";
import PeopleTable from "./components/PeopleTable";
import BtnAdd from "./components/BtnAdd/BtnBuy";
import Modal from "./components/Modal/Modal";

function App() {
  const [peoples, setPeoples] = useState([]);
  const [newPeople, setNewPeople] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const getPeoples = async () => {
      try {
        if (newPeople) {
          const { data } = await getAll();
          const allPeoples = data.result.map((people) => {
            return people;
          });
          setPeoples(allPeoples);
          setNewPeople(false);
        }
        const { data } = await getAll();
        const allPeoples = data.result.map((people) => {
          return people;
        });
        setPeoples(allPeoples);
      } catch (error) {
        console.log(error);
      }
    };
    getPeoples();
  }, [newPeople]);

  const addNewPeople = () => {
    setNewPeople(true);
  };

  const removePeople = (id) => {
    deletePeople(id);
    addNewPeople();
  };

  const modalOpen = (event) => {
    event.preventDefault();
    setOpenModal(true);
  };

  const modalClose = (e) => {
    if (e.currentTarget === e.target) {
      setOpenModal(false);
    }
  };
  const modalCloseBtn = (e) => {
    setOpenModal(false);
  };
  return (
    <div className="App">
      {peoples.length > 0 && (
        <PeopleTable peoples={peoples} removePeople={removePeople} />
      )}
      <BtnAdd type="button" onClick={(event) => modalOpen(event)} />
      {openModal && (
        <Modal
          onClick={modalClose}
          modalCloseBtn={modalCloseBtn}
          addNewPeople={addNewPeople}
        />
      )}
    </div>
  );
}

export default App;
