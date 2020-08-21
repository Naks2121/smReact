import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../Redux/dialogs-reducer";

function Dialogs(props) {
  const state = props.store.getState().dialogsPage;
  //containers
  const dialogElements = state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  const messageElements = state.messages.map((m) => (
    <Message message={m.message} />
  ));

  const newMessageBody = state.newMessageBody;

  function onSendMessageClick() {
    props.store.dispatch(sendMessageCreator());
  }

  function onNewMessageChange(e) {
    const body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  }

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>{dialogElements}</div>
      <div className={styles.messages}>
        <div> {messageElements} </div>
        <div>
          <div>
            <textarea
              onChange={onNewMessageChange}
              value={newMessageBody}
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dialogs;
