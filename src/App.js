import "./App.css";
import UserInput from "./Components/UserInput";

function App() {
  const newUserHandler = (enteredData) => {
    console.log(enteredData);
  };

  return (
    <div className="App">
      <UserInput onSaveInput={newUserHandler} />
    </div>
  );
}

export default App;
