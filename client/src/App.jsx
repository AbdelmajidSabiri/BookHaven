import './App.css';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar'
import PopularReads from './components/PopularReads';

function App() {

  return (

    <div className="container">
      <NavBar/>
      <HeroSection />
      <PopularReads/>
    </div>
  )
}

export default App
