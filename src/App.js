import './scss/styles.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Cart from './components/home/Cart';

function App() {
  return (
    <Router>
    <div className="App">
     <Routes>
       <Route path='/checkout' element={<> <Header/> <Cart/></>} />
       <Route path='/login' element={<h1>Login</h1>} />
       <Route path='/' element={<>
        <Header/>
        <Home/>
       </>} />
     </Routes>
    </div>
    </Router>
  );
}

export default App;
