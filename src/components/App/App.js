import React from "react";
import CatsBag from "../../containers/CatsBag";
import ClowderList from "../../containers/ClowderList";
import { format } from "date-fns";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Catrancher</h1>
        <p className="show-date">{format(new Date(), "eeee, MMM d, uuuu")}</p>
      </header>
      <main className="main-content">
        <CatsBag />
        <ClowderList />
      </main>
    </div>
  );
};

export default App;
