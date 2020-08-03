import React from 'react'
import Countup, { useCountUp } from 'react-countup';

const ReactCountup = () => {

    const { countUp, start, pauseResume, reset, update } = useCountUp({
        duration: 5,
        end: 10000,
        startOnMount: false
    });

    return (
        <div>
            <div>
                <h1>{countUp}</h1>
                <button onClick={start}>Start</button>
                <button onClick={reset}>Reset</button>
                <button onClick={pauseResume}>Pause/Resume</button>
                <button onClick={() => update(2000)}>Update to 2000</button>
            </div>
            <Countup end={200}/>
            <br />
            <Countup end={200} duration={5}/>
            <br />
            <Countup start={500} end={200} duration={5}/>
            <br />
            <h2>
                <Countup end={1000} prefix='$' decimals={2} />
            </h2>
            <h2>
                <Countup end={1000} suffix='USD' decimals={2} />
            </h2>
        </div>
    )
}

export default ReactCountup
