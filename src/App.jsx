import { Route,Routes} from 'react-router-dom';

import Home from './views/Home';
import Registration from './views/Registration';
import Shopping from './views/Shopping';
import Inventory from './views/Inventory';


function App() {
  return (
    <div >
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/registration" element={<Registration/>}/>            
            <Route exact path="/shopping" element={<Shopping />} />  
            <Route exact path="/inventory" element={<Inventory/>}/>        
        </Routes>
    </div>
  );
}

export default App;
