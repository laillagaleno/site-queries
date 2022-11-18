import { Link } from "react-router-dom";
import "./styles/item.css";

type ItensProps ={
    to: string,
    name: string,
    isActive?: boolean,
}

export default function MenuItem({...props}:ItensProps){
    return(
        <div className="item">
            <Link
                to={props.to}
                    >
                    <span>{props.name}</span> 
            </Link>
        </div>
    )
}