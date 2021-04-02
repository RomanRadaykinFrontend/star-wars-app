import React, { useEffect, useState } from 'react';
import AllItems from "../AllItems/AllItems";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../api/store";
import {getNextPagePeopleThunk, PeopleItemStateType} from "../redux/people-reducer";
import style from './PeoplesPage.module.scss'
import ButtonComponent from '../ButtonComponent/ButtonComponent';

type PeoplesPagePropsType = {
    typeOfItems: 'characters' | 'starships' | 'planets' | 'vehicles'
}

const PeoplesPage = (props: PeoplesPagePropsType) => {

    let [page, setPage] = useState<number>(1);

    const count = useSelector<RootStateType, number>(state => state.peoplesData.count);
    const maxPage = Math.ceil(count / 10);
    debugger
    const dispatch = useDispatch();

    useEffect (() => {
        debugger
        dispatch(getNextPagePeopleThunk('people', page))
    }, [page])

    const nextPageHandler = () => {
        setPage(page + 1)
    }

    const previousPageHandler = () => {
        setPage(page - 1)
    }

    return <div className={style.pageWrapper}>
        <div className={style.nameWrapper}>
            <h1>Characters</h1>
            <ButtonComponent nextPage={nextPageHandler}
                             maxPage={maxPage}
                             actualPage={page}
                             previousPage={previousPageHandler}/>
        </div>
        <AllItems typeOfItems={props.typeOfItems}/>
    </div>

}

export default PeoplesPage