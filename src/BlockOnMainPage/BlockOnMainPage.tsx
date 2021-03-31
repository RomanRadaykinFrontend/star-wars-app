import React, {ReactEventHandler, SyntheticEvent, useEffect, useState} from 'react'
import {PeopleItemStateType} from "../redux/people-reducer";
import style from './BlockOnMainPage.module.scss'
import {PlanetItemStateType} from "../redux/planet-reducer";
import {StarshipItemStateType} from "../redux/starships-reducer";
import {VehicleItemStateType} from "../redux/vehicles-reducer";
import { NavLink } from 'react-router-dom';
import CardItem from "../CardItem/CardItem";
import { getPictureNumberString } from '../common/commonFunctions';

type LocalStateType = Array<PeopleItemStateType> |
    Array<PlanetItemStateType> |
    Array<StarshipItemStateType> |
    Array<VehicleItemStateType>
type ItemStateType = PeopleItemStateType | PlanetItemStateType |
    StarshipItemStateType | VehicleItemStateType

type BlockOnMainPagePropsType = {
    arrayOfElements: LocalStateType
    imageURL: string
    name: string
}


function BlockOnMainPage(props: BlockOnMainPagePropsType) {

    let [state, setState] = useState<LocalStateType>([])



    useEffect(() => {
        const newState = [];
        if(props.arrayOfElements.length === 10){
            for (let i = 0; i < 8; i++) {
                newState.push(props.arrayOfElements[i])
            }
        }
        setState(props.arrayOfElements)
    }, [props.arrayOfElements])
    const arrayBlocks = state.map((item: ItemStateType ) => {
        const pictureNumberString = getPictureNumberString(item.url)
        return <CardItem pictureNumberString={pictureNumberString}
                         name={props.name.toLowerCase()}
                         itemName={item.name}
                         imageURL={props.imageURL}/>
    })


    return (
        <div>
            <div className={style.wrapperContainer}>
                <div className={style.container}>
                    <h1>{props.name}</h1>
                    <div className={style.block}>
                        {arrayBlocks}
                    </div>
                    <NavLink to={`/${props.name.toLowerCase()}`} className={style.showAll}>
                        show all {props.name.toLowerCase()}
                    </NavLink>
                </div>
            </div>

        </div>
    )

}

export default BlockOnMainPage