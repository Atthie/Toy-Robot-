function Robot(props) {
    
    return (
        <div className="container">
            <div className="image">
                <img src= {props.image} alt={props.description} />
            </div>
            <h3> {props.nom} </h3>
            <p>{props.proprio} </p>
        </div>
    )
}

export default Robot;