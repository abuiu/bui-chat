import React from "react";
import CustomButton from "../CustomButton/custombutton.component";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ConnectingButtons = () => {
  let history = useHistory();

  const pushToJoinRoomPage = () => {
    history.push("/join-room");
  };

  const pushToJoinRoomPageAsHost = () => {
    history.push("/join-room?host=true");
  };

  return (
    <div className="connecting_buttons_container">
      <CustomButton
        buttonText="Join a meeting"
        onClickHandler={pushToJoinRoomPage}
      />
      <CustomButton
        createRoomButton
        buttonText="Host a meeting"
        onClickHandler={pushToJoinRoomPageAsHost}
      />
    </div>
  );
};

export default ConnectingButtons;
