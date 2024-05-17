import { Outlet } from "react-router-dom"
import Navbar from "./components/Header/Navbar"
import Footer from "./components/Footer/Footer"
import Navbar1 from "./components/Header/Navbar1"


function App() {

  return (
    <>
    <div className=" flex">
    <Navbar/>
    <div className=" w-full">
      <Navbar1/>
      <Outlet/>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default App
