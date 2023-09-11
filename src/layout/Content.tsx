import Header from "../components/Header"
import Dashboard from "../pages/Dashboard"
import { Routes, Route } from "react-router-dom"
import Shop from "../pages/Shop"
import Analytics from "../pages/Analytics"
import Notifications from "../pages/Notifications"

function Content() {
  return (
    <div className=" flex-1 px-3 sm:px-4 md:px-6 py-3">
      <Header/>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/Shop" element={<Shop/>} />
        <Route path="/Notifications" element={<Notifications/>} />
        <Route path="/Analytics" element={<Analytics/>} />
      </Routes>
    </div>
  )
}

export default Content