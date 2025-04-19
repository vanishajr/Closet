import React from "react"
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import Navbar from "./components/navbar"

function App() {
  return (
    <div className="min-h-screen font-mont text-greyD font-medium bg-beige m-3 p-3 rounded-xl">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path = "/create" element={<CreatePage />} />
      </Routes>
    </div>
  )
}

export default App