import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';
import { Provider } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// import './assets/js/jquery-2.2.4.min.js';
// import './assets/js/popper.min.js';
// import './assets/js/bootstrap.min.js';
// import './assets/js/jquery.magnific-popup.js';
// import './assets/js/owl.carousel.min.js';
// import './assets/js/wow.min.js';
// import './assets/js/slick.js';
// import './assets/js/waypoints.min.js';
// import './assets/js/jquery.counterup.min.js';
// import './assets/js/imagesloaded.pkgd.min.js';
// import './assets/js/isotope.pkgd.min.js';
// import './assets/js/swiper.min.js';
// import './assets/js/jquery.nice-select.min.js';
// import './assets/js/jquery-ui.min.js';
// import './assets/js/main.js';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
