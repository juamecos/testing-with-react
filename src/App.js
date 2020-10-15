import React from "react";
import Header from "./components/Header";
import Headline from "./components/Headline";
import "./app.scss";
function App() {
  return (
    <div className="app">
      <Header />
      <section className="main">
        <Headline header="hello" desc="Clock the button to render posts" />
      </section>
    </div>
  );
}

export default App;
