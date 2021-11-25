import { combineReducers } from "redux";
import { ticketReducer } from "./ticketsRedicer";

export const rootReducer = combineReducers({
    tickets: ticketReducer
})

export type RootState = ReturnType<typeof rootReducer>