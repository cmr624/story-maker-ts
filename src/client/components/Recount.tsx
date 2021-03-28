import React from 'react';
import {RecountContainerProps} from './RecountContainer';

const Recount = (props : RecountContainerProps) => {
    return (
        <div>
           Here is your story! 
           {props.story}
        </div>
    );
}

export default Recount;
