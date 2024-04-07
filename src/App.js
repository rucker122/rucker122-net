import './App.css';
import { useEffect } from 'react';
import { Parallax } from './parallax/p';

function App() {
  const outsiteLinks = {
    x: 'https://twitter.com/Ruckerlol',
    codepen: 'https://codepen.io/rucker122/',
    github: 'https://github.com/rucker122'
  }
  useEffect(() => {
    new Parallax('.App-header', { moveDirection: true });
    new Parallax('.spotlight', { moveDirection: false });
  });

  const ICON_SIZE = 32;
  return (
    <div className="App">
      <header className="App-header">
        <p className="header">Rucker122</p>
        <ul className="social">
          <li>
            <a href={outsiteLinks.x} target='_blank' rel='noopener noreferrer'>
              <img src="/img/x.png" width={ICON_SIZE} alt="x" />
            </a>
          </li>
          <li>
            <a href={outsiteLinks.codepen} target='_blank' rel='noopener noreferrer'>
              <img src="/img/codepen.png" width={ICON_SIZE} alt="codepen" />
            </a>
          </li>
          <li>
            <a href={outsiteLinks.github} target='_blank' rel='noopener noreferrer'>
              <img src="/img/github.svg" width={ICON_SIZE} alt="github" />
            </a>
          </li>
        </ul>
      </header>
      <div className='spotlight'></div>
    </div>
  );
}

export default App;
