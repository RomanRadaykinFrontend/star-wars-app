import {Dispatch} from "react";
import {commonApi, starshipsApi} from "../api/api";
import {setPeopleAC} from "./people-reducer";

export type StarshipItemStateType = {
    MGLT: string
    cargo_capacity: string
    consumables: string
    cost_in_credits: string
    created: string
    crew: string
    edited: string
    hyperdrive_rating: string
    length: string
    manufacturer: string
    max_atmosphering_speed: string
    model: string
    name: string
    passengers: string
    films: string[]
    pilots: string[]
    starship_class: string
    url: string
}
type StarshipsStateType = {
    starships: Array<StarshipItemStateType>
    count: number
    //previous: null | string
}
const initState: StarshipsStateType = {
    starships: [],
    count: 36
}

export const starshipsReducer = (state = initState, action: ActionTypes): StarshipsStateType => {
    switch (action.type) {
        case 'SET_STARSHIPS':
            return {...state, starships: [ ...action.payload.starships]}
        default:
            return state
    }
}

//AC
type ActionTypes = ReturnType<typeof setStarshipsAC>;
export const setStarshipsAC = (starships: Array<StarshipItemStateType>) => {
    return {
        type: 'SET_STARSHIPS',
        payload: {
            starships
        }
    } as const
}
//THUNK
export const getStarshipsThunk = () => {
    return (dispatch: Dispatch<ActionTypes>) => {
            starshipsApi.getAllStarships()
                .then(response => {
                    dispatch(setStarshipsAC(response.data.results))
                })
    }
}

export const getNextPageStarshipsThunk = (species: string, page: number) => {
    return (dispatch: Dispatch<ActionTypes>) => {
        commonApi.getNextPage(species, page)
            .then(response => {
                dispatch(setStarshipsAC(response.data.results))
            })
    }
}
