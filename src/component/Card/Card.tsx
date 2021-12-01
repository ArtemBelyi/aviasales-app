import React from 'react';
import { Ticket } from '../../types/tickets';
import { amountTransfers, textTransfers, route, timeDeparture, timeArrival, travelTime} from './CardUtils'
const styles = require('./Card.module.scss')


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
                    <div className={styles["card-main__item"]}>{timeDeparture(segments[0].date)} - {timeArrival(segments[0].date, segments[0].duration)}</div>
                    <div className={styles["card-main__item"]}>{travelTime(segments[0].duration)}</div>
                    <div className={styles["card-main__item"]}>{textTransfers(segments[0].stops)}</div>
                </div>
                <div className={styles["card-main__list"]}>
                    <div className={styles["card-main__item"]}>{route(segments[1].origin, segments[1].destination)}</div>
                    <div className={styles["card-main__item"]}>В ПУТИ</div>
                    <div className={styles["card-main__item"]}>{amountTransfers(segments[1].stops.length)}</div>
                    <div className={styles["card-main__item"]}>{timeDeparture(segments[1].date)} - {timeArrival(segments[1].date, segments[1].duration)}</div>
                    <div className={styles["card-main__item"]}>{travelTime(segments[1].duration)}</div>
                    <div className={styles["card-main__item"]}>{textTransfers(segments[1].stops)}</div>
                </div>
            </div>
        </div>
    )
}
export default Card