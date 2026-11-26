import { useState , useEffect, useRef } from 'react';
import SiteLayout from '../layouts/site-layout';

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
        	
          	</SiteLayout>
}
