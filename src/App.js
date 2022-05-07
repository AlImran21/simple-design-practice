import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import PopUp from './component/Header/PopUp/PopUp';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/home' element={<Header />}></Route>
        <Route path='/popUp' element={<PopUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
