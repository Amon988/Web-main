import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/KezdoLap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const KezdoLap = () => {
    const navigate = useNavigate();

    return (
        <div className="kezdo-lap container-fluid p-0">
            {/* Navigation Bar */}
            <header className="topnav d-flex justify-content-between align-items-center p-3">
                <h1>Dungeon Valley Explorer</h1>
                <div className="button-container">
                    <button className="btn" onClick={() => navigate('/Register')}>
                        Register
                    </button>
                    <button className="btn" onClick={() => navigate('/login')}>
                        Login
                    </button>
                </div>
            </header>

            {/* Informational Section */}
            <section className="Informational">
                <h3>Welcome to Dungeon Explorer!</h3>
                <p className="lead mx-auto w-75">
                    This is our very first game project, created by a small, passionate three-member team. While it may not have the best graphics yet,
                    our goal is to create a fun and engaging experience. We appreciate your support and feedback as we continue improving!
                </p>
            </section>

            {/* Helpful Guides Section */}
            <section className="row align-items-center mb-5">
                <div className="col-md-6 info-block">
                    <h2>Helpful Guides</h2>
                    <ul>
                        <li>✅ Easy-to-understand explanations about game mechanics.</li>
                        <li>✅ Helpful tips and tricks.</li>
                        <li>✅ A whole gallery full of information.</li>
                    </ul>
                </div>
                <div className="col-md-6 text-center">
                    <img src="/oldbook.png"  alt="Helpful Guides" className="img-fluid kep" />
                </div>
            </section>

            {/* Friendly Community Section */}
            <section className="row align-items-center flex-row-reverse mb-5">
                <div className="col-md-6 info-block">
                    <h2>A Friendly Community</h2>
                    <ul>
                        <li>💬 A place to chat about the game.</li>
                        <li>🆘 Ask for help from fellow players.</li>
                        <li>🛡️ Moderated to keep a safe and friendly environment.</li>
                    </ul>
                </div>
                <div className="col-md-6 text-center">
                    <img src="/electonicbook.png" alt="Friendly Community" className="img-fluid kep" />
                </div>
                <div className="col-12">
            <h1>Learn about the game.</h1>
            <br />
            <div className="col-md-12">
              <p>
                The game will be a text-based dungeon crawler. There is a Main menu with account management system
                e.g. :(add new user), an easy-to-understand tutorial, a city including shops, quests,
                and party management. From here, you can start exploring a dungeon. The combat system is the most complex part.
                There is also an inventory system with usable items and consumables e.g. :(Healing potion).
              </p>
              <br />
            </div>
          </div>
            </section>
        </div>
    );
};

export default KezdoLap;