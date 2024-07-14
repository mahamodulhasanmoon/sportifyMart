import { RouterProvider } from "react-router-dom"
import { routes } from "./routes"
import { Provider } from "react-redux"
import { store } from "./redux/store"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="bg-backgroundColor">
      <Provider store={store}>
      <RouterProvider router={routes}/>
      <ToastContainer />

      </Provider>
    </div>
  )
}

export default App
