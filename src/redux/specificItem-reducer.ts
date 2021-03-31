import {Dispatch} from "react";
import {commonApi, peopleApi} from "../api/api";
import { PeopleItemStateType } from "./people-reducer";
import {StarshipItemStateType} from "./starships-reducer";
import {PlanetItemStateType} from "./planet-reducer";
import {VehicleItemStateType} from "./vehicles-reducer";

export type SpecificItemType = PeopleItemStateType | StarshipItemStateType |
    PlanetItemStateType | VehicleItemStateType;

export type SpecificItemStateType = {
    specificItem: SpecificItemType
}

const initState = {
    specificItem: {} as SpecificItemType
}

export const specificItemReducer = (state  = initState, action: ActionTypes): SpecificItemStateType => {
    switch (action.type) {
        case 'SET_SPECIFIC_ITEM':
            return {...state, specificItem: action.payload.specificItem}
        default:
            return state
    }
}

//AC
type ActionTypes = ReturnType<typeof setSpecificItemAC>;
export const setSpecificItemAC = (specificItem: SpecificItemType) => {
    return {
        type: 'SET_SPECIFIC_ITEM',
        payload: {
            specificItem
        }
    } as const
}
//THUNK
export const getSpecificItemThunk = (species: string, id: string) => {
    return (dispatch: Dispatch<ActionTypes>) => {
            commonApi.getSpecificItem(species, id)
                .then(response => {
                    dispatch(setSpecificItemAC(response.data))
                })
    }
}
