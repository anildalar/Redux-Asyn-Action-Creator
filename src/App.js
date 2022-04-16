import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import fetchUserAsyncActionCreator from './redux/actionCreators/actionCreators';

function App() {
  //1. State/Hook
  let state = useSelector(storeObject=>storeObject);
  let dispatch = useDispatch();
  //2. Function defination


  //3. Return Statement
  return (
    <div className="App">
      <button onClick={(e)=>{ dispatch(fetchUserAsyncActionCreator()) }}>Get Users</button>
        {console.log(state.users)}
        {
          state.isLoading && 
          <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        }
        
        { 
          state.users.length > 0 && 
          state.users.map((cv,idx,arr)=>{
            return (
                      <div key={idx}>
                        <h1>Name{cv.name}</h1>
                        <h1>Username :- {cv.username}</h1>
                        <hr />
                      </div>
                  )
          })
          
        }
    </div>
  );
}

export default App;
