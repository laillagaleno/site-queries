import { SetStateAction, useState } from "react";
import Card from "../components/Card";
import Map from "../components/Map";
import "../styles/home.css"


export default function Home() {

  const [state, setName] = useState('');

  const childToParent = (clickedState: SetStateAction<string>) => {
    setName(clickedState);
  }

  return (

    <div className="container">
      
     
       <div className="map">
        <Map />
      </div>
      <div className="container-infor">
        <Card stateName={state}/>
      </div>
     

    </div>
  )
}

