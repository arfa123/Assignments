export const userLocation = (location) => {
    return{
        type: 'USER_LOCATION',
        payload: location
    }
}
export const circleAdded = (circles) => {
    return{
        type: 'CIRCLE_ADDED',
        payload: circles
    }
}