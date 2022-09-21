import { useSortableData } from "../hooks/useSortableData";

const PeopleTable = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.peoples);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <>
      <table>
        <caption>People</caption>
        <thead>
          <tr>
            <th>
              <button
                type="button"
                onClick={() => requestSort("name")}
                className={getClassNamesFor("name")}
              >
                Name
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("surname")}
                className={getClassNamesFor("surname")}
              >
                Surname
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("createdAt")}
                className={getClassNamesFor("createdAt")}
              >
                Date
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.surname}</td>
              <td>{item.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default PeopleTable;
