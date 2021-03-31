import thunkMiddleware from 'redux-thunk'
import { peopleReducer } from "../redux/people-reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {planetsReducer} from "../redux/planet-reducer";
import {starshipsReducer} from "../redux/starships-reducer";
import { vehiclesReducer } from '../redux/vehicles-reducer';
import { specificItemReducer } from '../redux/specificItem-reducer';



let reducers = combineReducers({
    peoplesData: peopleReducer,
    planetsData: planetsReducer,
    starshipsData: starshipsReducer,
    vehiclesData: vehiclesReducer,
    specificItemData: specificItemReducer
})

export type ReducersType = typeof reducers;
export type RootStateType = ReturnType<ReducersType>

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store