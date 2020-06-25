import React from 'react'
import { Text, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

class LoginSignUp extends React.Component {

    state = {
        username: '',
        password: ''
    }

    loginDataHandler = () => {
        let user = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.login(user)
        // this.props.closeModal()
        // this.props.loginHandler()
        this.props.defaultDisplay()
        this.setState({
            username: '',
            password: ''
        })
    }
    

    render() {
        return (
            <>
                <Button onPress={this.props.defaultDisplay} title='back'>Back</Button>
                <Text>Login or Sign Up</Text>
                <TextInput 
                    style={{borderBottomWidth: 1, borderBottomColor: 'grey', width: 350}}
                    autoCapitalize = 'none'
                    placeholder="Email"
                    onChangeText={(text) => this.setState({username: text})}
                    value={this.state.username}
                    autoFocus={true} 
                />
                <TextInput 
                    style={{borderBottomWidth: 1, borderBottomColor: 'grey', width: 350}}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={(text) => this.setState({password: text})}
                    value={this.state.password}
                    autoFocus={true} 
                />
                <Button onPress={this.loginDataHandler} title='login'>Login</Button>
            </>
        )
    }
}

export default LoginSignUp