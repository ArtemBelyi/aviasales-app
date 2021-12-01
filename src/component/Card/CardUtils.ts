
export const amountTransfers = (transfers: number): string => {
    switch (transfers) {
        case 1:
            return '1 пересадка'
        case 2:
            return '2 пересадки'
        case 3:
            return '3 пересадки'
        default:
            return 'Прямой рейс'
    } 
}
export const getZero = (num: number) => {
    return num < 10 ? `0${num}` : num
}
export const textTransfers = (transfers: string[]): string => {
    return transfers.join(', ')
}

export const route = (origin: string, destination: string): string => {
    return `${origin} - ${destination}`
}

export const timeDeparture = (date: string | number): string => {
    const hours = new Date(date).getUTCHours()
    const minutes = new Date(date).getUTCMinutes()
    return `${getZero(hours)}:${getZero(minutes)}`
}

export const timeArrival = (date: string, duration: number): string => {
    const dateArrival = new Date(date).getTime() + duration * 60000
    return timeDeparture(dateArrival)
}

export const travelTime = (duration: number): string => {
    const arrTime = timeDeparture(duration * 60000).split(':')
    return `${arrTime[0]}ч ${arrTime[1]}м` 
}