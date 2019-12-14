import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility.js';

const initialState = {
    results: [],
    string: '99'
};

const deleteResult = ( state, action ) => {
    const updatedArray = state.results.filter( result => result.id !== action.resultElId );
    return updateObject( state, { results: updatedArray } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.STORE_RESULT :{
             return updateObject( state, { results: state.results.concat( 
                 { id: new Date(), value: action.result } ) } );
            }
        case actionTypes.DELETE_RESULT : return deleteResult(state, action);

        case actionTypes.FLAG :{
           
           
            return updateObject( state, { results: state.results.concat( 
                { id: new Date(), value: action.result } ) } );
      
        }

        case actionTypes.FLAG1 :{
            console.log("FLAG1");
            console.log("aqui >>>>>   "+action.result);
             return updateObject( state, { results: state.results.concat( 
                 {  value: state.string.concat(action.result) } ) } );
       
         }

    }
    return state;
};

export default reducer;