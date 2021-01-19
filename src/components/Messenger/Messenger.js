import React from 'react'
import styles from './Messenger.module.css'
import Dialog from './Dialogs'
import Message from './Messages'
import { sendMessageCreator, updateMessageBodyCreator } from '../../redux/state'

const Messenger = (props) => {

    let state = props.store.getState().messagesPage

    let dialogsElements = state.dialogsData
        .map(dialog => <Dialog name = {dialog.name} id = {dialog.id}/>)
    
    let messagesElements = state.messagesData
        .map(message => <Message text = {message.message}/>)

    let newMessageBody = state.newMessageBody

    let onSendMessaheClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.store.dispatch(updateMessageBodyCreator(body))
    }


    return (
        <div className = {styles.messenger}>
            <div className = {styles.dialogs}>
                {dialogsElements}
            </div>
            <div className = {styles.messages}>
               {messagesElements}
           </div>
           <div >
                <div>
                    <textarea
                        onChange = {onNewMessageChange}
                        value = {newMessageBody}
                        placeholder = 'Enter your message' ></textarea>
                </div>
                <div>
                    <button
                        onClick = {onSendMessaheClick} >Send</button>
                </div>
           </div>
        </div>
    )
}

export default Messenger