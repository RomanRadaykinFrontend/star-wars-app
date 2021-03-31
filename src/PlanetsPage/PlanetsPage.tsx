import React from 'react';
import AllItems from "../AllItems/AllItems";

type PlanetsPagePropsType = {
    typeOfItems: 'peoples' | 'starships' | 'planets' | 'vehicles'
}

const PlanetsPage = (props: PlanetsPagePropsType) => {
    return <AllItems typeOfItems={props.typeOfItems}/>
}

export default PlanetsPage