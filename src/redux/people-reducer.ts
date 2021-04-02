import {Dispatch} from "react";
import {commonApi, peopleApi} from "../api/api";

export type PeopleItemStateType = {
    birth_year: string
    eye_color: string
    films: Array<string>
    gender: string
    hair_color: string
    height: string
    homeworld: string
    mass: string
    name: string
    skin_color: string
    created: string
    edited: string
    species: Array<string>
    starships: Array<string>
    url: string
    vehicles: Array<string>
}
type PeopleStateType = {
    people: Array<PeopleItemStateType>
    count: number
    //previous: null | string
}
const initState: PeopleStateType = {
    people: [],
    count: 82
}

export const peopleReducer = (state = initState, action: ActionTypes): PeopleStateType => {
    switch (action.type) {
        case 'SET_PEOPLE':
            return {...state, people: [ ...action.payload.people]}
        default:
            return state
    }
}

//AC
type ActionTypes = ReturnType<typeof setPeopleAC>;
export const setPeopleAC = (people: Array<PeopleItemStateType>) => {
    return {
        type: 'SET_PEOPLE',
        payload: {
            people
        }
    } as const
}
//THUNK
export const getPeopleThunk = () => {
    return (dispatch: Dispatch<ActionTypes>) => {
            peopleApi.getAllPeople()
                .then(response => {
                    dispatch(setPeopleAC(response.data.results))
                })
    }
}

export const getNextPagePeopleThunk = (species: string, page: number) => {
    return (dispatch: Dispatch<ActionTypes>) => {
        commonApi.getNextPage(species, page)
            .then(response => {
                dispatch(setPeopleAC(response.data.results))
            })
    }
}
