import { configureStore, Action } from "@reduxjs/toolkit";

//import counterReducer from './feature/counter/counterSlice';

export function makeStore() {
  return configureStore({
    reducer: {
      // counter: counterReducer
    },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
