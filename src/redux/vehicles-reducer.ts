import {Dispatch} from "react";
import {commonApi, vehiclesApi} from "../api/api";
import {setStarshipsAC} from "./starships-reducer";

export type VehicleItemStateType = {
    cargo_capacity: string
    consumables: string
    cost_in_credits: string
    created: string
    crew: string
    edited: string
    length: string
    manufacturer: string
    max_atmosphering_speed: string
    model: string
    name: string
    passengers: string
    pilots: string[]
    films: string[]
    url: string
    vehicle_class: string
}
type VehiclesStateType = {
    vehicles: Array<VehicleItemStateType>
    count: number
    //previous: null | string
}
const initState: VehiclesStateType = {
    vehicles: [],
    count: 39
}


export const vehiclesReducer = (state = initState, action: ActionTypes): VehiclesStateType => {
    switch (action.type) {
        case 'SET_VEHICLES':
            return {...state, vehicles: [...action.payload.vehicles]}
        default:
            return state
    }
}

//AC
type ActionTypes = ReturnType<typeof setVehiclesAC>;
export const setVehiclesAC = (vehicles: Array<VehicleItemStateType>) => {
    return {
        type: 'SET_VEHICLES',
        payload: {
            vehicles
        }
    } as const
}
//THUNK
export const getVehiclesThunk = () => {
    return (dispatch: Dispatch<ActionTypes>) => {
        vehiclesApi.getAllVehicles().then(response => {
            dispatch(setVehiclesAC(response.data.results))
        })
    }
}

export const getNextPageVehiclesThunk = (species: string, page: number) => {
    return (dispatch: Dispatch<ActionTypes>) => {
        commonApi.getNextPage(species, page)
            .then(response => {
                dispatch(setVehiclesAC(response.data.results))
            })
    }
}



