import "./App.css";
import React, { useEffect } from "react";
import Home from "./container/Home/Home";
import { Route, Switch } from "react-router-dom";
import Gym from "./container/Gym/Gym";
import Trainers from "./container/Trainers/Trainers";
import DetailForm from "./container/DetailForm/DetailForm";
import { WOW } from "wowjs";

function App() {
  useEffect(() => {
    const wow = new WOW({
      offset: 100,
      mobile: true,
      live: true,
    });

    wow.init();
  }, []);
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/gym" exact component={Gym} />
        <Route path="/trainers" exact component={Trainers} />
        <Route path="/form" exact component={DetailForm} />
      </Switch>
    </div>
  );
}

export default App;
