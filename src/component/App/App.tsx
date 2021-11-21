import React from 'react';
import CardList from '../CardList/CardList';
import Button from '../Button/Button';
import ButtonGroup from '../Button-group/Button-group';
import Filter from '../Filter/Filter';
import logo from '../../logo/Logo.png'
const styles = require('./App.module.scss')

const App = () => {

    return (
        <div className={styles["app-container"]}>
            <div className={styles["app-container__logo"]}><img src={logo} alt="logo" className="logo" /></div>
            <div className={styles["app-container__main"]}>
                <div className={styles["app-container__main-item"]}>
                    <Filter />
                </div>
                <div className={styles["app-container__main-item"]}>
                    <ButtonGroup />
                    <CardList />
                    <Button />
                </div>
            </div>
        </div>
    )
}
export default App