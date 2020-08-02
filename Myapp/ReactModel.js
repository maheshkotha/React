import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');
const ReactModel = () => {

    const [modalIsOpen, setmodalIsOpen] = useState(false)
    return (
        <div>
            <button onClick={() => setmodalIsOpen(true)}>
                Open Modal
            </button>
            <Modal 
                isOpen ={modalIsOpen} 
                shouldCloseOnOverlayClick={false}
                onRequestClose={() => setmodalIsOpen(false)}
                style={
                    {
                        overlay: {
                            background: 'gray'
                        },
                        content: {
                            color: 'orange'
                        }
                    }
                }
            >
                <h2>Modal Title</h2>
                <p>Model body</p>
                <button onClick={() => setmodalIsOpen(false)}>Close</button>
            </Modal>
        </div>
    )
}

export default ReactModel
