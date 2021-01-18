import React from "react";
//Routing
import { useHistory } from "react-router-dom";
import Button from "../Components/Button";
import Title from "../Components/Title";

const InfoPage: React.FC = () => {
  const history = useHistory();

  return (
    <div>
      <Title text="Info page" />
      <Button
        callBack={() => history.push("/home")}
        text="Back to choose"
        ariaLabel="Back"
      />
    </div>
  );
};

export default InfoPage;
