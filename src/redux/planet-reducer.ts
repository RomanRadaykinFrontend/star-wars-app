import {Dispatch} from "react";
import {planetsApi} from "../api/api";

export type PlanetItemStateType = {
    climate: string
    created: string
    diameter: string
    edited: string
    films: Array<string>
    gravity: string
    name: string
    orbital_period: string
    population: string
    residents: Array<string>
    rotation_period: string
    surface_water: string
    terrain: string
    url: string
}
type PlanetsStateType = {
    planets: Array<PlanetItemStateType>
    //count: number
    //previous: null | string
}
const initState: PlanetsStateType = {
    planets: []
}


export const planetsReducer = (state = initState, action: ActionTypes): PlanetsStateType => {
    switch (action.type) {
        case 'SET_PLANETS':
            return {...state, planets: [...action.payload.planets, ...state.planets]}
        default:
            return state
    }
}

//AC
type ActionTypes = ReturnType<typeof setPlanetsAC>;
export const setPlanetsAC = (planets: Array<PlanetItemStateType>) => {
    return {
        type: 'SET_PLANETS',
        payload: {
            planets: planets
        }
    } as const
}
//THUNK
export const getPlanetsThunk = () => {
    return (dispatch: Dispatch<ActionTypes>) => {
        planetsApi.getAllPlanets().then(response => {
            dispatch(setPlanetsAC(response.data.results))
        })
    }
}


