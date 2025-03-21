import React, { useState } from "react";
import "./DungeonBook.css";

const DungeonBook = () => {
    const [page, setPage] = useState(1);

    // Téma oldalak, amelyeket megjelenítünk
    const pages = [
        {
            title: "Introduction Hero And NPC's",
            content: ` Dungeon Valley Explorer is a text-based, guided game.
                        Dungeon Valley Explorer takes place in a fictional world filled with elements from the knightly age and various allusions, as well as different locations and battles, which are resolved through text-based options.
                        There are various NPCs in different places who can be asked for help.
                        However, there is also another way to seek assistance: the aids within the attack, which include the Skill and Magic sections.

                        Hero:
                        You are the main character that you control in the game, and here is what you should know about him:
                        You can name your hero! The hero has physical protection, magical protection, health, ability, and experience (which you can accumulate through experience points).
                        Of course, you also play as the hero, so you can track these attributes during the game.
                        We receive different weapons and armor that can help us in battles.
                        The hero’s abilities are not overlooked either. He has two types of abilities:

                        One type is a specific skill, like better sword handling.
                        The other type is a fantasy-based ability, such as a super-powerful blow or punch.
                        The hero also has his own magic, which can heal his life (Self-care/Heal).
                        NPCs
                        NPCs are important to the hero, as they assist him in several ways during the adventure.
                        NPCs can give you small quests or special potions that provide temporary extra abilities.
                        Each NPC has a name, a detailed description, health, physical protection, magical protection, and experience.
                        NPCs (Non-Player Characters) also have different levels.
                        They carry weapons and armor that they can use to help us. Like the hero, they each have their own abilities, and every NPC is unique!
                        Some NPCs will join us as teammates and fight alongside us, but not all NPCs will do so.
                        Some may only provide a charm or a small amount of help before we continue. `,
        },
        {
            title: "Monsters and the race",
            content: ` Races play a special role in the game, as they have many characteristics.
                        Each race has a name and detailed description within the game.
                        These races can deal lethal damage in the game, so be cautious around them.
                        However, some races deal weaker damage, and while they still have resistance, their attacks are less dangerous.
                        The damage levels are: neutralizing < tolerant < resistant < weak < deadly.
                        These are the levels of damage different races can deal.

                        Monsters also play an important role in the game, as they are the enemies you fight against.
                        Monsters have health, physical protection, and magical protection.
                        Their offensive power varies, and they have abilities that they use during combat.
                        Monsters also have their own species and behaviors, which influence how they act during combat.
                        They appear in various locations with varying strengths!

                        At this point, AI comes into play, determining the thinking and behavior of monsters.
                        The AI must randomly choose one of the available behaviors for monsters in combat. `,
        },    
        {
            title: "Dungeon and the Environmental Hazards",
            content: "Explore how quests work, how you can progress, and the rewards you will earn...",
        },
        {
            title: "Combat System",
            content: "The combat system is in texting.",
        },
        {
            title: "Inventory Management",
            content: "During exploration, you can use items and potions outside of combat, e.g. :(Healing potion, Mana potion). Items and potions that have a combat effect cannot be used in this way.",
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
