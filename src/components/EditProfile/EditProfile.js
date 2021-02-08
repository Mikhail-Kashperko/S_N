import React from 'react'

const EditProfile = () => {
    return (
        <form>
            <input id = 'name' type = 'text' placeholder = 'Name' /> <br/>
            <input id = 'location' type = 'text' placeholder = 'Location' /> <br/>
            <input id = 'age' type = 'text' placeholder = 'Age' /> <br/>
            <button type = 'submit'> Save </button>
        </form>
    )
}

export default EditProfile