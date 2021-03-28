import React from 'react';
import Lobby from './Lobby';

interface LobbyContainerProps {
    players : [string];
}

const LobbyContainer = () => {

    // presumably fetch lobby data here ? and render

    return (
        <Lobby/>
    );
}

export default LobbyContainer;
