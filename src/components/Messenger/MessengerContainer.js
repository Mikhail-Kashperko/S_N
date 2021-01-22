import React from 'react'
import { sendMessageCreator, updateMessageBodyCreator } from '../../redux/messagesReducer'
import Messenger from './Messenger'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateMessageBody: (body) => {
            dispatch(updateMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())

        }
    }
}

const MessengerContainer = connect(mapStateToProps, mapDispatchToProps )(Messenger)

export default MessengerContainer