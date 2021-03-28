import React from 'react';
import Recount from './Recount';

export interface RecountContainerProps{
    story:string;
}

const RecountContainer = (props: RecountContainerProps) => {
    // fetch data here? remove passed props? idk...


    return (
        <div>
            <Recount {...props}/>           
        </div>
    );
}

export default RecountContainer;
