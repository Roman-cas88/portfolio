import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Content } from './Components/Content/Content';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Calculator } from './Components/Content/Portfolio/Calculator';
import { DayInfo } from './Components/Content/Portfolio/DayInfo';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Content />} />
          <Route path='/calculator' element={<Calculator />} />
          <Route path='/day-info' element={<DayInfo />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
