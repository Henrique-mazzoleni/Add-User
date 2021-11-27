import "./UserInput.css";
import { useState } from "react";

const UserInput = (props) => {
  const [formInput, setFormInput] = useState({
    username: "",
    age: "",
  });

  const usernameChangeHandler = (e) => {
    setFormInput((prevState) => {
      return {
        ...prevState,
        username: e.target.value,
      };
    });
  };

  const ageChangeHandler = (e) => {
    setFormInput((prevState) => {
      return {
        ...prevState,
        age: e.target.value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const submitedData = {
      username: formInput.username,
      age: formInput.age,
    };

    setFormInput({
      username: "",
      age: "",
    });
    props.onSaveInput(submitedData);
  };

  return (
    <form onSubmit={submitHandler} className="user-input">
      <label>Username</label>
      <input
        type="text"
        value={formInput.username}
        onChange={usernameChangeHandler}
      />
      <label>Age (Years)</label>
      <input
        type="number"
        min="0"
        step="1"
        value={formInput.age}
        onChange={ageChangeHandler}
      />
      <button>Add User</button>
    </form>
  );
};

export default UserInput;
