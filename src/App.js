import logo from './logo.svg';
import './css/main.css';

import Card from './components/Card/Card';
import CardFilm from './components/CardFilm/CardFilm';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header>
        <img src='onair-logo.png'/>
          <Navbar />
      </header>
      
      <div className='slider-show'>
        <div className='slide'>
  
        <div>
          <div className='free-trial'>
            <h2>Dive into a <b>universe</b> of un-ending content and channels</h2>
            <button>Start FREE trial</button>
          </div>
          <div className='swiper'>
            <div className='swipe-left'>
            </div>
            <div className='swipe-line'>
              <div className='line'></div>
              <div className='line'></div>
              <div className='line'></div>
              <div className='line'></div>
            </div>
            <div className='swipe-right'>
            </div>
            </div>
        </div>

        </div>

      </div>
      <h2>Recomended channels</h2>
      <div className='recomends'>
        <Card img='img1.png'/>
        <Card img='img2.png'/>
        <Card img='img3.png'/>
        <Card img='img4.png'/>
        <Card img='img5.png'/>
        <Card img='img6.png'/>
      </div>
      <h2>New Channels</h2>
      <div className='new-channels'>
        <Card img='img6.png'/>
        <Card img='img5.png'/>
        <Card img='img4.png'/>
        <Card img='img3.png'/>
        <Card img='img2.png'/>
        <Card img='img1.png'/>
      </div>
      <h2>Recomended channels</h2>
      <div className='films'>
        <Card img='film1.png' />
        <Card img='film2.png' />
        <Card img='film3.png' />
        <Card img='film4.png' />
        <Card img='film5.png' />
        <Card img='film6.png' />
      </div>
      <h2>Games</h2>
      <div className='games'>
        <CardFilm img='game1.png'/>
        <CardFilm img='game2.png'/>
        <CardFilm img='game3.png'/>
        <CardFilm img='game4.png'/>
        <CardFilm img='game5.png'/>
        <CardFilm img='game6.png'/>
        <CardFilm img='game7.png'/>
        <CardFilm img='game8.png'/>
      </div>
      <footer>
        <div className='footer-item'>
          <button>+</button>
          <h3>Sign In</h3>
        </div>
        <div className='footer-item'>
        <button>+</button>
          <h3>Company</h3>
        </div>
        <div className='footer-item'>
          <button>+</button>
          <h3>Movies</h3>
        </div>
        <div className='footer-item'>
          <button>+</button>
          <h3>Series</h3>
        </div>
        <div className='footer-logo'>
          <img src='wb-logo.png' alt='' />
          <p>
          Hot Africa, we offer original, exclusive and premium stories. Everything you want to watch, anytime, anywhere and as much.
          </p>
        </div>
        <div className='download-app'>
          <img src='appstore.png'/>
          <img src='googleplay.png'/>
        </div>
        <div className='social-network'>
          <a className='facebook' href='#'>
            <img src='facebook.png'/>
          </a>
          <a className='instagram' href='#'>
            <img src='instagram.png'/>
          </a>
          <a className='twitter' href='#'>
            <img src='twitter.png'/>
          </a>
          <a className='youtube' href='#'>
            <img src='youtube.png'/>
          </a>
        </div>
        <p>Terms of use Privacy Policy SiteMap</p>
        <p>Copyright © 2022 Hot Africa.<br /> All rights reserved.</p>
      </footer>      
    </div>
  );
}

export default App;
