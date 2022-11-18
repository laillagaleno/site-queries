import '../styles/table.css'

const data =[
  {
    dir: "AL",

    spca:[
      {
        anos:[
          {
            ano: "2020",
            link:"https://github.com/LucasBassetti/mapa-brasil-svg",
            status:null
          },
          {
            ano: "2021",
            link:"",
            status:"em"
          },
        ],
        status: "em andamento"

      }
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
  {
    dir: "AL",

    spca:[
      {
        anos:[
          {
            ano: "2020",
            link:"https://github.com/LucasBassetti/mapa-brasil-svg",
          },
          {
            ano: "2021",
            link:"",
          },
        ],
        status: "em andamento"
      }
    ],

    virgencia:"verificado",
    
    spce:[
      {
        status:"em analise",
        link: ""
      }
    ]    
  },
  {
    dir: "AL",

    spca:[
      {
        anos:[
          {
            ano: "2020",
            link:"https://github.com/LucasBassetti/mapa-brasil-svg",
            status:null
          },
          {
            ano: "2021",
            link:"",
            status:"em"
          },
        ],
        status: "em andamento"

      }
    ],

    virgencia:"verificado",
    
    spce:[
      {
        status:"em analise",
        link: ""
      }
    ]    
  }
]

export default function Table() {
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
                {d.spca.map((spca,index)=>(
                    <div>
                      {spca.anos?.map((anos, index)=>(
                        <td>
                          <div>
                            <a href={anos.link}>{anos.ano}</a>  
                          </div>
                        </td>
                      ))}
                      {spca.status != null ? <td> <div><a href="">{spca.status} </a></div> </td> : ""}
                    </div>
                ))}
              </td>

              <td className='hover'>{d.virgencia}</td>
              
              <td>
                {d.spce.map((spca, i)=>(
                  <div>
                    <td><div>
                    <a href={spca.link}>{spca.status}</a>
                      
                      </div></td>
                  </div>
                ))}
              </td>
              
              <td className='hover'>{d.obs}</td>
          </tr>
        ))}
      </tbody>  
      </table>
      </>
      
    )
  }
  
  