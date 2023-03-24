import './robot.css'
function Robot(props) {
    return (
        <div className="containerRobot">
            <div className="image">
            <img src={'https://robohash.org/' + props.image} alt={props.description} />
            </div>
            <h4> {props.nom} </h4>
            <p>{props.mail} </p>
        </div>
    )
}
export default Robot;