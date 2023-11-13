import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Project from './pages/project';
import Home from './pages/home';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route index element={<Home />}></Route>
            <Route exact path='/project' element={<Project/>}></Route>
        </Routes>
     </BrowserRouter>
  );
}

export default App;
