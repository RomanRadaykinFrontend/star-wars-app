import React from 'react';
import style from './BlockItem.module.scss'


const BlockItem = (props: any) => {
    return <div>
        <div className={style.wrapperContainer}>
            <div className={style.InfoContainer}>
                <div className={style.photo}></div>
                <div className={style.about}></div>
            </div>
            <div className={style.filmContainer}>

            </div>
        </div>
    </div>
}

export default BlockItem