import React from 'react'


function FragmentDemo() {
    const items = [];
    return (
        <React.Fragment>
            {
                items.map(item => (
                    <React.Fragment key= {item.id}>
                        <h1>Title</h1>
                        <p>{item.title}</p>
                    </React.Fragment>
                ))
            }
             <h1>Fragment Demo </h1>
             <p>This descripbe the Fragment Demo component </p>
        </React.Fragment>
    )
}

export default FragmentDemo
