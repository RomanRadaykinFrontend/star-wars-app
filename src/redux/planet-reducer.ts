import {Dispatch} from "react";
import {commonApi, planetsApi} from "../api/api";
import {setVehiclesAC} from "./vehicles-reducer";

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
    count: number
    //previous: null | string
}
const initState: PlanetsStateType = {
    planets: [],
    count: 60
}


export const planetsReducer = (state = initState, action: ActionTypes): PlanetsStateType => {
    switch (action.type) {
        case 'SET_PLANETS':
            return {...state, planets: [...action.payload.planets]}
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
export const getNextPagePlanetsThunk = (species: string, page: number) => {
    return (dispatch: Dispatch<ActionTypes>) => {
        commonApi.getNextPage(species, page)
            .then(response => {
                dispatch(setPlanetsAC(response.data.results))
            })
    }
}





