import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import PopUp from './component/Header/PopUp/PopUp';




function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Header />}></Route>
        <Route path='/home' element={<Header />}></Route>
        <Route path='/popUp' element={<PopUp />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
