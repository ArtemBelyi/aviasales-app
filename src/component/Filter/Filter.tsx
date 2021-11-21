import React from 'react';
const styles = require('./Filter.module.scss')

const Filter = () => {

    return (
        <div className={styles["filter-container"]}>
            <div className={styles["filter-container__title"]}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
            <div className={styles["filter-container__list"]}>
                <div className={styles["list-item"]}>
                    <div className={styles["md-checkbox"]}>
                        <input id="i1" type="checkbox" />
                        <label htmlFor="i1">Все</label>
                    </div>
                </div>
                <div className={styles["list-item"]}>
                    <div className={styles["md-checkbox"]}>
                        <input id="i2" type="checkbox" />
                        <label htmlFor="i2">Без пересадок</label>
                    </div>
                </div>
                <div className={styles["list-item"]}>
                    <div className={styles["md-checkbox"]}>
                        <input id="i3" type="checkbox" />
                        <label htmlFor="i3">1 пересадка</label>
                    </div>
                </div>
                <div className={styles["list-item"]}>
                    <div className={styles["md-checkbox"]}>
                        <input id="i4" type="checkbox" />
                        <label htmlFor="i4">2 Пересадки</label>
                    </div>
                </div>
                <div className={styles["list-item"]}>
                    <div className={styles["md-checkbox"]}>
                        <input id="i5" type="checkbox" />
                        <label htmlFor="i5">3 Пересадки</label>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Filter