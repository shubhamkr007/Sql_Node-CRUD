import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Students from './Students';
import Createstudent from './Createstudent';
import Updatestudent from './Updatestudent';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Students/>}></Route>
            <Route path='/create' element={<Createstudent/>}></Route>
            <Route path='/update/:id' element={<Updatestudent/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
