import React, { useState, useRef } from 'react'
import IdleTimer from 'react-idle-timer';
import Modal from 'react-modal';

const ReactIdleTimer = () => {

    const [isLoggedIn, setisLoggedIn] = useState(true);
    const [modalIsOpen, setmodalIsOpen] = useState(false);
    const idleTimeRef = useRef( null);
    const sessionTimeoutRef = useRef(null);

    const onIdle = () => {
        console.log("user is idle");
        setmodalIsOpen(true);
        sessionTimeoutRef.current = setTimeout(logOut, 5000);
    }

    const logOut = () => {
        setmodalIsOpen(false);
        clearTimeout(sessionTimeoutRef.current)
        setisLoggedIn(false);
        console.log("User has loged out");
    }

    const stayActive = () => {
        setmodalIsOpen(false);
        clearTimeout(sessionTimeoutRef.current)
        console.log('User is active')
    }
    return (
        <div>
            {
                isLoggedIn ? <h2>Hello Mahesh</h2>: <h2>Hello Guest</h2>
            }
            <Modal isOpen={modalIsOpen}>
                <h2>You have been idle for a while</h2>
                 <p>You will be logged out soon</p>
                 <button onClick={logOut}>Log me out</button>
                 <button onClick={stayActive}>Keep me signed in</button>

            </Modal>
            <IdleTimer 
                ref = {idleTimeRef}
                timeout={5 * 1000}
                onIdle={onIdle}
            >

            </IdleTimer>
        </div>
    );
}

export default ReactIdleTimer
