import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { sortingTickets } from '../../store/action-creators/ticket';
const styles = require('./Button-group.module.scss')


const ButtonGroup = () => {
    const {sorting} = useTypedSelector(state => state.tickets)
    const btnArr = [
        {name: 'САМЫЙ ДЕШЕВЫЙ', label: 'cheap'},
        {name: 'САМЫЙ БЫСТРЫЙ', label: 'fast'},
        {name: 'ОПТИМАЛЬНЫЙ', label: 'optimal'},
    ]
    const dispatch = useDispatch()

    return (
        <div className={styles["button-group"]}>
            {btnArr.map(({name, label}) => {
                const active = sorting === label;
                const newClass = active ? 'active' : ''
                return (
                    <div key={label} className={styles["button-item"] + ' ' + styles[newClass]} onClick={() => dispatch(sortingTickets(label))}>{name}</div>
                )
            })}
        </div>
    )
}
export default ButtonGroup
