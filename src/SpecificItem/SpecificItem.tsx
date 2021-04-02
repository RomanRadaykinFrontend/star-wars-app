import React, {SyntheticEvent, useEffect} from "react";
import {useParams} from "react-router-dom";
import style from './SpecificItem.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {getSpecificItemThunk, SpecificItemType} from "../redux/specificItem-reducer";
import {RootStateType} from "../api/store";


const SpecificItem = () => {

    const {species, id} = useParams<{ species: string, id: string }>();
    const dispatch = useDispatch();
    const data = useSelector<RootStateType, SpecificItemType>(state => state.specificItemData.specificItem)

    const imageURL = 'https://starwars-visualguide.com/assets/img/'
    const error = (e: SyntheticEvent<HTMLImageElement>) => {
        //@ts-ignore
        e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
    }

    useEffect(() => {
        if(species === 'characters'){
            dispatch(getSpecificItemThunk('people', id))
        } else {
            dispatch(getSpecificItemThunk(species, id))
        }
    }, [])


    const entries = Object.entries(data)
    console.log(entries)

    const sortEntries = entries.filter((item) => {
        return item[0] !== "films" && item[0] !== 'species' && item[0] !== 'vehicles' && item[0] !== 'starships'
            && item[0] !== 'created' && item[0] !== 'edited' && item[0] !== 'url' && item[0] !== 'homeworld'
            && item[0] !== 'residents' && item[0] !== 'pilots';

    })

    const infoArray = sortEntries.map(item => {
        const property = (item[0][0].toUpperCase() + item[0].substring(1) + ': ').split('_').join(' ');

       return [property, item[1]]
    })

    console.log(infoArray)
    return <div className={style.specificItemWrapper}>

        <h1>
            {infoArray[0] && infoArray[0][1]}
        </h1>

        <div className={style.mainInfo}>
            <div className={style.photo}>

                <img src={imageURL + `${species}/${id}.jpg`}
                     onError={error}
                     alt={'image'}
                     className={style.mainImage}/>
            </div>
            <div className={style.info}>
                {infoArray.splice(1).map(item => {
                    return <div className={style.infoItem}>
                        <span className={style.nameProperty}>{item[0] + '   '}</span>
                        <span className={style.property}>{item[1]}</span>
                    </div>
                })}
            </div>
        </div>
    </div>
}

export default SpecificItem