const initialState = {
    items: [],
    loading: false,
}

const imagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'images/load/start':
            return {
                ...state,
                loading: true
            }

        case 'images/load/success':
            return {
                ...state,
                items: action.payload,
                loading: false
            }

        default:
            return state
    }
}

export default imagesReducer;