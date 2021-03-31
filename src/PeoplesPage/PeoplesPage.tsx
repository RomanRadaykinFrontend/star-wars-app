import React from 'react';
import AllItems from "../AllItems/AllItems";

type PeoplesPagePropsType = {
    typeOfItems: 'peoples' | 'starships' | 'planets' | 'vehicles'
}

const PeoplesPage = (props: PeoplesPagePropsType) => {
    return <div>
        <AllItems typeOfItems={props.typeOfItems}/>
    </div>

}

export default PeoplesPage