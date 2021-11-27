import React from 'react';
import { useDispatch } from 'react-redux';
import { sortingTickets } from '../../store/action-creators/ticket';
const styles = require('./Button-group.module.scss')


const ButtonGroup = () => {
    const dispatch = useDispatch()

    return (
        <div className={styles["button-group"]}>
            <div className={styles["button-item"] + ' ' + styles["active"]} onClick={() => dispatch(sortingTickets('cheap'))}>САМЫЙ ДЕШЕВЫЙ</div>
            <div className={styles["button-item"]} onClick={() => dispatch(sortingTickets('fast'))}>САМЫЙ БЫСТРЫЙ</div>
            <div className={styles["button-item"]}>ОПТИМАЛЬНЫЙ</div>
        </div>
    )
}
export default ButtonGroup