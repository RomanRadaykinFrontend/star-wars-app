import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import style from './SpecificItem.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {getSpecificItemThunk, SpecificItemType} from "../redux/specificItem-reducer";
import {RootStateType} from "../api/store";
import Human from "./Human/Human";
import Starship from "./Starship/Starship";
import Planet from "./Planet/Planet";
import Vehicle from "./Vehicle/Vehicle";

const SpecificItem = () => {

    const {species, id} = useParams<{ species: string, id: string }>();
    const dispatch = useDispatch();
    const data = useSelector<RootStateType, SpecificItemType>(state => state.specificItemData.specificItem)

    useEffect(() => {
       dispatch(getSpecificItemThunk(species, id))
    }, [])


    const entries = Object.entries(data)

    return <div style={{color: 'white'}}>
        {entries.map(item => {
            return <div>{item}</div>
        })}
    </div>


}

export default SpecificItem