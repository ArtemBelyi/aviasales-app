import { Dispatch } from "react"
import { TicketAction, TicketActionTypes } from "../../types/tickets"
import axios from 'axios'

const API_URL = 'https://front-test.beta.aviasales.ru'
const SEARCH_ID = 'jjbe'


export const fetchTickets = () => {
    return async (dispatch: Dispatch<TicketAction>) => {
        try {
            dispatch({type: TicketActionTypes.FETCH_TICKETS})
            const response = await axios.get(`${API_URL}/tickets?searchId=${SEARCH_ID}`)
            dispatch({type: TicketActionTypes.FETCH_TICKETS_SUCCESS, payload: response.data.tickets})
        } catch (e) {
            dispatch({type: TicketActionTypes.FETCH_TICKETS_ERROR, payload: 'Что-то пошло не так!'})
        }
    }
}

export const sortingTickets = (sort: string) => {
    switch (sort) {
        case 'fast':
            return (dispatch: Dispatch<TicketAction>) => {
                dispatch({type: TicketActionTypes.SORT_TICKETS_FAST, payload: sort})
            }
        case 'optimal':
            return (dispatch: Dispatch<TicketAction>) => {
                dispatch({type: TicketActionTypes.SORT_TICKETS_OPTIMAL, payload: sort})
            }
        default:
            return (dispatch: Dispatch<TicketAction>) => {
                dispatch({type: TicketActionTypes.SORT_TICKETS_CHEAPEST, payload: sort})
            }
    } 
}

export const showMore = () => {
    return (dispatch: Dispatch<TicketAction>) => {
        dispatch({type: TicketActionTypes.AMOUNT_SHOW_TICKETS})
    }
}