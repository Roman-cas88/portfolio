import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Content } from './Components/Content/Content';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Content />
        <Footer />
    </BrowserRouter>
  );
}

export default App;
