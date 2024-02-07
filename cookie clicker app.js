import './App.css';

function App() {
  const imageUrl = "https://cdn.discordapp.com/attachments/762762709963112502/1204912079820034129/image0.jpg?ex=65d674d2&is=65c3ffd2&hm=8f645cd9ad9ab77b3f26f7f534fa58c7c206ee74630d56fc7cb084052a20e57e&";

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
