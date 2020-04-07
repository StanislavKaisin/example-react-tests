import React from "react";
import Header from "./components/Header";
import HeadLine from "./components/HeadLine";
import "./App.scss";

const tempArray = [
  {
    fName: "joe",
    lName: "blog",
    email: "joeblog@gmail.com",
    age: 25,
    onlineStatus: true,
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <HeadLine
          header={"posts"}
          description="clickthe button to render posts"
          tempArray={tempArray}
        />
      </section>
    </div>
  );
}

export default App;

// "test": "react-scripts test",
