import React from 'react';
import AllItems from "../AllItems/AllItems";

type VehiclesPagePropsType = {
    typeOfItems: 'characters' | 'starships' | 'planets' | 'vehicles'
}

const VehiclesPage = (props: VehiclesPagePropsType) => {
    return <AllItems typeOfItems={props.typeOfItems}/>
}

export default VehiclesPage