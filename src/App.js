
// import Animation from './components/Animation/Animation';
import Service from './components/Services/Service';
import './App.css';
// import Skills from './components/Skills/Skills';
import Home from './components/Home/Home';
import Footer from 'layout/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import ProvideList from './components/ProvideList/ProvideList';
import ServiceMainPage from 'Pages/Service/ServiceMainPage/ServiceMainPage';
import PortolioPage from 'Pages/PortfolioPage/PortolioPage';
// import Navbar from './components/NavBar/Navbar';

function App() {
  return (
    <div >

      <Routes>

        <Route path='/' element={ <Home />} />
        {/* <Route path='/home' element={ <Home />} /> */}
        <Route path='/service' element={<ServiceMainPage />} />
        <Route  path='/portfolio' element = { <PortolioPage /> }/>



      </Routes>
      {/* <Home></Home> */}
      {/* <Footer></Footer> */}



    </div>
  );
}

export default App;
