import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  const [newArray, setNewArray] = useState(contacts.slice(0, 5));
  console.log(contacts);
  console.log(newArray);
  function selectRandomContact() {
    let index = Math.floor(Math.random() * contacts.length);
    console.log(contacts[index]);
    return contacts[index];
  }
  console.log(newArray);

  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <button onClick={() => setNewArray([...newArray, selectRandomContact()])}>
        Add one element
      </button>
      <button
        onClick={() =>
          setNewArray(
            [...newArray].sort((a, b) => {
              return b.popularity - a.popularity;
            })
          )
        }
      >
        Sort by popularity
      </button>
      <button
        onClick={() =>
          setNewArray(
            [...newArray].sort(function (a, b) {
              if (a.name < b.name) {
                return -1;
              }
              if (a.name > b.name) {
                return 1;
              }
              return 0;
            })
          )
        }
      >
        sort by name
      </button>
      <table>
        <thead>
          <tr>
            <th>PICTURE</th>
            <th>NAME</th>
            <th>POPULARITY</th>
            <th>EMMY</th>
            <th>OSCAR</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {newArray.map((currentContact) => (
            <tr name={currentContact.name}>
              <td>
                <img src={currentContact.pictureUrl} />
              </td>
              <td>{currentContact.name}</td>
              <td>{currentContact.popularity}</td>
              {currentContact.wonEmmy ? <td>🏆</td> : <td></td>}
              {currentContact.wonOscar ? <td>🏆</td> : <td></td>}
              <button>Delete</button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;
