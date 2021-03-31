import {Dispatch} from "react";
import {vehiclesApi} from "../api/api";

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
    //count: number
    //previous: null | string
}
const initState: VehiclesStateType = {
    vehicles: []
}


export const vehiclesReducer = (state = initState, action: ActionTypes): VehiclesStateType => {
    switch (action.type) {
        case 'SET_VEHICLES':
            return {...state, vehicles: [...action.payload.vehicles, ...state.vehicles]}
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


