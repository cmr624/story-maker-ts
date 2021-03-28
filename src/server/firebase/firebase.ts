import firebase from 'firebase/app';
import 'firebase/database';

const config = { 
    apiKey: "AIzaSyCcr5ogB7GI52x6ihjri-geoIw_YcVQpGA",
    authDomain: "story-maker-c573f.firebaseapp.com",
    databaseURL:"https://story-maker-c573f-default-rtdb.firebaseio.com/",
    projectId: "story-maker-c573f",
    storageBucket: "story-maker-c573f.appspot.com",
};


export default class Firebase {
    
    public db: firebase.database.Database;

    constructor() {
        firebase.initializeApp(config);
        this.db = firebase.database();
    }

    database = () => {
      return this.db;
    }
}