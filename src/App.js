import React from "react"
import Routers from "./routes"
import { BrowserRouter } from "react-router-dom"

const App = ({ token }) => {
  return (
    <BrowserRouter>
      <Routers token={token} />
    </BrowserRouter>
  )
}

export default App
