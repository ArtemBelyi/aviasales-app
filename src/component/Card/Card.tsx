import React from 'react';
import { Ticket } from '../../types/tickets';
const styles = require('./Card.module.scss')

const Card = (props: {ticket: Ticket}) => {
    const { ticket } = props

    return (
        <div className={styles['card-container']}>
            <div className={styles['card-container__header']}>
                <div className={styles["card-container__price"]}>{`${ticket.price} P`}</div>
                <div className={styles["card-container__logo"]}><img src={`https://pics.avs.io/99/36/${ticket.carrier}.png`} alt="logoAvia" /></div>
            </div>
            <div className={styles["card-container__main card-main"]}>
                <div className={styles["card-main__list"]}>
                    <div className={styles["card-main__item"]}>MOW - HKT</div>
                    <div className={styles["card-main__item"]}>В ПУТИ</div>
                    <div className={styles["card-main__item"]}>2 ПЕРЕСАДКИ</div>
                    <div className={styles["card-main__item"]}>10:45 - 08:00</div>
                    <div className={styles["card-main__item"]}>21ч 15м</div>
                    <div className={styles["card-main__item"]}>HKG, JNB</div>
                </div>
                <div className={styles["card-main__list"]}>
                    <div className={styles["card-main__item"]}>MOW - HKT</div>
                    <div className={styles["card-main__item"]}>В ПУТИ</div>
                    <div className={styles["card-main__item"]}>1 ПЕРЕСАДКА</div>
                    <div className={styles["card-main__item"]}>11:20 - 00:50</div>
                    <div className={styles["card-main__item"]}>13ч 30м</div>
                    <div className={styles["card-main__item"]}>HKG, JNB</div>
                </div>
            </div>
        </div>
    )
}
export default Card