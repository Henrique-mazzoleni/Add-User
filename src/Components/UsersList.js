import "./UsersList.css";

const UsersList = (props) => {
  return (
    <ul className="users-list">
      {props.users.map((user) => (
        <li>{`${user.username} (${user.age} year${
          parseInt(user.age) === 1 ? "" : "s"
        } old)`}</li>
      ))}
    </ul>
  );
};

export default UsersList;
