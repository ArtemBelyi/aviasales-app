import React from 'react';
import { useDispatch } from 'react-redux';
import { showMore } from '../../store/action-creators/ticket';
const styles = require('./Button.module.scss')


const Button = () => {
    const dispatch = useDispatch()

    return (
        <div className={styles['button']} onClick={() => dispatch(showMore())}>
            ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ
        </div>
    )
}
export default Button