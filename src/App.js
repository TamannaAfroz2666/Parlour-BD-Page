
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
import ContactPage from 'Pages/Contact/ContactPage';
import Hair from 'Pages/Hair/Hair';
import Nails from 'Pages/Nails/Nails';
// import Navbar from './components/NavBar/Navbar';

function App() {
  return (
    <div >

      <Routes>

        <Route path='/' element={ <Home />} />
        {/* <Route path='/home' element={ <Home />} /> */}
        <Route path='/service' element={<ServiceMainPage />} />
        <Route  path='/portfolio' element = { <PortolioPage /> }/>
        <Route  path='/contact' element ={ <ContactPage /> } />
        <Route path='/hair' element ={<Hair/>} />
        <Route path='/nail' element={ <Nails /> }/>



      </Routes>
      {/* <Home></Home> */}
      {/* <Footer></Footer> */}



    </div>
  );
}

export default App;
