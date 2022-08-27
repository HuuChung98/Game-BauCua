import { combineReducers } from "redux";
import baucuaReducer from "./baucua"; 

const rootReducer = combineReducers({
    baucua: baucuaReducer,
});

export default rootReducer;