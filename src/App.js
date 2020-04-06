import React from "react";
import Header from "./components/Header";
import HeadLine from "./components/HeadLine";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <HeadLine
          header="posts"
          description="clickthe button to render posts"
        />
      </section>
    </div>
  );
}

export default App;

// "test": "react-scripts test",
