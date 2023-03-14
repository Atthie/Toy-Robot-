function Robot(props) {
    
    return (
        <div>
            <div>
                <img src= {props.image} alt={props.description} />
            </div>
            <h1> {props.nom} </h1>
            <p>{props.proprio} </p>
        </div>
    )
}

export default Robot;