import logo from './logo.svg';
import './App.css';
import Header from "./Header.js"
import Footer from "./Footer.js"
import MainComponent from "./MainComponent.js"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Header />
      <MainComponent />
      <Footer />
    </div>
  )
}

export default App;
