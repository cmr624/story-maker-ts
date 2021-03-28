export default class Round {
    constructor(public stories : [RoundTemplate]){}
}

class RoundTemplate {
    
}

/**
 * Round - a server-side class / state container(?) 
    Contains all stories for the round and 
    Keeps all users in the same state
    will wait for all the responses and change state
    When you create a new round, we need to define a RoundTemplate
 */