import { combineReducers } from "redux";
import { ticketReducer } from "./ticketsRedicer";
import { filterReducer } from "./filterReducer";

export const rootReducer = combineReducers({
    tickets: ticketReducer,
    filters: filterReducer
})

export type RootState = ReturnType<typeof rootReducer>