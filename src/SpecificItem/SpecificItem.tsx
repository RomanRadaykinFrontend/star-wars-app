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
        dispatch(getSpecificItemThunk(species, id))
    }, [])


    const entries = Object.entries(data)
    console.log(entries)

    const actualInfo = entries.map((item) => {
        if (item[0] !== "films" && item[0] !== 'species' && item[0] !== 'vehicles' && item[0] !== 'starships'
            && item[0] !== 'created' && item[0] !== 'edited' && item[0] !== 'url' && item[0] !== 'homeworld'
            && item[0] !== 'residents' && item[0] !== 'pilots') {

            const property = (item[0][0].toUpperCase() + item[0].substring(1) + ': ').split('_').join(' ');
            return [property, item[1]]
        }
    })


    return <div className={style.specificItemWrapper}>

        <div className={style.photo}>
            <img src={imageURL + `${species}/${id}.jpg`}
                 onError={error}
                 alt={'image'}
                 className={style.mainImage}/>
        </div>


        <div className={style.info} style={{color: 'white'}}>
            {actualInfo.map(item => {
                return <div>{item}</div>
            })}
        </div>
    </div>
}

export default SpecificItem