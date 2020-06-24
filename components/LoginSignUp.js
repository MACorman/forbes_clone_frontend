import React from 'react'
import { Text, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

class LoginSignUp extends React.Component {

    state = {
        username: '',
        password: ''
    }

    render() {
        return (
            <>
                <Button onPress={this.props.loginHandler} title='back'>Back</Button>
                <Text>Login or Sign Up</Text>
                <TextInput 
                    style={{borderBottomWidth: 1, borderBottomColor: 'grey', width: 350}}
                    onChangeText={(text) => this.setState({username: text})}
                    value={this.state.input}
                    autoFocus={true} 
                />
                <TextInput 
                    style={{borderBottomWidth: 1, borderBottomColor: 'grey', width: 350}}
                    onChangeText={(text) => this.setState({password: text})}
                    value={this.state.input}
                    autoFocus={true} 
                />
                <Button title='login'>Login</Button>
            </>
        )
    }
}

export default LoginSignUp