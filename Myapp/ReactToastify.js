import React from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';


const CustomToast = ({ closeToast }) => {
    return(
        <div>
            Something went wrong!
            <button onClick={closeToast}>Close</button>
        </div>
    )
}

toast.configure()

const ReactToast = () => {


    const notify = () => {
        toast("Basic Notification");
        toast.success('Basic Notification', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 8000
        });
        toast.info("Basic Notification", {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: false
        });
        toast.warning(<CustomToast/>, {
            position: toast.POSITION.BOTTOM_LEFT
        })
    }
    return (
        <div>
            <button onClick={notify}>Notify</button>
        </div>
    );
};

export default ReactToast;
