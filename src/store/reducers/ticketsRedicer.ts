import { TicketState, TicketActionTypes, TicketAction } from "../../types/tickets"

const initialState: TicketState = {
    tickets: [],
    loading: false,
    error: null,
    sorting: 'cheap'
}

export const ticketReducer = (state = initialState, action: TicketAction): TicketState => {
    switch (action.type) {
        case TicketActionTypes.FETCH_TICKETS:
            return {loading: true, error: null, tickets: [], sorting: 'cheap'}
        case TicketActionTypes.FETCH_TICKETS_SUCCESS:
            return {loading: false, error: null, tickets: action.payload, sorting: 'cheap'}
        case TicketActionTypes.FETCH_TICKETS_ERROR:
            return {loading: false, error: action.payload, tickets: [], sorting: 'cheap'}
        case TicketActionTypes.SORT_TICKETS_CHEAPEST:
            return {...state, sorting: 'cheap'}
        case TicketActionTypes.SORT_TICKETS_FAST:
            return {...state, sorting: 'fast'}
        default:
            return state
    }
}