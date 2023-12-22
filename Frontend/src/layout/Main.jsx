import { Outlet } from "react-router-dom"
import Nav from "../coponents/Nav"

const Main = () => {
  return (
    <section className="main-con">
      <Nav />
      <Outlet />
    </section>
  )
}

export default Main