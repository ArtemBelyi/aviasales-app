export interface TicketState {
    tickets: Ticket[];
    loading: boolean;
    error: null | string;
    sorting: string;
}
export interface dataTicket {
    tickets: Ticket[],
    stop: boolean
}

export interface Ticket {
    price: number
    // Код авиакомпании (iata)
    carrier: string
    // Массив перелётов.
    // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
    segments: [
      {
        // Код города (iata)
        origin: string
        // Код города (iata)
        destination: string
        // Дата и время вылета туда
        date: string
        // Массив кодов (iata) городов с пересадками
        stops: string[]
        // Общее время перелёта в минутах
        duration: number
      },
      {
        // Код города (iata)
        origin: string
        // Код города (iata)
        destination: string
        // Дата и время вылета обратно
        date: string
        // Массив кодов (iata) городов с пересадками
        stops: string[]
        // Общее время перелёта в минутах
        duration: number
      }
    ]
}

export enum TicketActionTypes {
    FETCH_TICKETS = 'FETCH_TICKETS',
    FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS',
    FETCH_TICKETS_ERROR = 'FETCH_TICKETS_ERROR',
    SORT_TICKETS_CHEAPEST = 'SORT_TICKETS_CHEAPEST',
    SORT_TICKETS_FAST = 'SORT_TICKETS_FAST'
}

interface FetchTicketsAction {
    type: TicketActionTypes.FETCH_TICKETS
}

interface FetchTicketsSuccessAction {
    type: TicketActionTypes.FETCH_TICKETS_SUCCESS
    payload: Ticket[]
}

interface FetchTicketsErrorAction {
    type: TicketActionTypes.FETCH_TICKETS_ERROR
    payload: string
}

interface SortTicketsCheapest {
    type: TicketActionTypes.SORT_TICKETS_CHEAPEST
    payload: string
}

interface SortTicketsFast {
    type: TicketActionTypes.SORT_TICKETS_FAST
    payload: string
}


export type TicketAction = FetchTicketsAction | FetchTicketsSuccessAction | FetchTicketsErrorAction | SortTicketsCheapest | SortTicketsFast