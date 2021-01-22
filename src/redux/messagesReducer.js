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

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody
            return {
                ...state, 
                messagesData: [...state.messagesData, {id: 5, message: body}], 
                newMessageBody: ''
            }
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