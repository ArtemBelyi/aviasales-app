import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { showMore } from '../../store/action-creators/ticket';
const styles = require('./Button.module.scss')


const Button = () => {
    const {tickets} = useTypedSelector(state => state.tickets)
    const {transfers} = useTypedSelector(state => state.filters)
    const dispatch = useDispatch()
    let hidden: string = 'hidden'

    hidden = (tickets.length === 0 || transfers.length === 0) ? 'hidden' : ''

    return (
        <div className={styles['button'] + ' ' + styles[hidden]} onClick={() => dispatch(showMore())}>
            ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ
        </div>
    )
}
export default Button