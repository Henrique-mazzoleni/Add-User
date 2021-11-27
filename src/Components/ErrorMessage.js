import "./ErrorMessage.css";

const ErrorMessage = (props) => {
  return (
    <div className="overlay">
      <div className="error-message">
        <h1>Invalid input</h1>
        <div className="body">
          <p>{props.message}</p>
        </div>
        <button onClick={props.closeMessage}>Okay</button>
      </div>
    </div>
  );
};

export default ErrorMessage;