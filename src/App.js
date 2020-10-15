import React from "react";
import Header from "./components/Header";
import Headline from "./components/Headline";
import "./app.scss";

const tempArr = [
  {
    fName: "Joe",
    lName: "Bloggs",
    email: "joebloggs@gmail.com",
    age: 23,
    onlineStatus: false,
  },
];

function App() {
  return (
    <div className="app">
      <Header />
      <section className="main">
        <Headline
          header="Hello"
          desc="Clock the button to render posts"
          tempArr={tempArr}
        />
      </section>
    </div>
  );
}

export default App;
