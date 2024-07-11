import { RouterProvider } from "react-router-dom"
import { routes } from "./routes"

function App() {

  return (
    <div className="bg-backgroundColor">
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App
