

export default function Card(props){

    return(
        <div className="whole-card">
        <div className="card">
            <div className="upper-container">
                <div className="img-container">
                    <img src={props.url} alt="student"  />
                </div>
            </div>
            <div className="lower-container">
                {/* <h3>{props.name}</h3> */}
                <h4>{props.experience}</h4>
                {/* <p>{props.information}</p> */}
            </div>
        </div>
        </div>
    )
}