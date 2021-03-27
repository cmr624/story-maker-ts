import React from 'react';
import Contribution from './Contribution';

/**
 * contains the GameView component and passes props based on the current state of game / round
 * This class is responsible for posting user input to the server
 */
const ContributionContainer = () => {
    return (
        <div>
            <p>Contribution Container, you've got 2 seconds!</p>
            <Contribution/>
        </div>
    );
}

export default ContributionContainer;
