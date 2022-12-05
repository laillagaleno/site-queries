import { useEffect, useState } from 'react'
import '../styles/table.css'
import axios from 'axios'

const data =[
  {
    dir: "AL",

    spca:[
       {
        ano: "2020",
        link:"https://github.com/LucasBassetti/mapa-brasil-svg",
      },
      {
        ano: "2021",
        link:"",
      },
      {
        ano: null,
        link:"",
      },

    ],

    virgencia:"verificado",
    
    spce:[
      {
        status:"em analise",
        link: ""
      }
    ],
    
    obs:"Comentario aqui"
  },
]

export default function Table() {

  const [dataJson, setData] = useState([]);
  const url = "http://localhost:3000";

  async function initJson() {
    await axios.get(url+'estados').then(response => setData(response.data));
  }

  useEffect(()=>{
    initJson();
  },[])

    return (
      <>
      <table className="table">
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Titulo</th>
            <th>Titulo</th>
            <th>Titulo</th>
            <th>Titulo</th>
          </tr>
        </thead>
      <tbody>
      {data.map((d,index)=>(
          <tr>
              <td className='hover'>{d.dir} </td>
              <td>
                <div>
                  {d.spca.map((spca,index)=>(
                    <td>
                      <div>
                      <a href={spca.link}> {spca.ano != null ? spca.ano : "Não verificado"}</a>  
                      </div>
                    </td>
                  ))}
                </div>
              </td>

              <td className='hover'>{d.virgencia}</td>
              
              <td>
                <div>
                {d.spce.map((spca, i)=>(
                    <td>
                      <div>
                        <a href={spca.link}>{spca.status}</a>
                      </div>
                    </td>
                ))}
                </div>
              </td>
              
              <td className='hover'>
                {d.obs}
                
                <input placeholder='Comentario aqui' type="text"/>
                <button>0</button>
              </td>
          </tr>
        ))}
      </tbody>  
      </table>
      </>
      
    )
  }
  
  