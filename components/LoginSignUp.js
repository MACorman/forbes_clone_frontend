import React from 'react'
import {
    Text,
    View,
    Image 
} from 'react-native'
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler'

class LoginSignUp extends React.Component {

    state = {
        username: '',
        password: '',
        hasAccount: false
    }

    loginDataHandler = () => {
        let user = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.login(user)
        this.props.defaultDisplay()
        this.setState({
            username: '',
            password: ''
        })
    }

    createAccountHandler = () => {
        let user = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.createUser(user)
        this.props.defaultDisplay()
        this.setState({
            username: '',
            password: ''
        })
    }
    

    render() {
        return (
            <>
                <View style={{backgroundColor: '#212424', paddingTop: 50, paddingBottom: 5}}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableHighlight onPress={this.props.defaultDisplay} style={{paddingLeft: 15, paddingTop: 10}}>
                        <Text style={{color: 'white', fontSize: 20, fontFamily: 'Damascus'}}>Cancel</Text>
                    </TouchableHighlight>
                    <Image source={require('../Forbes_Logo-WhiteOnTrns@png.png')} style={{width: 200, height: 40, marginLeft: 30}}/>
                </View> 
                </View>
                <View style={{backgroundColor: '#E2E2E2', height: 1000}}>
                    <Image source={require('../Forbes_Logo-WhiteOnTrns@png.png')} style={{width: 300, height: 70, marginLeft: 'auto', marginRight: 'auto', marginTop: 150}}/>
                    <Text style={{textAlign: 'center', fontFamily: 'Damascus', fontWeight: 'bold', color: '#212424', paddingTop: 30, fontSize: 16}}>{'REGISTER FOR A FREE ACCOUNT\n\ TO SAVE AND SYNC ACROSS\n\DEVICES'}</Text>
                    <View style={{paddingTop: 20}}>
                        <View style={{backgroundColor: 'white', paddingTop: 15, borderBottomWidth: 1, borderBottomColor: '#d3d3d3', borderTopWidth: 1, borderTopColor: '#d3d3d3'}}>
                            <TextInput 
                                style={{paddingLeft: 20, paddingBottom: 15}}
                                autoCapitalize = 'none'
                                placeholder="Email"
                                onChangeText={(text) => this.setState({username: text})}
                                value={this.state.username}
                                autoFocus={true} 
                            />
                        </View>
                        <View style={{backgroundColor: 'white', paddingTop: 15, borderBottomWidth: 1, borderBottomColor: '#d3d3d3'}}>
                            <TextInput 
                                style={{paddingLeft: 20, paddingBottom: 15}}
                                placeholder="Password"
                                secureTextEntry={true}
                                onChangeText={(text) => this.setState({password: text})}
                                value={this.state.password}
                                autoFocus={true} 
                            />
                        </View>
                    </View>
                    <View style={{paddingTop: 15}}>
                        {
                            this.state.hasAccount
                        ? 
                            <TouchableHighlight onPress={this.loginDataHandler} style={{ borderRadius: 5, marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#212424'}}>
                                <Text style={{textAlign: 'center', color: 'white', paddingTop: 15, paddingBottom: 15, width: 350, fontFamily: 'Damascus', fontSize: 16}}>LOG IN</Text>
                            </TouchableHighlight> 
                        : 
                            <TouchableHighlight onPress={this.createAccountHandler} style={{ borderRadius: 5, marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#212424'}}>
                                <Text style={{textAlign: 'center', color: 'white', paddingTop: 15, paddingBottom: 15, width: 350, fontFamily: 'Damascus', fontSize: 16}}>CREATE ACCOUNT</Text>
                            </TouchableHighlight>
                        }
                        <TouchableHighlight style={{paddingTop: 10}} underlayColor='#E2E2E2' onPress={() => this.setState({hasAccount: !this.state.hasAccount})}>
                            <Text style={{textAlign: 'center'}}>{!this.state.hasAccount ? 'I ALREADY HAVE AN ACCOUNT' : 'I DO NOT HAVE AN ACCOUNT'}</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </>
        )
    }
}

export default LoginSignUp