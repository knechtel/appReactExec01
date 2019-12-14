import * as actionTypes from './actionTypes';

export const saveResult = ( res ) => {
    // const updatedResult = res * 2;
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    };
}

export const saveResult1 = ( res ) => {
    
    
    return {
        type: actionTypes.FLAG1,
        result: res
    };
}

export const storeResult = ( res ) => {
    return (dispatch, getState) => {
        setTimeout( () => {
            // const oldCounter = getState().ctr.counter;
            // console.log(oldCounter);
            dispatch(saveResult(res));
        }, 2000 );
    }
};

export const storeResult1 = ( res ) => {
    return (dispatch, getState) => {
        
             
            
            dispatch(saveResult1(res));
        
    }
};

export const deleteResult = ( resElId ) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resElId
    };
};