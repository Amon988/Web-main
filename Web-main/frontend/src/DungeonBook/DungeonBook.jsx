import React, { useState } from "react";
import "./DungeonBook.css";

const DungeonBook = () => {
    const [page, setPage] = useState(1);

    // Téma oldalak, amelyeket megjelenítünk
    const pages = [
        {
            title: "Introduction",
            content: "Welcome to the Dungeon Valley Explorer world. This is your guide to all things in the game...",
        },
        {
            title: "Game Mechanics",
            content: "Learn about the core mechanics of the game. Combat, inventory, and quests...",
        },
        {
            title: "Quests and Progression",
            content: "Explore how quests work, how you can progress, and the rewards you will earn...",
        },
        {
            title: "Combat System",
            content: "The combat system is a tactical turn-based system that requires strategy and timing...",
        },
        {
            title: "Inventory Management",
            content: "Here is how you manage your items, from weapons to consumables...",
        }
    ];

    const nextPage = () => {
        if (page < pages.length) {
            setPage(page + 1);
        }
    };

    const prevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    return (
        <div className="dungeon-book-container">
            <div className="book">
                <div className="page">
                    <h2>{pages[page - 1].title}</h2>
                    <p>{pages[page - 1].content}</p>
                </div>
            </div>
            <div className="navigation">
                <button onClick={prevPage} disabled={page === 1}>Previous</button>
                <button onClick={nextPage} disabled={page === pages.length}>Next</button>
            </div>
        </div>
    );
};

export default DungeonBook;
