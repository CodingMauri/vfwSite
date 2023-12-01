import './App.css';
import { Route, Routes } from 'react-router';
import Home from "./Components/Hero"
import Memorial from "./Components/Memorial"
function App() {
  return (

    <div className='bg-black'>
    <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path = '/memorial' element = {<Memorial />} />
    </Routes>
    </div>
  );
}

export default App;
