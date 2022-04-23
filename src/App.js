// import './App.css';
import './assets/styles/styles.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './screens/mains/Home';

import Login from './screens/auth/Login';
import Register from './screens/auth/Register';
import NotFound from './screens/mains/NotFound';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
