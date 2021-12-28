

export const cardAction = (id, front, back) => {
    return {
    type: 'NEW_CARD',
    payload: {
        id: id,
        front: front,
        back: back
        }
    }
}

