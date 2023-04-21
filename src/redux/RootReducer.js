import { CALCULATOR_KEY, calculatorReducer } from "./calculatorRedux/Calculator.reducer";
import { combineReducers } from "redux";

let rootReducer = combineReducers({
    [CALCULATOR_KEY]: calculatorReducer
})

export {rootReducer}