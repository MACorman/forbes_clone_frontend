import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Modal from 'react-native-modal'
import LoginSignUp from '../components/LoginSignUp'
import PurchasedMags from '../containers/PurchasedMags'
import { TouchableHighlight } from 'react-native-gesture-handler'


class Settings extends React.Component {

    state = {
        display: 'default'
    }

    loginHandler = () => {
        this.setState({display: 'login'})
    }

    defaultDisplay = () => {
        this.setState({ display: 'default'})
    }

    displayHandler = () => {
        switch(this.state.display) {
            case 'login':
                return (
                    <View>
                        <Modal isVisible={true} style={{ backgroundColor: 'white', margin: 0, alignItems: undefined, justifyContent: undefined}}>
                            <LoginSignUp login={this.props.login} closeModal={this.props.closeModal} defaultDisplay={this.defaultDisplay} createUser={this.props.createUser}/>
                        </Modal>    
                    </View>
                )
            case 'purchases':
                return (
                    <View>
                        <Modal isVisible={true} style={{ backgroundColor: 'white', margin: 0, alignItems: undefined, justifyContent: undefined}}>
                            <PurchasedMags defaultDisplay={this.defaultDisplay} currentUser={this.props.currentUser} />
                        </Modal>    
                    </View>
                )
            case 'default':
                return (
                    <View>
                        <Modal isVisible={true} style={{ backgroundColor: 'white', margin: 0, alignItems: undefined, justifyContent: undefined}}>
                                <View style={{flexDirection: 'row', backgroundColor: '#212424', paddingTop: 65, paddingBottom: 10}}>
                                    <View style={{marginLeft: 175, marginRight: 100}}>
                                        <Text style={{fontSize: 20, fontFamily: 'Damascus', fontWeight: 'bold', color: 'white'}}>Settings</Text>
                                    </View>
                                    <View style={{paddingRight: 30}}>
                                        <TouchableHighlight underlayColor='#212424' onPress={this.props.closeModal}>
                                            <Text style={{fontSize: 20, color: 'white', fontFamily: 'Damascus', fontWeight: 'bold'}}>Done</Text>
                                        </TouchableHighlight>
                                    </View>
                                </View>
                            <SafeAreaView style={{backgroundColor: '#ededed', height: 2000}}>
                                <Text style={{paddingTop: 25, paddingBottom: 10, paddingLeft: 15, color: '#737373', fontSize: 16, fontFamily: 'Damascus'}}>SAVE CONTENT TO SYNC ACROSS DEVICES</Text>
                                {
                                    this.props.currentUser 
                                ? 
                                    <View style={{borderBottomWidth: 1, borderBottomColor: '#d3d3d3', borderTopWidth: 1, borderTopColor: '#d3d3d3'}}>
                                        <TouchableHighlight onPress={() => this.props.logout()}>
                                            <Text style={{paddingTop: 10, paddingBottom: 10, backgroundColor: 'white', paddingLeft: 15, fontSize: 20, fontFamily: 'Damascus', color: '#333333'}}>Log Out</Text>
                                        </TouchableHighlight> 

                                    </View>
                                : 
                                    <View style={{borderBottomWidth: 1, borderBottomColor: '#d3d3d3', borderTopWidth: 1, borderTopColor: '#d3d3d3'}}>
                                        <TouchableHighlight onPress={() => this.setState({ display: 'login' })}>
                                            <Text style={{paddingTop: 15, paddingBottom: 10, backgroundColor: 'white', paddingLeft: 15, fontSize: 20, fontFamily: 'Damascus', color: '#333333'}}>Create Account or Log In</Text>
                                        </TouchableHighlight>
                                    </View>
                                }
                                <Text style={{paddingTop: 15, paddingBottom: 10, paddingLeft: 15, color: '#737373', fontSize: 16, fontFamily: 'Damascus'}}>SUBSCRIPTIONS</Text>
                                {
                                    this.props.currentUser
                                ?
                                    <View style={{borderTopWidth: 1, borderTopColor: '#d3d3d3'}}>
                                            <Text style={{paddingTop: 10, paddingBottom: 10, backgroundColor: 'white', paddingLeft: 15, fontSize: 20, fontFamily: 'Damascus', color: '#333333'}}>Manage Subscription</Text>
                                    </View>
                                :
                                    <View style={{borderTopWidth: 1, borderTopColor: '#d3d3d3'}}>
                                        <TouchableHighlight onPress={() => this.setState({ display: 'login' })}>
                                            <Text style={{paddingTop: 10, paddingBottom: 10, backgroundColor: 'white', paddingLeft: 15, fontSize: 20, fontFamily: 'Damascus', color: '#333333'}}>Activate Subscription</Text>
                                        </TouchableHighlight>
                                    </View>
                                }
                                <View style={{borderBottomWidth: 1, borderBottomColor: '#d3d3d3', borderTopWidth: 1, borderTopColor: '#d3d3d3'}}>
                                    <Text style={{paddingTop: 10, paddingBottom: 10, backgroundColor: 'white', paddingLeft: 15, fontSize: 20, fontFamily: 'Damascus', color: '#333333'}}>Subscription Help</Text>
                                </View>
                                <View style={{borderBottomWidth: 1, borderBottomColor: '#d3d3d3'}}>
                                    { this.props.currentUser ? <TouchableHighlight onPress={() => this.setState({ display: 'purchases'})}>
                                        <Text style={{paddingTop: 10, paddingBottom: 10, backgroundColor: 'white', paddingLeft: 15, fontSize: 20, fontFamily: 'Damascus', color: '#333333'}}>VIEW PURCHASES</Text>
                                    </TouchableHighlight> : <Text style={{paddingTop: 10, paddingBottom: 10, backgroundColor: 'white', paddingLeft: 15, fontSize: 20, fontFamily: 'Damascus', color: '#333333'}}>LOG IN TO VIEW PURCHASES</Text>}
                                </View>
                                <Text style={{paddingTop: 15, paddingBottom: 10, paddingLeft: 15, color: '#737373', fontSize: 16, fontFamily: 'Damascus'}}>HELP</Text>
                                <View style={{borderBottomWidth: 1, borderBottomColor: '#d3d3d3', borderTopWidth: 1, borderTopColor: '#d3d3d3'}}>
                                    <Text style={{paddingTop: 10, paddingBottom: 10, backgroundColor: 'white', paddingLeft: 15, fontSize: 20, fontFamily: 'Damascus', color: '#333333'}}>FAQ</Text>
                                </View>
                                <View style={{borderBottomWidth: 1, borderBottomColor: '#d3d3d3'}}>
                                    <Text style={{paddingTop: 10, paddingBottom: 10, backgroundColor: 'white', paddingLeft: 15, fontSize: 20, fontFamily: 'Damascus', color: '#333333'}}>App Help</Text>
                                </View>
                                <Text style={{paddingTop: 15, paddingBottom: 10, paddingLeft: 15, color: '#737373', fontSize: 16, fontFamily: 'Damascus'}}>DOWNLOAD FOR OFFLINE</Text>
                                <View style={{borderBottomWidth: 1, borderBottomColor: '#d3d3d3', borderTopWidth: 1, borderTopColor: '#d3d3d3'}}>
                                    <Text style={{paddingTop: 15, paddingBottom: 10, backgroundColor: 'white', paddingLeft: 15, fontSize: 20, fontFamily: 'Damascus', color: '#333333'}}>Auto Cache                                                ON</Text>
                                </View>
                                <View style={{borderBottomWidth: 1, borderBottomColor: '#d3d3d3'}}>
                                    <Text style={{paddingTop: 10, paddingBottom: 10, backgroundColor: 'white', paddingLeft: 15, color: 'red', fontSize: 20, fontFamily: 'Damascus'}}>Clear Offline Cache</Text>
                                </View>
                                <Text style={{paddingTop: 15, paddingBottom: 10, paddingLeft: 15, color: '#737373', fontSize: 16, fontFamily: 'Damascus'}}>LEGAL</Text>
                                <View style={{borderBottomWidth: 1, borderBottomColor: '#d3d3d3', borderTopWidth: 1, borderTopColor: '#d3d3d3'}}>
                                    <Text style={{paddingTop: 10, paddingBottom: 10, backgroundColor: 'white', paddingLeft: 15, fontSize: 20, fontFamily: 'Damascus', color: '#333333'}}>Privacy Policy</Text>
                                </View>
                                <View style={{borderBottomWidth: 1, borderBottomColor: '#d3d3d3'}}>
                                    <Text style={{paddingTop: 10, paddingBottom: 10, backgroundColor: 'white', paddingLeft: 15, fontSize: 20, fontFamily: 'Damascus', color: '#333333'}}>Terms of Services</Text>
                                </View>
                                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 30}}>
                                    <Text style={{fontFamily: 'Damascus', color: '#737373'}}>POWERED BY </Text><Text style={{fontFamily: 'Damascus', color: '#737373', fontWeight: 'bold'}}>MADZ</Text>
                                </View>
                            </SafeAreaView>   
                        </Modal>    
                    </View>
                )
        }
    }

    render() {
        return (
            <>
                {this.displayHandler()}
            </>
        )
    }

}

export default Settings