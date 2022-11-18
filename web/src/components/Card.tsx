import '../styles/card.css'

type CardProps ={
    stateName?: string,
}

export default function Card({...props}:CardProps){
    return(
        <div className="card">
         <h1>{props.stateName}</h1>
        </div>
    )
}