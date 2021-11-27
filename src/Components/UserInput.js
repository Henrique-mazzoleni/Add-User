import "./UserInput.css";

const UserInput = () => {
  return (
    <form className="user-input">
      <label>Username</label>
      <input />
      <label>Age (Years)</label>
      <input />
      <button>Add User</button>
    </form>
  );
};

export default UserInput;
