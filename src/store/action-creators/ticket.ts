import { Dispatch } from "react"
import { TicketAction, TicketActionTypes } from "../../types/tickets"
import axios from 'axios'

const API_URL = 'https://front-test.beta.aviasales.ru'
const SEARCH_ID = '7ivd'


export const fetchTickets = () => {
    return async (dispatch: Dispatch<TicketAction>) => {
        try {
            dispatch({type: TicketActionTypes.FETCH_TICKETS})
            const response = await axios.get(`${API_URL}/tickets?searchId=${SEARCH_ID}`)
            console.log(response.data.tickets)
            dispatch({type: TicketActionTypes.FETCH_TICKETS_SUCCESS, payload: response.data.tickets})
        } catch (e) {
            dispatch({type: TicketActionTypes.FETCH_TICKETS_ERROR, payload: 'Что-то пошло не так!'})
        }
    }
}