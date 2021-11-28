import { FilterState, FilterAction, FilterTransferActionTypes } from "../../types/filter"

const initialState: FilterState = {
    transfers: []
}

export const filterReducer = (state = initialState, action: FilterAction): FilterState => {
    switch (action.type) {
        case FilterTransferActionTypes.ALL_TRANSFERS:
            return {transfers: action.payload}
        case FilterTransferActionTypes.WITHOUT_TRANSFERS:
            return {transfers: action.payload}
        case FilterTransferActionTypes.ONE_TRANSFER:
            return {transfers: action.payload}
        case FilterTransferActionTypes.TWO_TRANSFER:
            return {transfers: action.payload}
        case FilterTransferActionTypes.THREE_TRANSFERS:
            return {transfers: action.payload}
        default:
            return state
    }
}