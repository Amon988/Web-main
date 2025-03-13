import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/KezdoLap.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const KezdoLap = () => {
    const navigate = useNavigate();

    return (
        <div className="kezdo-lap">
            <div className="topnav">
                <h1>Dungeon Explorer</h1>
                <div className="button-container">
                    <button className="btn" onClick={() => navigate('/signup')}>Sign up</button>
                    <button className="btn" onClick={() => navigate('/login')}>Sign in</button>
                </div>
            </div>

            <div className="Informational">
                <h3>Informational data</h3>
                <div className="info-block">
                    <p>Welcome to our very first game project, Dungeon Explorer! We are thrilled to share this adventure with you, even though it's a work in progress. As a small, three-member team, we are still learning and improving with each step. Please keep in mind that the graphics might not be top-notch yet, and the game might not be as polished as bigger, more developed projects. But what we lack in visuals and perfection, we make up for with passion, creativity, and a desire to provide a fun and engaging experience.</p>
                </div>
            </div>

            <div className="row align-items-center">
                <div className="col-md-6">
                    <h1>Helpful guides</h1>
                    <ul>
                        <li>Easy to understand explanations about game mechanics.</li>
                        <li>Helpful instructions about the game from the book.</li>
                        <li>And a whole gallery full of information</li>
                    </ul>
                </div>

                <div className="col-md-6 text-center">
                    <img src="/electonicbook.PNG" alt="Helpful Guides" id="guides" className="img-fluid" />
                </div>
            </div>

            <div className="row align-items-center flex-row-reverse">
                <div className="col-md-6">
                    <h1>What are we created.</h1>
                    <ul>
                        <li>A place for you to learn about the game.</li>
                        <li>You can read from the book for help.</li>
                        <li>Enjoy our website on the next page.</li>
                    </ul>
                </div>

                <div className="col-md-6 text-center">
                    <img src="/oldbook.PNG" alt="Friendly Community" id="community" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default KezdoLap;
