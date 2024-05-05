import { Provider } from "react-redux"
import { store } from "./app/store"
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom"
import Router from "./Router"

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Router />
        <Toaster />
      </Provider>
    </BrowserRouter>
  )
}

export default App
