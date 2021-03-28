import React, {useState, useEffect} from 'react';
import ContributionContainer from './ContributionContainer';
import LobbyContainer from './LobbyContainer';
import RecountContainer from './RecountContainer';

enum GAME_STATE {
    LOBBY,
    CONTRIBUTION,
    RECOUNT
}

/**
 * Controls the current game view based on the game state
 * @todo this class is scaring me...
 * we have to discuss prop placement / data fetching so it doesn't get stupid... i also 
 * have heard about the *React context API* which is supposed to be react's native answer to REDUX
 * which would be the (OVER-ENGINEERED) "solution" to this kind of problem... 
 * 
 */
const GameViewController = () => {
    
    const [gameState, setGameState] = useState(GAME_STATE.CONTRIBUTION);

    // setInterval(() => setGameState((gameState+1)%2), 3000);
    setTimeout(() => setGameState(GAME_STATE.LOBBY), 2000);
    return getGameView(gameState);
}

/**
 * @todo is this the best way to switch states? 
 * Something weird with this. will come back to it when we flesh out
 * @param state 
 */
const getGameView = (state : GAME_STATE) : JSX.Element => {
    switch (state) {
        case GAME_STATE.LOBBY:
            return <LobbyContainer/>
        case GAME_STATE.CONTRIBUTION:
            return <ContributionContainer/>
        case GAME_STATE.RECOUNT:
            /**
             * @todo REMOVE & discuss with elliot proper data placement in tree.
             * right now, it's at the "Game View Controller" level, 
             * but we prob need to look into contextAPI here.
             */
            let story = "this is the test story";
            return <RecountContainer story={story}/>
        default:
            return <ContributionContainer/>
    }
}

export default GameViewController;
