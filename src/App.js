import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [songList, songListSet] = useState([
    "Purple Haze by Jimi Hendrix",
    "Whole Lotta Love by Led Zeppelin",
    "Sympathy for the Devil by The Rolling Stones",
    "Under Pressure by Queen & David Bowie",
    "Baba O’Riley by The Who"
  ]);
  const [songRatings, songRatingSet] = useState([
    "5/5",
    "4/5",
    "4/5",
    "4/5",
    "3/5"
  ]);
  const itemListDict = {
    Rock: {
      "Purple Haze by Jimi Hendrix": "5/5",
      "Whole Lotta Love by Led Zeppelin": "4/5",
      "Sympathy for the Devil by The Rolling Stones": "4/5",
      "Under Pressure by Queen & David Bowie": "4/5",
      "Baba O’Riley by The Who": "3/5"
    },
    "Hip-Hop": {
      "Grandmaster Flash and the Furious Five, The Message": "5/5",
      "Sugarhill Gang, Rapper's Delight": "4/5",
      "Afrika Bambaataa and the Soulsonic Force, Planet Rock": "4/5",
      "Run-DMC, Sucker M.C.'s": "4/5",
      "Geto Boys,Mind Playing Tricks on Me": "3/5"
    },
    Jazz: {
      "Take Five by Dave Brubeck": "5/5",
      "So What by Miles Davis": "4/5",
      "Take The A Train by Duke Ellington": "4/5",
      "	Round Midnight by Thelonious Monk": "4/5",
      "	My Favorite Things by John Coltrane": "3/5"
    },
    Folk: {
      "This Land is Your Land – Woody Guthrie": "5/5",
      "Blowin’ in the Wind – Bob Dylan": "4/5",
      "City of New Orleans – Steve Goodman": "4/5",
      "If I Had a Hammer – Pete Seeger": "4/5",
      "Where Have All The Flowers Gone – The Kingston Trio": "3/5"
    }
  };

  function getButtonPressed(event) {
    var songList = itemListDict[event.target.innerHTML];
    //console.log(songList);
    songListSet(Object.keys(songList));
    songRatingSet(Object.values(songList));
    //console.log(Object.keys(songList));
    //console.log(Object.values(songList));
  }

  const itemList = Object.keys(itemListDict);
  return (
    <div className="App">
      <div className="bodyContent">
        <div className="title">
          <h1>🎼 Good Music</h1>
          <h5>
            Check out my favourite music. Select any Genere to get started.
          </h5>
        </div>
        <div className="buttonBar">
          {itemList.map(function (item) {
            return (
              <button
                key={item}
                onClick={(event) => {
                  getButtonPressed(event);
                }}
                className="genereButton"
              >
                {item}
              </button>
            );
          })}
        </div>
        <hr style={{ width: "80%" }} />
        <div className="itemList">
          {songList.map(function (song, index) {
            return (
              <div className="tile">
                <div className="tileHeader">{songList[index]}</div>
                <div>
                  🌟 Rating :{" "}
                  <span className="tileContent">{songRatings[index]}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
