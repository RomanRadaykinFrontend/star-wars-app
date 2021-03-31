import style from './CardItem.module.scss'
import React, {SyntheticEvent} from "react";
import {NavLink, Route} from "react-router-dom";
import SpecificItem from "../SpecificItem/SpecificItem";

export type CardItemPropsType = {
    pictureNumberString: string
    itemName: string
    imageURL: string
    name: string
}

const CardItem = (props: CardItemPropsType) => {

    const error = (e: SyntheticEvent<HTMLImageElement>) => {
        //@ts-ignore
        e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
    }

    return <NavLink className={style.cardNav} to={`/${props.name}/${props.pictureNumberString}`}>
        <div className={style.block_item} key={props.pictureNumberString}>
            <img src={props.imageURL + `${props.pictureNumberString}.jpg`}
                 onError={error}
                 alt={'image'}
                 className={style.mainImage}/>
            <span>{props.itemName}</span>

        </div>
    </NavLink>
}


export default CardItem
