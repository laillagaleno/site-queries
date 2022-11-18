import "./styles/menu.css";
import MenuItem from "./MenuItem";
import logoImg from "../../assets/Logo_PSTU.png"

export const menuItens =[
    {
        name: "Menu 1",
        to: '/table',
        isAction: "is-active",

    },
    {
        name: "Menu 2",
        to: '/',
        isAction: "is-active",

    }
]
export default function Menu() {
    return (
    <div className="header">

        <img src={logoImg} alt=""/>

        <div className="itens">
        {menuItens.map((menu,index)=>(
            <MenuItem
                to={menu.to}
                name={menu.name}
                key={index}
            />
        ))}
        </div>
        
    </div>
    )
  }
  
  