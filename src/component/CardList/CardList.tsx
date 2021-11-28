import React, { useEffect } from 'react';
import Card from '../Card/Card';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { fetchTickets } from '../../store/action-creators/ticket';
import { Ticket } from '../../types/tickets';
const styles = require('./CardList.module.scss')

const CardList = () => {
    const {tickets, loading, error, sorting, showMore} = useTypedSelector(state => state.tickets)
    const dispatch = useDispatch()
    let ticketState = []

    useEffect(() => {
        dispatch(fetchTickets())
    }, [dispatch])

    function compare (state: Ticket[]) {
        return state.sort((a: Ticket, b: Ticket) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))
    }

    //console.log(tickets)

    if (loading) return <h1 className={styles['loading']}>Идет загрузка</h1>
    if (error) return <div className={styles['error']}><h1>Ошибка загрузки</h1></div>
    
    ticketState = (sorting === 'cheap') ? compare([...tickets]) : ((sorting === 'fast') ? tickets : tickets) // cheap | fast | optimal
    
    return (
        <div className={styles['card-list']}>
           {ticketState.slice(0, showMore).map(ticket => {
               return <div className={styles["card-list__item"]} key={ticket.price}><Card ticket={ticket}/></div>
           })}
        </div>
    )
}
export default CardList
