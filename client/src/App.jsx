import './App.css';
import HeroSection from './components/HeroSection';

function App() {

  return (

    <div className="container">
      <nav>
        <div className='navbar'>
          <img src="/logoNav.png"  alt="BookHaven Logo" className="logo" />
          <ul className='navlinks'>
            <li><a href="">Home</a></li>
            <li><a href="">Books</a></li>
            <li><a href="">Share Book</a></li>
            <li><a href="">More</a></li>
          </ul>
          <button className="btn">Sign In</button>
        </div>
      </nav>

      <HeroSection />
    </div>
  )
}

export default App
