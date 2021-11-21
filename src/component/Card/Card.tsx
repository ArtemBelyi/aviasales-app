import React from 'react';
import logo from '../Card/logo.png'
const styles = require('./Card.module.scss')

const Card = () => {

    return (
        <div className={styles['card-container']}>
            <div className={styles['card-container__header']}>
                <div className={styles["card-container__price"]}>13 400 P</div>
                <div className={styles["card-container__logo"]}><img src={logo} alt="logo" /></div>
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