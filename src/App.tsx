import { RouterProvider } from "react-router-dom"
import { routes } from "./routes"
import { Provider } from "react-redux"
import { persistor, store } from "./redux/store"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from "redux-persist/integration/react";

function App() {

  return (
    <div className="bg-backgroundColor">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>

        <RouterProvider router={routes}/>
        <ToastContainer />
        </PersistGate>
    

      </Provider>
    </div>
  )
}

export default App
