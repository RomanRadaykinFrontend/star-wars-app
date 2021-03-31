import React from "react";
import {useSelector} from "react-redux";
import {RootStateType} from "../../api/store";
import {SpecificItemType} from "../../redux/specificItem-reducer";
import {PeopleItemStateType} from "../../redux/people-reducer";
import {log} from "util";

type HumanPropsType = {
    data: SpecificItemType
}

const Human = ({data}: HumanPropsType ) => {

    console.log(data)
        return <div>

        </div>

}

export default Human