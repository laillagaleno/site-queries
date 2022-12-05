import "../styles/home.css"
import logoImg from "../assets/Logo_PSTU.png"
import { useState } from "react";
import Map from "../components/Map";
export default function Home() {

  const [party, setParty] = useState<string>('');
  const [isMap, setMap] = useState(false);
  const handleClick = (e:string) => {
    setParty(e);
  }



  return (
    <div className="container">
      <div>
        <button    
          onClick={() => {
            handleClick("pstu");
            setMap(true);
          }}
          className="container-card"
          >
          <div className="card-infor">
            <div className="head">
              <img src={logoImg} alt="Logo do partido" />
              <h2>PARTIDO SOCIALISTA DOS TRABALHADORES UNIFICADO (PSTU) - 16</h2>
            </div>
            <div>
              <p><span>Diretório:</span> Nacional</p>
              <p><span>CNPJ:</span> 73.282.907/0001-64</p>
              <p><span>UF:</span> Brasil - BR</p>
            </div>
          </div>
        </button>
      </div>

      <div className="container-map">
      { isMap ? <Map party={party}/> : "" }
      </div>
    </div>
  )
}

