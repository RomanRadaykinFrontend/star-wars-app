import React, { useEffect, useState } from 'react';
import AllItems from "../AllItems/AllItems";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../api/store";
import style from './../PeoplesPage/PeoplesPage.module.scss'
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import { getNextPageStarshipsThunk } from '../redux/starships-reducer';

type StarshipsPagePropsType = {
    typeOfItems: 'characters' | 'starships' | 'planets' | 'vehicles'
}

const StarshipsPage = (props: StarshipsPagePropsType) => {

    let [page, setPage] = useState<number>(1);

    const count = useSelector<RootStateType, number>(state => state.starshipsData.count);
    const maxPage = Math.ceil(count / 10);
    debugger
    const dispatch = useDispatch();

    useEffect (() => {
        debugger
        dispatch(getNextPageStarshipsThunk('starships', page))
    }, [page])

    const nextPageHandler = () => {
        setPage(page + 1)
    }

    const previousPageHandler = () => {
        setPage(page - 1)
    }

    return <div className={style.pageWrapper}>
        <div className={style.nameWrapper}>
            <h1>Starships</h1>
            <ButtonComponent nextPage={nextPageHandler}
                             maxPage={maxPage}
                             actualPage={page}
                             previousPage={previousPageHandler}/>
        </div>
        <AllItems typeOfItems={props.typeOfItems}/>
    </div>

}

export default StarshipsPage


