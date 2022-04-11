import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About/About';
import CheckOut from './Pages/Cart/CheckOut/CheckOut';
import Review from './Pages/Cart/Review/Review';
import LogIn from './Pages/Form/LogIn/LogIn';
import Register from './Pages/Form/Register/Register';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/review' element={<Review />}></Route>
        <Route path='/checkOut' element={<CheckOut />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<LogIn />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
