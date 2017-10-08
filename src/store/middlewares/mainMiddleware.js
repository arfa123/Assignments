import * as MainAction from '../actions/mainAction';
import {firebaseApp} from '../../Firebase';

export class MainMiddleware{
    static userLocation = (location) => {
        return (dispatch) => {
            dispatch(MainAction.userLocation(location))
        }
    }
    static addCircle = (circleName,location) => {
        return (dispatch) => {
            console.log("location",location)
            const user = firebaseApp.auth().currentUser
            let circles
            console.log('user:',user)
            if(user){
                firebaseApp.database().ref(`Circles/${circleName}/${user.uid}`).set(`${[location.latitude,location.longitude]}`)
                .then(() => {
                    firebaseApp.database().ref(`Users/${user.uid}/circles`).push(circleName)
                    .then(() => {
                        firebaseApp.database().ref(`Users/${user.uid}/circles`)
                        .once('value',(snap) => {
                            circles = Object.values(snap.val())
                            dispatch(MainAction.circleAdded(circles))
                        })
                    })
                })
            }
        }
    }
}