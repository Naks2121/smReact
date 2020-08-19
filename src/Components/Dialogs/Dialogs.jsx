import React from "react";
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { NavLink } from "react-router-dom";

function Dialogs(props) {
    //containers
    const dialogElements = props.state.dialogs
    .map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> );

    const messageElements = props.state.messages
    .map( m => <Message message={ m.message }/> );

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                { dialogElements }
            </div>
            <div className={styles.messages}>
                { messageElements }
            </div>
        </div>
    )
}
export default Dialogs;