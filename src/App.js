import './App.css';

function App() {
  const ICON_SIZE = 36;
  return (
    <div className="App">
      <header className="App-header">
        <p class="header">RUCKER122</p>
        <ul class="social">
          <li><img src="/svg/codepen.png" width={ICON_SIZE} /></li>
          <li><img src="/svg/github.svg" width={ICON_SIZE} /></li>
        </ul>
      </header>
    </div>
  );
}

export default App;
