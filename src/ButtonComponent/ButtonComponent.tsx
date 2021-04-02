import React from 'react';
import style from './ButtonComponent.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faJediOrder } from '@fortawesome/free-brands-svg-icons';



type ButtonComponentType = {
    nextPage: () => void
    previousPage: () => void
    maxPage: number
    actualPage: number
}


const ButtonComponent = (props: ButtonComponentType) => {

    const nextPageCallback = () => {
        props.nextPage()
    }

    const previousPageCallback = () => {
        props.previousPage()
    }

    return <div className={style.buttonsWrapper}>
        <button disabled={props.actualPage === 1} onClick={previousPageCallback}>
            <FontAwesomeIcon size={'3x'} icon={faArrowLeft}/>
        </button>
        <button disabled={props.actualPage === props.maxPage} onClick={nextPageCallback}>
            <FontAwesomeIcon size={'3x'} icon={faArrowRight}/>
        </button>

    </div>

}

export default ButtonComponent