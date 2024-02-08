import './App.css';

function App() {
  const imageUrl = "https://famouscookies.com/wp-content/uploads/2020/11/Famous-Cookie-Cocolate-Chip-21-1600x1600-1.png";

  return (
    <div className="App">
      <header className="App-header">
        {/* Use the external image URL directly */}
        <img src={imageUrl} className="App-logo" alt="cookie" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
