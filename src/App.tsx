import React, {useEffect} from 'react';
import './App.scss';
import { RootStateType } from './api/store';
import {getPeopleThunk, PeopleItemStateType} from './redux/people-reducer';
import BlockOnMainPage from "./BlockOnMainPage/BlockOnMainPage";
import { useDispatch, useSelector } from 'react-redux';
import {getPlanetsThunk, PlanetItemStateType} from './redux/planet-reducer';
import {getStarshipsThunk, StarshipItemStateType } from './redux/starships-reducer';
import {getVehiclesThunk, VehicleItemStateType} from './redux/vehicles-reducer';
import Nav from './Nav/Nav';
import AllItems from "./AllItems/AllItems";
import { Route } from 'react-router-dom';
import PlanetsPage from "./PlanetsPage/PlanetsPage";
import StarshipsPage from "./StarshipsPage/StarshipsPage";
import VehiclesPage from "./VehiclesPage/VehiclesPage";
import PeoplesPage from "./PeoplesPage/PeoplesPage";
import SpecificItem from "./SpecificItem/SpecificItem";




function App() {

    const charactersImageURL = 'https://starwars-visualguide.com/assets/img/characters/';
    const planetsImageURL = 'https://starwars-visualguide.com/assets/img/planets/';
    const starshipsImageURL = 'https://starwars-visualguide.com/assets/img/starships/';
    const vehiclesImageURL = 'https://starwars-visualguide.com/assets/img/vehicles/';

    const dispatch = useDispatch()

    const arrayOfPeoples = useSelector<RootStateType, Array<PeopleItemStateType>>(state => state.peoplesData.people);
    const arrayOfPlanets = useSelector<RootStateType, Array<PlanetItemStateType>>(state => state.planetsData.planets);
    const arrayOfStarships = useSelector<RootStateType, Array<StarshipItemStateType>>(state => state.starshipsData.starships);
    const arrayOfVehicles = useSelector<RootStateType, Array<VehicleItemStateType>>(state => state.vehiclesData.vehicles);


    useEffect(() => {
        dispatch(getPeopleThunk())
        dispatch(getPlanetsThunk())
        dispatch(getStarshipsThunk())
        dispatch(getVehiclesThunk())
    },[])

    return (
        <div className="App">
            <Nav/>

            <Route exact path='/' render={() => <BlockOnMainPage arrayOfElements={arrayOfPeoples}
                                                           name={'Characters'}
                                                           imageURL={charactersImageURL} />}/>
            <Route exact path='/' render={() => <BlockOnMainPage arrayOfElements={arrayOfPlanets}
                                                           name={'Planets'}
                                                           imageURL={planetsImageURL}/>}/>
            <Route exact path='/' render={() => <BlockOnMainPage arrayOfElements={arrayOfStarships}
                                                           name={'Starships'}
                                                           imageURL={starshipsImageURL}/>}/>
            <Route exact path='/' render={() => <BlockOnMainPage arrayOfElements={arrayOfVehicles}
                                                           name={'Vehicles'}
                                                           imageURL={vehiclesImageURL}/>}/>

            <Route exact path='/characters' render={() => <PeoplesPage typeOfItems={'characters'}/>}/>
            <Route exact path='/starships' render={() => <StarshipsPage typeOfItems={'starships'}/>}/>
            <Route exact path='/vehicles' render={() => <VehiclesPage typeOfItems={'vehicles'}/>}/>
            <Route exact path='/planets' render={() => <PlanetsPage typeOfItems={'planets'}/>}/>

            <Route path={`/:species/:id`} render={() => <SpecificItem/>}/>
        </div>
    );
}

export default App

