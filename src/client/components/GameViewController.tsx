import React, {useState, useEffect} from 'react';
import ContributionContainer from './ContributionContainer';
import LobbyContainer from './LobbyContainer';

enum GAME_STATE {
    LOBBY,
    CONTRIBUTION,
    RECOUNT
}

/**
 * Controls the current game view based on the game state
 */
const GameViewController = () => {
    
    const [gameState, setGameState] = useState(GAME_STATE.CONTRIBUTION);

    // setInterval(() => setGameState((gameState+1)%2), 3000);
    setTimeout(() => setGameState(GAME_STATE.LOBBY), 2000);
    return getGameView(gameState);
}

/**
 * @todo is this the best way to switch states? we prob want to use useEffect on gameState variable.... can we export setGameState?
 * Something weird with this. will come back to it when we flesh out
 * @param state 
 */
const getGameView = (state : GAME_STATE) : JSX.Element => {
    switch (state) {
        case GAME_STATE.LOBBY:
            return <LobbyContainer/>
        case GAME_STATE.CONTRIBUTION:
            return <ContributionContainer/>
        default:
            return <ContributionContainer/>
    }
}

export default GameViewController;
