import { getShortenedURL } from "./APICall";
import "./App.css";
import { useEffect, useState } from "react";

function HeadingText({ heading }) {
  return <span>{heading}</span>;
}

function App() {
  const [url, setUrl] = useState("");
  const [res, setRes] = useState("");

  useEffect(() => {}, [res]);

  async function handleClick() {
    const res = await getShortenedURL(url.toString());
    console.log(res.result_url);
    setUrl("");
    setRes(res.result_url);
  }

  function handleInputChange(e) {
    setUrl(e.target.value);
    console.log(url);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="div1">
          <HeadingText heading="The URL Shortener App" />
          <input
            type="text"
            placeholder="Insert large URL"
            className="inputURL"
            onChange={handleInputChange}
          />
          <button onClick={handleClick}>Shorten</button>
        </div>
        <hr />
        <div className="div1">
          <HeadingText heading="The Shortened URL" />
          <input className="inputURL" type="url" value={res}></input>
        </div>
      </header>
    </div>
  );
}

export default App;
