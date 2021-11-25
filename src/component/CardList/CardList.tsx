import React, { useEffect } from 'react';
import Card from '../Card/Card';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { fetchTickets } from '../../store/action-creators/ticket';
const styles = require('./CardList.module.scss')

const CardList = () => {
    const {tickets, loading, error} = useTypedSelector(state => state.tickets)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTickets())
    }, [dispatch])

    if (loading) {
        return <h1 className={styles['loading']}>Идет загрузка</h1>
    }
    if (error) {
        return <div className={styles['error']}><h1>Ошибка загрузки</h1></div>
    }

    return (
        <div className={styles['card-list']}>
           {tickets.slice(0, 5).map(ticket => {
               return <div className={styles["card-list__item"]} key={ticket.price}><Card ticket={ticket}/></div>
           })}
        </div>
    )
}
export default CardList


//<div className={styles["card-list__item"]}><Card /></div>
//{tickets.map(ticket => <div className={styles["card-list__item"]} key={ticket.id}><Card /></div>)}