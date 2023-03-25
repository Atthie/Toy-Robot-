import "./modal.css";
import "./robot.css";
function Modal(props) {
  return (
    <div className="fullscreen">
      <div className="containerModal">
        <h3> {props.nom} </h3>
        <p>
          {" "}
          <b>Username: </b> {props.username}{" "}
        </p>
        <p>
          {" "}
          <b>Tel: </b>
          {props.phone}{" "}
        </p>
        <p>
          {" "}
          <b>Email: </b>
          {props.mail}{" "}
        </p>
      </div>
    </div>
  );
}

export default Modal;
