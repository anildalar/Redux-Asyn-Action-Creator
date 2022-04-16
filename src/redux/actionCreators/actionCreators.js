import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "../contant/constants"

let fetchUserRequestActionCreator = ()=>{
    return {
        type:FETCH_USER_REQUEST
    }
}

let fetchUserSuccessActionCreator = (users)=>{
    return {
        type:FETCH_USER_SUCCESS,
        users:users
    }
}
let fetchUserErrorActionCreator = (err)=>{
    return {
        type:FETCH_USER_SUCCESS,
        users:[],
        error:err
    }
}

let fetchUserAsyncActionCreator = ()=>{
    return (dispatch)=>{
        //Thing that can take time goes here
        dispatch(fetchUserRequestActionCreator())
        //Such as api calling
        fetch('https://jsonplaceholder.typicode.com/users').then((d)=>{
            return d.json();
            //console.log(d);      
        }).then((d)=>{
            console.log('This is the data',d);
            dispatch(fetchUserSuccessActionCreator(d))
        }).catch((e)=>{
            dispatch(fetchUserErrorActionCreator(JSON.stringify(e)))
        });
    }
}

export default fetchUserAsyncActionCreator;