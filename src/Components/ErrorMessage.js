import React from "react";
import ReactDOM from "react-dom";
import "./ErrorMessage.css";

const ErrorMessage = (props) => {
  const Overlay = (props) => (
    <div className="overlay" onClick={props.closeMessage}></div>
  );

  const ErrorPop = (props) => (
    <div className="error-message">
      <h1>{props.title}</h1>
      <div className="body">
        <p>{props.message}</p>
      </div>
      <button onClick={props.closeMessage}>Okay</button>
    </div>
  );

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Overlay closeMessage={props.closeMessage} />,
        document.getElementById("overlay")
      )}
      {ReactDOM.createPortal(
        <ErrorPop
          title={props.title}
          message={props.message}
          closeMessage={props.closeMessage}
        />,
        document.getElementById("error-message")
      )}
    </React.Fragment>
  );
};

export default ErrorMessage;
