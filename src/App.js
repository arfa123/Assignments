import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import {TabNavigator, StackNavigator} from 'react-navigation';
import Login from './components/Login';
import Signup from './components/Signup';
import Main from './components/Main';
import AddCircle from './components/AddCircle';

export default class App extends Component{
    render(){
        const MainNavigator = StackNavigator({
            login: {screen: Login},
            signup: {screen: Signup},
            main: {screen: Main},
            addcircle: {screen: AddCircle}
        },{
            headerMode: 'none'
        });
        return(
            <Provider store={store}>
                <MainNavigator />
            </Provider>    
        )
    }
}