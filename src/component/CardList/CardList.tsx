import React from 'react';
import Card from '../Card/Card';
const styles = require('./CardList.module.scss')

const CardList = () => {

    return (
        <div className={styles['card-list']}>
            <div className={styles["card-list__item"]}><Card /></div>
            <div className={styles["card-list__item"]}><Card /></div>
            <div className={styles["card-list__item"]}><Card /></div>
            <div className={styles["card-list__item"]}><Card /></div>
        </div>
    )
}
export default CardList
