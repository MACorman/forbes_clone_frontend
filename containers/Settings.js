import React from 'react'
import { View, Text, SafeAreaView, Button } from 'react-native'
import Modal from 'react-native-modal'
import LoginSignUp from '../components/LoginSignUp'


class Settings extends React.Component {

    state = {
        login: false
    }

    loginHandler = () => {
        this.setState({login: false})
    }

    render() {
        return (
            <View>
                <Modal isVisible={true} style={{ backgroundColor: 'white', margin: 0, alignItems: undefined, justifyContent: undefined}}>
                    <SafeAreaView>
                        {this.state.login
                        ?
                        <LoginSignUp loginHandler={this.loginHandler} />
                        :
                        <>
                            <Button onPress={this.props.closeModal} title='Done'>Done</Button>
                            <Text>Settings</Text>
                            <Text>SAVE CONTENT TO SYNC ACROSS DEVICES</Text>
                            <Button title="login" onPress={() => this.setState({ login: true })}>Create Account or Log In</Button>
                            <Text>SUBSCRIPTIONS</Text>
                            <Text>Activate Subscription</Text>
                            <Text>Subscription Help</Text>
                            <Text>RESTORE PURCHASES</Text>
                            <Text>HELP</Text>
                            <Text>FAQ</Text>
                            <Text>App Help</Text>
                            <Text>DOWNLOAD FOR OFFLINE</Text>
                            <Text>Auto Cache</Text>
                            <Text>Clear Offline Cache</Text>
                            <Text>LEGAL</Text>
                            <Text>Privacy Policy</Text>
                            <Text>Terms of Services</Text>
                        </>
                        }
                    </SafeAreaView>   
                </Modal>    
            </View>
        )
    }

}

export default Settings