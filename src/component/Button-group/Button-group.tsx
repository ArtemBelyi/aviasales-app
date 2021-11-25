import React from 'react';
const styles = require('./Button-group.module.scss')


const ButtonGroup = () => {

    return (
        <div className={styles["button-group"]}>
            <div className={styles["button-item"] + ' ' + styles["active"]}>САМЫЙ ДЕШЕВЫЙ</div>
            <div className={styles["button-item"]}>САМЫЙ БЫСТРЫЙ</div>
            <div className={styles["button-item"]}>ОПТИМАЛЬНЫЙ</div>
        </div>
    )
}
export default ButtonGroup