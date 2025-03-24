import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap import
import '../css/Web.css'; // Egyedi CSS import (az elérési út a projektedtől függ)
import DungeonBook from './DungeonBook'; // DungeonBook komponens importálása

const App = () => {
  const handleLogout = () => {
    alert("Sikeres kijelentkezés!");
    window.location.href = "/";
  };

  return (
    <>
      <div className="header">
        <div className="header-left">
          <a href="#">Dungeon Valley Explorer</a>
        </div>
        <div className="header-right">
          <button id="logoutButton" className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      <div className="castle-background">
        <img src="/AiSlop.jpg" alt="Castle" id="castle" />
      </div>

      <div className="main">
        <h1>Welcome to Dungeon Valley Explorer</h1>
        <h2>Your journey begins here.</h2>
        <br />
        <br />
        <div className="row">
          <div className="col-12">
            <h1>Learn about the game.</h1>
            <br />
            <div className="col-md-12">
              <p>
                The game will be a text-based dungeon crawler. There is a Main menu with account management system
                e.g. :(add new user), an easy-to-understand <a href="#">tutorial</a>, a city including shops, quests,
                and party management. From here, you can start exploring a dungeon. The combat system is the most complex part.
                There is also an inventory system with usable items and consumables e.g. :(Healing potion).
              </p>
              <br />
            </div>
            <DungeonBook />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;