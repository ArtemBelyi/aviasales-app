import { Dispatch } from "react"
import { FilterAction, FilterTransferActionTypes } from "../../types/filter"


export const filterTransfer = (transfer: string) => {
    switch (transfer) {
        case 'without':
            return (dispatch: Dispatch<FilterAction>) => {
                dispatch({type: FilterTransferActionTypes.WITHOUT_TRANSFERS})
            }
        case 'one-transfer':
            return (dispatch: Dispatch<FilterAction>) => {
                dispatch({type: FilterTransferActionTypes.ONE_TRANSFER})
            }
        case 'two-transfer':
            return (dispatch: Dispatch<FilterAction>) => {
                dispatch({type: FilterTransferActionTypes.TWO_TRANSFER})
            }
        case 'three-transfers':
            return (dispatch: Dispatch<FilterAction>) => {
                dispatch({type: FilterTransferActionTypes.THREE_TRANSFERS})
            }
        default:
            return (dispatch: Dispatch<FilterAction>) => {
                dispatch({type: FilterTransferActionTypes.ALL_TRANSFERS})
            }
    } 
}