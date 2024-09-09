
import Header from "./assets/Header";
import { Outlet } from "react-router";


export default function App() {

  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}
