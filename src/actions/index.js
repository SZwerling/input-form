

export const cardCreator = values => {
    return {
    type: 'NEW_CARD',
    payload: [values]
    }
}



export const fuff = stuff => {
    return {
        type: 'BUFF',
        payload: stuff
    }
}