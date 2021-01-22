const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    messagesData : [
        {id: 1, message: 'H1!'},
        {id: 2, message: 'Hello!'}],
    dialogsData : [
        {id: 1, name: 'Kolya'},
        {id: 2, name: 'Vanya'}],
    newMessageBody : ''
}

const mesagesReducer = (state = initialState, action) => {

    let stateCopy = {...state}

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            stateCopy.newMessageBody = action.body
            return stateCopy
        case SEND_MESSAGE:
            let body = state.newMessageBody
            stateCopy.newMessageBody = ''
            stateCopy.messagesData.push({id: 5, message: body})
            return stateCopy
        default:
            return state
    }
}

export let sendMessageCreator = () => ({
    type: SEND_MESSAGE
})

export let updateMessageBodyCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    body: text
})

export default mesagesReducer