import { combineReducers } from "@reduxjs/toolkit";

import authenticationReducer from "./authentication/authentication.reducer";

const rootReducer = combineReducers({
    authenticationReducer,
});

export default rootReducer;