 

 // create a makeStore function
import { Context, MakeStore, createWrapper } from "next-redux-wrapper";
import { applyMiddleware, createStore } from "redux";
import {RootState, reducer} from "./reducers";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";

 const makeStore: MakeStore<RootState> = (context: Context) => createStore(reducer, applyMiddleware(thunk));

 // export an assembled wrapper
 export const wrapper = createWrapper<RootState>(makeStore, {debug: true});

 export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>