import React from 'react';
import { Ticket } from '../../types/tickets';
const styles = require('./Card.module.scss')


const amountTransfers = (transfers: number): string => {
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
const textTransfers = (transfers: string[]): string => {
    return transfers.join(', ')
}

const route = (origin: string, destination: string): string => {
    return `${origin} - ${destination}`
}

const travelTime = (duration: number): string => {
    let time = (duration / 60).toFixed(2)
    return `${time.slice(0, 2)}ч ${time.slice(3)}м`
}

const Card = (props: {ticket: Ticket}) => {
    const { price, carrier, segments } = props.ticket

    return (
        <div className={styles['card-container']}>
            <div className={styles['card-container__header']}>
                <div className={styles["card-container__price"]}>{`${price} P`}</div>
                <div className={styles["card-container__logo"]}><img src={`https://pics.avs.io/99/36/${carrier}.png`} alt="logoAvia" /></div>
            </div>
            <div className={styles["card-container__main card-main"]}>
                <div className={styles["card-main__list"]}>
                    <div className={styles["card-main__item"]}>{route(segments[0].origin, segments[0].destination)}</div>
                    <div className={styles["card-main__item"]}>В ПУТИ</div>
                    <div className={styles["card-main__item"]}>{amountTransfers(segments[0].stops.length)}</div>
                    <div className={styles["card-main__item"]}>10:45 - 08:00</div>
                    <div className={styles["card-main__item"]}>{travelTime(segments[0].duration)}</div>
                    <div className={styles["card-main__item"]}>{textTransfers(segments[0].stops)}</div>
                </div>
                <div className={styles["card-main__list"]}>
                    <div className={styles["card-main__item"]}>{route(segments[1].origin, segments[1].destination)}</div>
                    <div className={styles["card-main__item"]}>В ПУТИ</div>
                    <div className={styles["card-main__item"]}>{amountTransfers(segments[1].stops.length)}</div>
                    <div className={styles["card-main__item"]}>11:20 - 00:50</div>
                    <div className={styles["card-main__item"]}>{travelTime(segments[1].duration)}</div>
                    <div className={styles["card-main__item"]}>{textTransfers(segments[1].stops)}</div>
                </div>
            </div>
        </div>
    )
}
export default Card