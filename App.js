import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import 'react-native-gesture-handler';
import AppContainer from './containers/AppContainer'
import Settings from './containers/Settings'
import Search from './components/Search'
import FullStory from './components/FullStory'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch, faChevronLeft, faCog } from '@fortawesome/free-solid-svg-icons'
import AsyncStorage from '@react-native-community/async-storage';

class App extends React.Component {

  state = {
    show: 'home',
    article: {},
    users: [],
    currentUser: {},
    purchases: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/users')
    .then(resp => resp.json())
    .then(users => this.setState({ users }))
    this.getCurrentUser()
  }

  async getCurrentUser() {
    try {
      const currentUser = await AsyncStorage.getItem('currentUser');
      this.setState({currentUser: JSON.parse(currentUser)});
    } catch (error) {
      console.log("Error retrieving data" + error);
    }
  }

  showStoryDetails = (article) => {
    this.setState({show: 'full story', article: article})
  }

  closeModal = () => {
    this.setState({show: 'home'})
  }

  createUser = (user) => {
    fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        username: user.username,
        password: user.password
      })
    })
    .then(resp => resp.json())
    .then(user => {
      this.setState({users: [...this.state.users, user]})
      this.login(user)
    })
  }

  login = (u) => {
    let currentUser = this.state.users.find(user => user.username === u.username)
    this.setCurrentUser(currentUser)
  }

  async setCurrentUser(currentUser) {
    try {
      await AsyncStorage.setItem('currentUser', JSON.stringify(currentUser));
    } catch (error) {
      console.log("Error saving data" + error);
    }
    this.setState({currentUser})
  }

  logout = () => {
    this.setState({ currentUser: {} })
    this.closeModal()
    this.removeItemValue()
  }

  async removeItemValue() {
    try {
        await AsyncStorage.removeItem('currentUser');
        return true;
    }
    catch(exception) {
        return false;
    }
  }

  purchaseMagazine = (item) => {
    let userId = parseInt(this.state.currentUser.id)
    let magId = parseInt(item.id)

    fetch('http://localhost:3000/purchases', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        user_id: userId,
        magazine_id: magId
      })
    })
    .then(resp => resp.json())
    .then(purchase => this.setState({purchases: [...this.state.purchases, purchase]}))
  }

  displayHandler = () => {
    switch(this.state.show) {
      case 'full story':
        return (
          <>
            <View style={{backgroundColor: '#212424', paddingTop: 50, paddingBottom: 10}}>
              <FontAwesomeIcon icon={ faChevronLeft } size={30} color='white' onPress={() => this.setState({show: 'home'})} />
            </View>
            <FullStory article={this.state.article}/>
        </>
        )
      case 'settings': 
        return (
          <>
          <View style={{backgroundColor: '#212424', paddingTop: 50, paddingBottom: 5}}>
            <Settings login={this.login} closeModal={this.closeModal} currentUser={this.state.currentUser} logout={this.logout} createUser={this.createUser} /> 
          </View>
          <Text style={{backgroundColor: '#181716', paddingTop: 12, paddingBottom: 12, color: 'white', fontSize: 18, textAlign: 'center', fontFamily: 'Damascus'}}>{"Tap Your Phone's Settings\n\To Turn On Notificaions For\n\Breaking News And Exclusives."}</Text>
          <AppContainer showStoryDetails={this.showStoryDetails}/>
        </>
        )
      case 'search':
        return (
          <>
            <View style={{backgroundColor: '#212424', paddingTop: 50, paddingBottom: 5}}>
              <Search closeModal={this.closeModal} showStoryDetails={this.showStoryDetails}/> 
            </View>
            <Text style={{backgroundColor: '#181716', paddingTop: 12, paddingBottom: 12, color: 'white', fontSize: 18, textAlign: 'center', fontFamily: 'Damascus'}}>{"Tap Your Phone's Settings\n\To Turn On Notificaions For\n\Breaking News And Exclusives."}</Text>
            <AppContainer showStoryDetails={this.showStoryDetails}/>
          </>
        )
      case 'home':
        return (
          <>
            <View style={{backgroundColor: '#212424', paddingTop: 50, paddingBottom: 5}}>
              <View style={{flexDirection: 'row'}}>
                <Image source={require('./Forbes_Logo-WhiteOnTrns@png.png')} style={{width: 200, height: 40, marginLeft: 110}}/>
                <FontAwesomeIcon icon={ faSearch } size={20} color='white' style={{paddingTop: 40, marginLeft: 35, marginRight: 10}} onPress={() => this.setState({show: 'search'})}/>
                <FontAwesomeIcon icon={ faCog } size={20} color='white' style={{paddingTop: 40}} onPress={() => this.setState({show: 'settings'})}/>
              </View> 
            </View>
            <Text style={{backgroundColor: '#181716', paddingTop: 12, paddingBottom: 12, color: 'white', fontSize: 18, textAlign: 'center', fontFamily: 'Damascus'}}>{"Tap Your Phone's Settings\n\To Turn On Notificaions For\n\Breaking News And Exclusives."}</Text>
            <AppContainer currentUser={this.state.currentUser} showStoryDetails={this.showStoryDetails} purchaseMagazine={this.purchaseMagazine}/>
          </>
        )
    }
  }
  
  render() {
    console.disableYellowBox = true
      return (
        <>
          {this.displayHandler()}
        </>
      );
  }
};

export default App;
