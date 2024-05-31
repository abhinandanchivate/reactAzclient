import {
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "../types/authTypes";

const authInitialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
};

export default (state = authInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
    // token should be added from payload to token field in authstate.
    // isAuthenticated : true loading: false user : null
    case REGISTER_SUCCESS:
      return { ...state, ...payload, isAuthenticated: true, loading: false };
    // ...payload ==> token ===> authinitialstate.token = token

    case REGISTER_FAIL:
      return { ...state, ...payload };
    default:
      return state;
  }
};

/*
1. packages : redux react-redux uuid redux-devtools-extension redux-thunk -
2. create a store folder ==> index.js(to write code for createStore method
    we passed 3 arguments initialstate ({} ) , rootReducer, middleware-Thunk)
    3. rootReducer ==> is going to refer combineReducers function from redux to hold the details about all module level reducers.
    4. we started working with index.js from src==> index component ==> <provider> element and provided store prop value =(via store object from our store folder.)
    5. we are done with our one time setup and now we can start working with module level reducers , actions, and components.
    6. we create redux folder in auth module we created 3 folders : action(to hold the module level actions for redux env.), reducers(to do changes for the data in main store), types(comm purpose).
    7. we generated the authReducer  function via rxreducer option(es6 extn).  
    8 changed {type, payload} to action and inside the reducer function 
    we destructured it  like const {type, payload} = action (to have simplicity in arg list)
    9. we started writing switch cases  : for every case we used const flag declared in types folder. 
    10. we defined the cases and we have returned {...state, ...payload, isAuthenticated: value, loading:value} here isAuthenticated , loading are the some of fields from the initialstate of reducer.
    11.  we started working with actions(register/login) we created function = export register=(data)=>async(dispatch)=>{}
    data:  will come from loginAction/RegisterAction call from the component.
    dispatch : to take the output from the rest call to the main store.
    and it will share these details with respective reducers.  
    12. will take you to the authReducer ==> will check matching type by comparing  the swich case.
    13. wherever the match is found then it will return that data to the store and do the changes accordingly.

    component in redux env. : 
    1. we will the component via rfcreduxp command(es7 extn)
    2. take the html template
    3. provide the mapstatetoprops : 
    a. here ask the question to user story regarding the requied fields from the reducer's initial state.  
    b. according to the answers pls declare those fields in mapstatetoprops
    4. go to the component's arg list and provide the prop details based on mapstatetoprops in the list with { } specs.
    5. go to PropTypes declaration and provide the prop details based on mapstatetoprops/mapdispatchprops in the
   6. import the action 
    7.  write the action details in the mapdispatchtoprops 
    8. add the action in the component's arg list.
    9. add the proptype declaration in PropTypes for action.
    10. start working for usestate spec.
    11. destructre the usestate object.
    12. provide the event handlers .
    13. call the action in event handlers as per the need.
    

*/
