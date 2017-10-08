import React, { Component } from 'react';
import { View, Modal, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import {connect} from 'react-redux';
import {Picker, FooterTab, Icon, Text, Container, Header, Title, Content, Footer, Item, Left, Right, Label, Body, Button, Form} from 'native-base';
import {MainMiddleware} from '../store/middlewares/mainMiddleware';

const { width, height } = Dimensions.get('window');
const ratio = width / height;
class Main extends Component{
    constructor(props){
        super(props)
        this.state = {
            latitude: this.props.currentLocation.latitude,
            longitude: this.props.currentLocation.longitude,
            latitudeDelta: 0.922,
            longitudeDelta: 0.922 * ratio,
            showModal: false,
            circle: ''
        }
    }
    componentWillMount(){
        navigator.geolocation.getCurrentPosition((position) => {
            console.log("posi:",position)
            this.props.userLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            })
            this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            })
        },(error) => {
            console.log("err:",error)
            this.setState({error: error.message})
        },{
            enableHighAccuracy: true
        })
        navigator.geolocation.watchPosition((position) => {
            console.log("position change:",position)
            this.props.userLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            })
        },(error) => {
            console.log("error:",error)
            this.setState({error: error})
        })
    }
    componentWillUnmount(){
        navigator.geolocation.clearWatch()
    }
    componentDidMount(){
        console.log("loc",this.props.currentLocation)
    }
    componentDidUpdate(){
        console.log("loc",this.props.currentLocation)
    }
    render(){
        const { width, height } = Dimensions.get('window');
        const {navigate} = this.props.navigation;
        return(
            <Container>
                <Header>
                    
                    <Body>
                        <Title>Family GPS Tracker</Title>
                    </Body>
                    
                </Header>
                <Content scrollEnabled={false}>
                    <View style={{width, height}}>
                        <Picker
                        mode="dropdown"
                        placeholder="Circles"
                        selectedValue={this.state.circles}
                        onValueChange={(circle) => this.setState({circle})}>
                            {this.props.circles.map((x,y) => {
                                console.log("items:",x)
                                return(
                                    
                                      {/* <Item label={x} value={x} />   */}
                                )
                            })}
                        </Picker>
                        <MapView style={{...StyleSheet.absoluteFillObject}}
                        region={{
                            latitude: this.state.latitude,
                            longitude: this.state.longitude,
                            latitudeDelta: this.state.longitudeDelta,
                            longitudeDelta: this.state.latitudeDelta,
                        }}>
                            <MapView.Marker 
                            title="You are here"
                            pinColor='blue'
                            coordinate={{
                                latitude: this.props.currentLocation.latitude,
                                longitude: this.props.currentLocation.longitude
                            }}
                            />
                        </MapView>
                    </View>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button onPress={() => {this.props.newCircle();navigate('addcircle')}}>
                            <Text>Add Circle</Text>
                        </Button> 
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        currentLocation: state.MainReducer.userLocation,
        circles: state.MainReducer.circles
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        userLocation: (location) => {
            dispatch(MainMiddleware.userLocation(location))
        },
        newCircle: () => {
            dispatch({type: 'NEW_CIRCLE'})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);