import React from 'react'
import ReactPlayer from 'react-player';

const Player = () => {
    return (
        <div>
            <ReactPlayer 
                controls
                width='480px'
                height="240px"
                url="https://www.youtube.com/watch?v=7sDY4m8KNLc&list=PLC3y8-rFHvwhAh1ypBvcZLDO6I7QTY5CM&index=12" 
            />
        </div>
    )
}

export default Player;
