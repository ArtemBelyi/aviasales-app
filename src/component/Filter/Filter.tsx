import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { filterTransfer } from '../../store/action-creators/filter';
const styles = require('./Filter.module.scss')

const Filter = () => {
    const {transfers} = useTypedSelector(state => state.filters)
    const dispatch = useDispatch()
    let isChecked = false
    const checkbox = [
        {id: '10', name: 'Все', label: 'all'},
        {id: '0', name: 'Без пересадок', label: 'without'},
        {id: '1', name: '1 пересадка', label: 'one-transfer'},
        {id: '2', name: '2 пересадки', label: 'two-transfer'},
        {id: '3', name: '3 пересадки', label: 'three-transfers'}
    ]

    console.log(transfers)
    
    if(transfers.length === 4) isChecked = true

    return (
        <div className={styles["filter-container"]}>
            <div className={styles["filter-container__title"]}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
            <div className={styles["filter-container__list"]}>
                {checkbox.map(({id, name, label}) => {
                    isChecked = transfers.includes(+id) ? true : false
                    return (
                        <div key={id} className={styles["list-item"]}>
                            <div className={styles["md-checkbox"]}>
                                <input id={id} type="checkbox" onChange={() => dispatch(filterTransfer(label))} checked={isChecked} />
                                <label htmlFor={id}>{name}</label>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Filter