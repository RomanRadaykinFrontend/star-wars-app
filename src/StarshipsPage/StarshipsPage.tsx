import React from 'react';
import AllItems from "../AllItems/AllItems";

type StarshipsPagePropsType = {
    typeOfItems: 'peoples' | 'starships' | 'planets' | 'vehicles'
}

const StarshipsPage = (props: StarshipsPagePropsType) => {
    return <AllItems typeOfItems={props.typeOfItems}/>
}

export default StarshipsPage