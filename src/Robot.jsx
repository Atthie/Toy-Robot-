import "./robot.css";
import { useState } from "react";
import Modal from "./modal";

function Robot(props) {
  const [is0pen, setIsOpen] = useState(false);

  function declencheModal() {
    setIsOpen(!is0pen);
  }

  return (
    <div className="mainRobot" onClick={declencheModal}>
      <div className="containerRobot">
        <div className="image">
          <img
            src={"https://robohash.org/" + props.image}
            alt={props.description}
          />
        </div>
        <h4> {props.nom} </h4>
        <p>{props.mail} </p>
      </div>
      <div className="modal">
        {is0pen && (
          <Modal
            username={props.username}
            nom={props.nom}
            phone={props.phone}
            mail={props.mail}
          ></Modal>
        )}
      </div>
    </div>
  );
}
export default Robot;
