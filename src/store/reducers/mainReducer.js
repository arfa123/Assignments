const InitialState = {
    userLocation: {
        latitude: 90,
        longitude: 90
    },
    circles: [],
    circleAdded: false
}

export const MainReducer = (state = InitialState, action) => {
    switch(action.type){
        case 'USER_LOCATION':
            return{...state, userLocation: action.payload}
        case 'CIRCLE_ADDED':
            return{...state, circleAdded: true, circles: action.payload}
        case 'NEW_CIRCLE':
            return{...state, circleAdded: false}
        default:
            return state
    }
}