import { Dispatch } from "react"
import { FilterAction, FilterTransferActionTypes } from "../../types/filter"

const arr: Number[] = []

export const filterTransfer = (transfer: string) => {

    const addNumber = (num: number) => {
        arr.includes(num) ? arr.splice(arr.indexOf(num), 1) : arr.push(num)
    }

    switch (transfer) {
        case 'without':
            return (dispatch: Dispatch<FilterAction>) => {
                addNumber(0)
                dispatch({type: FilterTransferActionTypes.WITHOUT_TRANSFERS, payload: arr})
            }
        case 'one-transfer':
            return (dispatch: Dispatch<FilterAction>) => {
                addNumber(1)
                dispatch({type: FilterTransferActionTypes.ONE_TRANSFER, payload: arr})
            }
        case 'two-transfer':
            return (dispatch: Dispatch<FilterAction>) => {
                addNumber(2)
                dispatch({type: FilterTransferActionTypes.TWO_TRANSFER, payload: arr})
            }
        case 'three-transfers':
            return (dispatch: Dispatch<FilterAction>) => {
                addNumber(3)
                dispatch({type: FilterTransferActionTypes.THREE_TRANSFERS, payload: arr})
            }
        default:
            return (dispatch: Dispatch<FilterAction>) => {
                addNumber(0)
                addNumber(1)
                addNumber(2)
                addNumber(3)
                dispatch({type: FilterTransferActionTypes.ALL_TRANSFERS, payload: arr})
            }
    } 
}