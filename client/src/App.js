import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import CreatePirate from "./views/addpirate";
import AllPirates from "./views/allpirates";
import OnePirate from "./views/viewpirate";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/pirates'>
          <AllPirates/>
        </Route>
        <Route exact path='/pirate/new'>
          <CreatePirate/>
        </Route>
        <Route exact path='/pirate/:id'>
          <OnePirate/>
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
