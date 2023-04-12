import "../Css/heading.css"


export default function Heading(props){

    return(
        <div className="heading">
            <p className="primary-heading">{props.primary}</p>
            <h1>{props.secondary}</h1>
        </div>
    )
}