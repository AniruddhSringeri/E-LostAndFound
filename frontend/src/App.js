import './App.css';
import Header from "./Header.js";
import Footer from "./Footer.js";
import MainComponent from "./MainComponent.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect} from "react"

import { Provider } from 'react-redux'
import store from './store'
import { loadUser } from './actions/authActions'


function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(()=>{
    store.dispatch(loadUser())
  },[])
  return (
    <Provider store={store}>
      <div>
        <Header />
        <MainComponent />
        <Footer />
      </div>
    </Provider>
  )
}

export default App;