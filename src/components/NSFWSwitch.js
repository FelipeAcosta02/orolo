import React from 'react';
import { Switch } from 'antd'

const nsfwSwitch = (props) => {
return (
        <div>
            <p>Include NSFW answears</p>
            <Switch defaultChecked={props.checkedState} onChange={props.nsfwHandler}/>
        </div>
    )
}

export default nsfwSwitch