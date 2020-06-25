import React from 'react'
import { View, Text, SafeAreaView, Button } from 'react-native'
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
                            <SafeAreaView>
                                <LoginSignUp login={this.props.login} closeModal={this.props.closeModal} defaultDisplay={this.defaultDisplay} />
                            </SafeAreaView>   
                        </Modal>    
                    </View>
                )
            case 'purchases':
                return (
                    <View>
                        <Modal isVisible={true} style={{ backgroundColor: 'white', margin: 0, alignItems: undefined, justifyContent: undefined}}>
                            <SafeAreaView>
                                <PurchasedMags defaultDisplay={this.defaultDisplay} currentUser={this.props.currentUser} />
                            </SafeAreaView>   
                        </Modal>    
                    </View>
                )
            case 'default':
                return (
                    <View>
                        <Modal isVisible={true} style={{ backgroundColor: 'white', margin: 0, alignItems: undefined, justifyContent: undefined}}>
                                <View style={{flexDirection: 'row', backgroundColor: '#181716', paddingTop: 65, paddingBottom: 10}}>
                                    <View style={{marginLeft: 178, marginRight: 100}}>
                                    <Text style={{fontSize: 20, fontFamily: 'Damascus', fontWeight: 'bold', color: 'white'}}>Settings</Text>

                                    </View>
                                    <View style={{paddingRight: 30}}>
                                    <TouchableHighlight onPress={this.props.closeModal}>
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
                                            <Text style={{paddingTop: 15, paddingBottom: 10, backgroundColor: 'white', paddingLeft: 15, fontSize: 20, fontFamily: 'Damascus', color: '#333333'}}>Log In</Text>
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
                                    <TouchableHighlight onPress={() => this.setState({ display: 'purchases'})}>
                                        <Text style={{paddingTop: 10, paddingBottom: 10, backgroundColor: 'white', paddingLeft: 15, fontSize: 20, fontFamily: 'Damascus', color: '#333333'}}>VIEW PURCHASES</Text>
                                    </TouchableHighlight>
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
            // <View>
            //     <Modal isVisible={true} style={{ backgroundColor: 'white', margin: 0, alignItems: undefined, justifyContent: undefined}}>
            //         <SafeAreaView>
            //             {this.state.login
            //             ?
            //             <LoginSignUp login={this.props.login} closeModal={this.props.closeModal} loginHandler={this.loginHandler} />
            //             :
            //             <>
            //                 <Button onPress={this.props.closeModal} title='Done'>Done</Button>
            //                 <Text>Settings</Text>
            //                 <Text>SAVE CONTENT TO SYNC ACROSS DEVICES</Text>
            //                 {this.props.currentUser.username ? <Button title='logout' onPress={() => this.props.logout()}>Logout</Button> : <Button title="login" onPress={() => this.setState({ login: true })}>Create Account or Log In</Button>}
            //                 <Text>SUBSCRIPTIONS</Text>
            //                 <TouchableHighlight onPress={() => this.setState({ login: true })}>
            //                     <Text>Activate Subscription</Text>
            //                 </TouchableHighlight>
            //                 <Text>Subscription Help</Text>
            //                 <Text>RESTORE PURCHASES</Text>
            //                 <Text>HELP</Text>
            //                 <Text>FAQ</Text>
            //                 <Text>App Help</Text>
            //                 <Text>DOWNLOAD FOR OFFLINE</Text>
            //                 <Text>Auto Cache</Text>
            //                 <Text>Clear Offline Cache</Text>
            //                 <Text>LEGAL</Text>
            //                 <Text>Privacy Policy</Text>
            //                 <Text>Terms of Services</Text>
            //             </>
            //             }
            //         </SafeAreaView>   
            //     </Modal>    
            // </View>
        )
    }

}

export default Settings