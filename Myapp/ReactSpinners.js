import React from 'react'
import { BounceLoader, BarLoader, BeatLoader } from 'react-spinners';


const ReactSpinners = () => {
    return (
        <div>
            <BounceLoader loading/>
            <BarLoader loading  />
            <BeatLoader loading  />
        </div>
    )
}

export default ReactSpinners
