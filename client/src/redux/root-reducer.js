const INITIAL_STATE =  {
    identity: ''
};

const rootReducer = (state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case 'DUMMY_ACTION':
            return {
                ...state
            };
        default:
            return state;
    }
} 

export default rootReducer;