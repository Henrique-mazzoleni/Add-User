import { useState } from "react";
import "./App.css";
import UserInput from "./Components/UserInput";
import UsersList from "./Components/UsersList";
import ErrorMessage from "./Components/ErrorMessage";

function App() {
  const [usersList, setUsersList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const newUserHandler = (enteredData) => {
    if (enteredData.username.length === 0 || enteredData.age.length === 0) {
      setErrorMessage("Please enter a valid name and age (non-empty values)");
      return;
    }

    if (parseInt(enteredData.age) < 0) {
      setErrorMessage("Please enter a valid age (>0)");
      return;
    }

    const newUser = {
      id: Math.random().toString(),
      username: enteredData.username,
      age: enteredData.age,
    };
    setErrorMessage("");
    setUsersList((prevList) => {
      return [newUser, ...prevList];
    });
  };

  const closeMessageHandler = () => {
    setErrorMessage("");
  };

  return (
    <div className="App">
      {errorMessage === "" ? (
        ""
      ) : (
        <ErrorMessage
          message={errorMessage}
          closeMessage={closeMessageHandler}
        />
      )}
      <UserInput onSaveInput={newUserHandler} />
      {usersList.length > 0 ? <UsersList users={usersList} /> : ""}
    </div>
  );
}

export default App;
