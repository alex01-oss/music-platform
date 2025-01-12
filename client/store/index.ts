import { AnyAction, applyMiddleware, createStore } from "@reduxjs/toolkit";
import { Context, createWrapper } from "next-redux-wrapper";
import { reducer, RootState } from "./reducers";
import { thunk, ThunkDispatch } from "redux-thunk";

const makeStore = (context: Context) => createStore(reducer, applyMiddleware(thunk));

export const wrapper = createWrapper(makeStore, {debug: true});

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>