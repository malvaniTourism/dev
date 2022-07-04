// import './App.css';
import './assets/styles/styles.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './screens/mains/Home';

import Login from './screens/auth/Login';
import Register from './screens/auth/Register';
import NotFound from './screens/mains/NotFound';
import MainProd from './screens/products/MainProd';

import AboutUs from './screens/pages/About';

import './assets/css/bootstrap.min.css';
import './assets/css/animate.css';
import './assets/css/magnific-popup.css';
import './assets/css/owl.carousel.min.css';
import './assets/css/slick.css';
import './assets/css/swiper.min.css';
import './assets/css/nice-select.css';
import './assets/css/jquery-ui.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/themify-icons.css';
import './assets/css/line-awesome.min.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import ContactUs from './screens/pages/Contact';
import CardDetails from './screens/pages/CardDetails';
import List from './screens/pages/List';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/mainProd' element={<MainProd />}></Route>
        <Route path='/aboutus' element={<AboutUs />}></Route>
        <Route path='/contactus' element={<ContactUs />}></Route>
        <Route path='/list' element={<List />}></Route>
        <Route path='/carddetails' element={<CardDetails />}></Route>
        <Route element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
