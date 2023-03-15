import './robot.css'
function Robot(props) {
    
    return (
        <div className="containerRobot">
            <div className="image">
                <img src= {props.image} alt={props.description} />
            </div>
            <h4> {props.nom} </h4>
            <p>{props.proprio} </p>
        </div>
    )
}

export default Robot;