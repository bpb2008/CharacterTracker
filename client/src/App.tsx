import React from "react"; 
import { Outlet } from "react-router-dom"; 
import './App.css'
import NavBar from "./navigation/NavBar";
import Header from "./components/Header";


const App: React.FC = () => {

  return (
    <>
    <NavBar /> 
    <Header />
    <Outlet /> 
    </>
  )
}

export default App
