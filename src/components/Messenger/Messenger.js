import React from 'react'
import styles from './Messenger.module.css'
import Dialog from './Dialogs'
import Message from './Messages'

const Messenger = (props) => {

    let dialogsElements = props.state.dialogsData
        .map(dialog => <Dialog name = {dialog.name} id = {dialog.id}/>)
    
    let messagesElements = props.state.messagesData
        .map(message => <Message text = {message.message}/>)

    return (
        <div className = {styles.messenger}>
            <div className = {styles.dialogs}>
                {dialogsElements}
            </div>
            <div className = {styles.messages}>
               {messagesElements}
           </div>
        </div>
    )
}

export default Messenger