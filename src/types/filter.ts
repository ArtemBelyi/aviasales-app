export interface FilterState {
    transfers: Number[]
}

export enum FilterTransferActionTypes {
    ALL_TRANSFERS = 'ALL_TRANSFERS',
    WITHOUT_TRANSFERS = 'WITHOUT_TRANSFERS',
    ONE_TRANSFER = 'ONE_TRANSFER',
    TWO_TRANSFER = 'TWO_TRANSFER',
    THREE_TRANSFERS = 'TREE_TRANSFERS'
}

interface FilterAllTransfers {
    type: FilterTransferActionTypes.ALL_TRANSFERS
}

interface FilterWithoutTransfers {
    type: FilterTransferActionTypes.WITHOUT_TRANSFERS
}

interface FilterOneTransfer {
    type: FilterTransferActionTypes.ONE_TRANSFER
}

interface FilterTwoTransfer {
    type: FilterTransferActionTypes.TWO_TRANSFER
}

interface FilterThreeTransfers {
    type: FilterTransferActionTypes.THREE_TRANSFERS
}

export type FilterAction = FilterAllTransfers 
    | FilterWithoutTransfers
    | FilterOneTransfer
    | FilterTwoTransfer
    | FilterThreeTransfers
