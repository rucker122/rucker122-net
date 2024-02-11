import './App.css';
import { useEffect } from 'react';
import { Parallax } from './parallax/p';

function App() {
  useEffect(() => {
    var t = new Parallax('.App-header');
  });
  const ICON_SIZE = 32;
  return (
    <div className="App">
      <header className="App-header">
        <p className="header">RUCKER122</p>
        <ul className="social">
          <li><img src="/img/x.png" width={ICON_SIZE} alt="x" /></li>
          <li><img src="/img/codepen.png" width={ICON_SIZE} alt="codepen" /></li>
          <li><img src="/img/github.svg" width={ICON_SIZE} alt="github" /></li>
        </ul>
      </header>
    </div>
  );
}

export default App;
