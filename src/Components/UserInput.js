import "./UserInput.css";
import { useRef } from "react";

const UserInput = (props) => {
  const nameInput = useRef();
  const ageInput = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const submitedData = {
      username: nameInput.current.value.trim(),
      age: ageInput.current.value.trim(),
    };

    nameInput.current.value = "";
    ageInput.current.value = "";
    nameInput.current.focus();

    props.onSaveInput(submitedData);
  };

  return (
    <form onSubmit={submitHandler} className="user-input">
      <label htmlFor="username">Username</label>
      <input autoFocus id="username" type="text" ref={nameInput} />
      <label htmlFor="age">Age (Years)</label>
      <input id="age" type="number" ref={ageInput} />
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserInput;
