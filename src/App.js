import './App.css';
import { Route, Routes } from 'react-router';
import {useState, useEffect} from "react"
import Home from "./Components/Hero"
import Memorial from "./Components/Memorial"
import Nav from './Components/Nav';
import useFetch from './Components/hooks/useFetch';
function App() {
  // const [setIsMobileView, isMobileView] = useState(false)

  const [isMobile, setIsMobile] = useState(false);
  const endpoints = ["events", "commanders-messages","landing-pages"];

  const { loading, data } = useFetch(endpoints);


  console.log(data)

  useEffect(() => {
    const handleMobileView = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    //Listening for window resize events
    window.addEventListener("resize", handleMobileView);

    return () => {
      window.removeEventListener("resize", handleMobileView);
    };
  },[]);

  return (

    <div className='bg-black top-0 overflow-x-hidden'>
      <Nav  isMobile = {isMobile} />
    <Routes>
      <Route path = "/" element = {<Home data = {data} loading = {loading} isMobile = {isMobile} />} />
      <Route path = '/memorial' element = {<Memorial  isMobile = {isMobile} />} />
    </Routes>
    </div>
  );
}

export default App;
