import React from 'react';

import { Switch, Route} from "react-router-dom";

import './App.css';
import RoomPage from './pages/room/room.component';
import JoinRoomPage from './pages/joinroom/joinroom.component';
import HomePage from './pages/homepage/homepage.component';

function App() {
  return (

<div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/join-room" component={JoinRoomPage} />
        <Route exact path="/room" component={RoomPage} />

      </Switch>
</div>

   
  );
}

export default App;
