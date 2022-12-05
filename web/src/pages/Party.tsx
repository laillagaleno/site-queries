import { useState } from "react";
import Map from "../components/Map";
import "../styles/home.css"


export default function Party() {

  const [state, setName] = useState('');

  return (
    <div className="container">
        <Map party="pstu"/>
    </div>
  )
}

