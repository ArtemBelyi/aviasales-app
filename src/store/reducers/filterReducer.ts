import { FilterState, FilterAction, FilterTransferActionTypes } from "../../types/filter"

const initialState: FilterState = {
    transfers: []
}

export const filterReducer = (state = initialState, action: FilterAction): FilterState => {
    switch (action.type) {
        case FilterTransferActionTypes.ALL_TRANSFERS:
            return {transfers: [0, 1, 2, 3]}
        case FilterTransferActionTypes.WITHOUT_TRANSFERS:
            return {transfers: [...state.transfers, 0]}
        case FilterTransferActionTypes.ONE_TRANSFER:
            return {transfers: [...state.transfers, 1]}
        case FilterTransferActionTypes.TWO_TRANSFER:
            return {transfers: [...state.transfers, 2]}
        case FilterTransferActionTypes.THREE_TRANSFERS:
            return {transfers: [...state.transfers, 3]}
        default:
            return state
    }
}