//@ts-nocheck
/**
 * NOTE THIS WONT WORK IN TYPESCRIPT. lowkey dont know exactly what it does.
 */
import React from 'react';

const FirebaseContext = React.createContext(null);

export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);

export default FirebaseContext;