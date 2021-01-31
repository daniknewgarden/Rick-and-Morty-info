import React, { useState, useEffect } from "react";
//Styles
import "./App.css";
//Routing
import { Route, useHistory } from "react-router-dom";
//Pages
import HomePage from "./Pages/Home";
import InfoPage from "./Pages/Info";
function App() {
  //Routing
  const history = useHistory();

  useEffect(() => {
    history.push("/home");
  }, [history]);

  //States
  const [characterId, setCharacterId] = useState<string | null>(null);
  const [loadImage, setLoadImage] = useState<boolean>(false);
  const [loadEpisode, setLoadEpisode] = useState<boolean>(false);

  return (
    <div className="App">
      <Route path="/home">
        <HomePage
          selectedCharacter={characterId}
          setCharacterId={(id: string) => setCharacterId(id)}
          setLoadImage={(value: boolean) => setLoadImage(value)}
          setLoadEpisode={(value: boolean) => setLoadEpisode(value)}
        />
      </Route>
      {characterId && (
        <Route path="/info">
          <InfoPage
            id={characterId}
            loadImage={loadImage}
            loadEpisode={loadEpisode}
            setCharacterId={(id: null) => setCharacterId(id)}
            setLoadImage={(value: boolean) => setLoadImage(value)}
            setLoadEpisode={(value: boolean) => setLoadEpisode(value)}
          />
        </Route>
      )}
    </div>
  );
}

export default App;
