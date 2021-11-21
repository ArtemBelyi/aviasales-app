import React, { useEffect } from 'react';
const styles = require('./Button-group.module.scss')


const ButtonGroup = () => {

    useEffect(() => {
        console.log(styles["button-item__active"])
    }, [])
    return (
        <div className={styles["button-group"]}>
            <div className={styles["button-item"] + ' ' + styles["active"]}>САМЫЙ ДЕШЕВЫЙ</div>
            <div className={styles["button-item"]}>САМЫЙ БЫСТРЫЙ</div>
            <div className={styles["button-item"]}>ОПТИМАЛЬНЫЙ</div>
        </div>
    )
}
export default ButtonGroup