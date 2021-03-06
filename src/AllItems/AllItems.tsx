import React, {useEffect} from 'react';
import style from "./AllItems.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../api/store";
import {getPeopleThunk, PeopleItemStateType} from "../redux/people-reducer";
import {getPlanetsThunk, PlanetItemStateType} from "../redux/planet-reducer";
import {getStarshipsThunk, StarshipItemStateType} from "../redux/starships-reducer";
import {getVehiclesThunk, VehicleItemStateType} from "../redux/vehicles-reducer";
import {getPictureNumberString} from "../common/commonFunctions";
import CardItem, { CardItemPropsType } from "../CardItem/CardItem";
import { Route } from 'react-router-dom';

type AllItemsPropsType = {
    typeOfItems: 'characters' | 'starships' | 'planets' | 'vehicles'

}

type ArrayOfItemsType = Array<PeopleItemStateType> |
    Array<PlanetItemStateType> |
    Array<StarshipItemStateType> |
    Array<VehicleItemStateType>

const AllItem = (props: AllItemsPropsType) => {

    const baseImageURL = 'https://starwars-visualguide.com/assets/img/';

    const {
        peoplesData,
        starshipsData,
        vehiclesData,
        planetsData
    } = useSelector<RootStateType, RootStateType>(state => state);

    let arrayOfItems: Array<any> = [];
    const imageURL = baseImageURL + props.typeOfItems + '/';

    switch (props.typeOfItems) {
        case 'characters':
            arrayOfItems = peoplesData.people.map((item) => {
                const pictureNumberString = getPictureNumberString(item.url)
                return <CardItem pictureNumberString={pictureNumberString}
                                 name={props.typeOfItems}
                                 itemName={item.name} imageURL={imageURL}/>
            })
            break
        case 'planets':
            arrayOfItems = planetsData.planets.map((item) => {
                const pictureNumberString = getPictureNumberString(item.url)
                return <CardItem pictureNumberString={pictureNumberString}
                                 name={props.typeOfItems}
                                 itemName={item.name} imageURL={imageURL}/>
            })
            break
        case 'starships':
            arrayOfItems = starshipsData.starships.map((item) => {
                const pictureNumberString = getPictureNumberString(item.url)
                return <CardItem pictureNumberString={pictureNumberString}
                                 name={props.typeOfItems}
                                 itemName={item.name} imageURL={imageURL}/>
            })
            break
        case 'vehicles':
            arrayOfItems = vehiclesData.vehicles.map((item) => {
                const pictureNumberString = getPictureNumberString(item.url)
                return <CardItem pictureNumberString={pictureNumberString}
                                 name={props.typeOfItems}
                                 itemName={item.name} imageURL={imageURL}/>
            })
            break
        default:
            break
    }


    return <div className={style.wrapperContainer}>
        <div className={style.container}>
            <div className={style.block}>
                {arrayOfItems}
            </div>
        </div>
    </div>
}

export default AllItem