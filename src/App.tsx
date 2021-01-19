import React, { useState, useEffect } from "react";
//Styles
import "./App.css";
//Routing
import { Route, useHistory } from "react-router-dom";
//Pages
import HomePage from "./Pages/Home";
import InfoPage from "./Pages/Info";
function App() {
  const history = useHistory();

  useEffect(() => {
    history.push("/home");
  }, []);

  //States
  const [characterId, setCharacterId] = useState<string | null>(null);
  const [loadImage, setLoadImage] = useState<boolean>(false);
  const [loadEpisode, setLoadEpisode] = useState<boolean>(false);

  return (
    <div className="App">
      <Route path="/home">
        <HomePage />
      </Route>
      <Route path="/info">
        <InfoPage id="1" loadImage={loadImage} loadEpisode={loadEpisode} />
      </Route>
    </div>
  );
}

export default App;
