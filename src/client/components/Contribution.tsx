import React from 'react';
import TextField from '@material-ui/core/TextField';
const ContributionView = () => {
    return (
        <>
        <form onSubmit={(e)=>console.log(e)}>
            <TextField 
            id="standard-basic" 
            label="Type in your sentence here!"
            color="primary"
            // onChange={(e) => console.log(e)}
            style={{textAlign:'center'}}
            />
        </form>
        </>
    );
}

export default ContributionView;
