const { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR } = require("../contant/constants");

let rootReducer = (prevState,action)=>{
    let newState = prevState;
    switch(action.type){
        case FETCH_USER_REQUEST:
            newState = {
                ...newState,
                isLoading:true,
            }
            break;
        case FETCH_USER_SUCCESS:
            newState = {
                ...newState,
                isLoading:false,
                users:action.users
            }
            break;
        case FETCH_USER_ERROR:
            newState = {
                isLoading:false,
                users:[],
                error:action.error
            }
            break;
        default:
    }
    return newState;
  
  }

module.exports = {rootReducer}