import React, { useEffect } from 'react';
import Card from '../Card/Card';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { filterTransfer } from '../../store/action-creators/filter';
import { useDispatch } from 'react-redux';
import { fetchTickets } from '../../store/action-creators/ticket';
import { Ticket } from '../../types/tickets';
const styles = require('./CardList.module.scss')

function find(arr: Number[]) {
    return function f(item: Ticket) {
      return arr.includes(item.segments[0].stops.length)
    }
  }

const CardList = () => {
    const {tickets, loading, error, sorting, showMore} = useTypedSelector(state => state.tickets)
    const {transfers} = useTypedSelector(state => state.filters)
    const dispatch = useDispatch()
    let ticketState = []

    useEffect(() => {
        dispatch(fetchTickets())
        dispatch(filterTransfer('all'))
    }, [dispatch])

    function compare (state: Ticket[]) {
        return state.sort((a: Ticket, b: Ticket) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))
    }

    if (loading) return <h1 className={styles['loading']}>Идет загрузка</h1>
    if (error) return <div className={styles['error']}><h1>Ошибка загрузки</h1></div>
    
    const filterTickets = tickets.filter(find(transfers))

    console.log(filterTickets)

    ticketState = (sorting === 'cheap') ? compare(filterTickets) : ((sorting === 'fast') ? filterTickets : filterTickets) // cheap | fast | optimal

    if (filterTickets.length === 0) return <div className={styles['error']}><h1>Не выбраны фильтры</h1></div>
    
    return (
        <div className={styles['card-list']}>
           {ticketState.slice(0, showMore).map(ticket => {
               return <div className={styles["card-list__item"]} key={ticket.price}><Card ticket={ticket}/></div>
           })}
        </div>
    )
}
export default CardList
