import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/home/Home';
import Blog from './components/main/Blog';




function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Blog/>
      <Footer/>
    </>
  );
}

export default App;
