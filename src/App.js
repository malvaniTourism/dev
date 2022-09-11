// import './App.css';
import './assets/styles/styles.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'

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

import Home from './screens/mains/Home';
import Login from './screens/auth/Login';
import Register from './screens/auth/Register';
import NotFound from './screens/mains/NotFound';
import MainProd from './screens/products/MainProd';
import ContactUs from './screens/pages/Contact';
import CardDetails from './screens/pages/CardDetails';
import AboutUs from './screens/pages/About';
import List from './screens/pages/List';
import BlogList from './screens/pages/BlogList';
import BlogDetails from './screens/pages/BlogDetails';
import ListDetails from './screens/pages/ListDetails';
import TopRated from './screens/pages/TopRated';
import Cities from './screens/pages/Cities';
import Places from './screens/pages/Places';
import TourDetails from './screens/pages/TourDetails';
import Vr from './screens/pages/Vr';
import Profile from './screens/pages/Profile';
import DestinationDetails from './screens/pages/DestinationDetails';


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
        <Route path='/carddetails' element={<CardDetails />}></Route>
        <Route path='/list' element={<List />}></Route>
        <Route path='/blogs' element={<BlogList />}></Route>
        <Route path='blogs/blogdetails' element={<BlogDetails />}></Route>
        <Route path='/listdetails' element={<ListDetails />}></Route>
        <Route path='/top-rated' element={<TopRated />}></Route>
        <Route path='/cities' element={<Cities />}></Route>
        <Route path='/places' element={<Places />}></Route>
        <Route path='/vr' element={<Vr />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/tourdetails' element={<TourDetails />}></Route>
        <Route path='city/details' element={<DestinationDetails />}></Route>
        <Route path='place/details' element={<DestinationDetails />}></Route>
        <Route element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
