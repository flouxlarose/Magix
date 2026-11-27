import { useState , useEffect, useRef } from 'react';
import SiteLayout from '../layouts/site-layout';

// TEST
import Card from '../components/card';
const testCards = [
    { id: 4, cost: 2, hp: 3, atk: 2, mechanics: [], uid: 1, baseHP: 3 }, // Carte en main (sans state)
    { id: 10, cost: 3, hp: 2, atk: 3, mechanics: ["taunt", "charge"], uid: 2, baseHP: 3, state: "IDLE" }, // Blessée + Taunt
    { id: 2, cost: 1, hp: 1, atk: 2, mechanics: ["stealth"], uid: 3, baseHP: 1, state: "SLEEP" }, // En sommeil + Stealth
];

export default function Game() {
    
    const stateTimeout = useRef(null);

    const fetchState = () => {
        fetch("/api/game-state.php")
            .then(response => response.json())
            .then(response => {
            console.log(response) // <-- État du jeu, ou message comme : LAST_GAME_WON
            stateTimeout.current = setTimeout(fetchState, 2000);
            });
    }

    useEffect(() => {
        stateTimeout.current = setTimeout(fetchState, 1000);

        return () => {
            if (stateTimeout.current) clearTimeout(stateTimeout.current);
        }
    }, []);
    




  	return  <SiteLayout title="Game">
        <div className="flex gap-4 p-4">
            {testCards.map(card => (
                <Card
                    key={card.uid}
                    card={card}
                    onClick={() => console.log("Carte cliquée :", card.uid)}
                />
            ))}
        </div>
    </SiteLayout>
}
