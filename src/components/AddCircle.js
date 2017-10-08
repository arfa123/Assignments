import React, {Component} from 'react';
import {} from 'react-native';
import {connect} from 'react-redux';
import {Title, Text, Container, Header, Content, Left, Right, Body, Input, Button, Form, Label, Item} from 'native-base';
import {MainMiddleware} from '../store/middlewares/mainMiddleware';

class AddCircle extends Component{
    constructor(props){
        super(props)
        this.state={
            circleName: ''
        }
    }
    componentDidMount(){
        console.log("location:",this.props.currentLocation)
        if(this.props.circleAdded){
            this.props.navigation.navigate('main')
        }
    }
    render(){
        return(
            <Container>
                <Header>
                    <Left></Left>
                    <Body>
                        <Title>Add Circle</Title>
                    </Body>
                    <Right></Right>
                </Header>
                <Content>
                    <Form>
                        <Item>
                            <Input 
                            placeholder="Enter Circle Name"
                            style={{padding: 10, fontSize: 25}}
                            onChangeText={(circleName) => this.setState({circleName})}
                            value={this.state.circleName}/> 
                        </Item>
                    </Form>
                    <Button onPress={() => this.props.addCircle(this.state.circleName,this.props.currentLocation)}>
                        <Text>Add Circle</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        circleAdded: state.MainReducer.circleAdded,
        currentLocation: state.MainReducer.userLocation
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        addCircle: (circleName,location) => {
            dispatch(MainMiddleware.addCircle(circleName,location))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddCircle);