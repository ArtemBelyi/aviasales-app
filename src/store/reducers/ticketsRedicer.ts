import { TicketState, TicketActionTypes, TicketAction } from "../../types/tickets"

const initialState: TicketState = {
    tickets: [],
    loading: false,
    error: null,
    sorting: 'cheap',
    showMore: 5
}

export const ticketReducer = (state = initialState, action: TicketAction): TicketState => {
    switch (action.type) {
        case TicketActionTypes.FETCH_TICKETS:
            return {...state, loading: true, error: null, tickets: []}
        case TicketActionTypes.FETCH_TICKETS_SUCCESS:
            return {...state, loading: false, error: null, tickets: action.payload}
        case TicketActionTypes.FETCH_TICKETS_ERROR:
            return {...state, loading: false, error: action.payload, tickets: []}
        case TicketActionTypes.SORT_TICKETS_CHEAPEST:
            return {...state, sorting: 'cheap'}
        case TicketActionTypes.SORT_TICKETS_FAST:
            return {...state, sorting: 'fast'}
        case TicketActionTypes.SORT_TICKETS_OPTIMAL:
            return {...state, sorting: 'optimal'}
        case TicketActionTypes.AMOUNT_SHOW_TICKETS:
            return {...state, showMore: initialState.showMore += 5}
        default:
            return state
    }
}