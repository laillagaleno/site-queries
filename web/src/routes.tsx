import {Routes, Route} from 'react-router-dom'
import Home  from "./pages/Home";
import Table from './pages/Table';

const Rotas = () =>{
    return(
        <Routes>
            <Route  path="/" element={<Home/>}/>
            <Route path='/:party/:state' element={<Table/>}/>
        </Routes> 
    )
}
export default Rotas;