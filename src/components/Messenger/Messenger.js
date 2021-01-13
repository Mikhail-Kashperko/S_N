import React from 'react'
import styles from './Messenger.module.css'
import Dialog from './Dialogs'
import Message from './Messages'

const Messenger = (props) => {

    let messagesData = [
        {id: 1, message: 'H1!'},
        {id: 1, message: 'Hello!'}
    ]

    let dialogsData = [
        {id: 1, name: 'Kolya'},
        {id: 2, name: 'Vanya'}
    ]

    let dialogsElements = dialogsData
        .map(dialog => <Dialog name = {dialog.name} id = {dialog.id}/>)
    
    let messagesElements = messagesData
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