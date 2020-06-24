/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  StatusBar
} from 'react-native';
import 'react-native-gesture-handler';
import AppContainer from './containers/AppContainer'
import Settings from './containers/Settings'
import Search from './components/Search'
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import FullStory from './components/FullStory'
import Icon from 'react-native-vector-icons/FontAwesome'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch, faChevronLeft, faCog } from '@fortawesome/free-solid-svg-icons'

class App extends React.Component {

  state = {
    show: 'home',
    article: {},
  }

  showStoryDetails = (article) => {
    this.setState({show: 'full story', article: article})
}

  closeModal = () => {
    this.setState({show: 'home'})
  }

  

  displayHandler = () => {
    switch(this.state.show) {
      case 'full story':
        return (
          <>
            <View style={{backgroundColor: '181716', paddingTop: 50, paddingBottom: 10}}>
              <FontAwesomeIcon icon={ faChevronLeft } size={30} color='#d3d3d3' onPress={() => this.setState({show: 'home'})} />
            </View>
            <FullStory article={this.state.article}/>
        </>
        )
      case 'settings': 
        return (
          <>
          <View style={{backgroundColor: '#181716', paddingTop: 50, paddingBottom: 5}}>
            <Settings closeModal={this.closeModal} /> 
          </View>
          <Text style={{backgroundColor: '#333333', paddingTop: 12, paddingBottom: 12, color: 'white', fontSize: 18, textAlign: 'center', fontFamily: 'Damascus'}}>{"Tap Your Phone's Settings\n\To Turn On Notificaions For\n\Breaking News And Exclusives."}</Text>
          <AppContainer showStoryDetails={this.showStoryDetails}/>
        </>
        )
      case 'search':
        return (
          <>
            <View style={{backgroundColor: '#181716', paddingTop: 50, paddingBottom: 5}}>
              <Search closeModal={this.closeModal} /> 
            </View>
            <Text style={{backgroundColor: '#333333', paddingTop: 12, paddingBottom: 12, color: 'white', fontSize: 18, textAlign: 'center', fontFamily: 'Damascus'}}>{"Tap Your Phone's Settings\n\To Turn On Notificaions For\n\Breaking News And Exclusives."}</Text>
            <AppContainer showStoryDetails={this.showStoryDetails}/>
          </>
        )
      case 'home':
        return (
          <>
            <View style={{backgroundColor: '#181716', paddingTop: 50, paddingBottom: 5}}>
              <View style={{flexDirection: 'row'}}>
                        <Image source={require('./Forbes_Logo-WhiteOnBlack@png.png')} style={{width: 200, height: 40, marginLeft: 110}}/>
                        <FontAwesomeIcon icon={ faSearch } size={20} color='white' style={{paddingTop: 40, marginLeft: 35, marginRight: 10}} onPress={() => this.setState({show: 'search'})}/>
                        <FontAwesomeIcon icon={ faCog } size={20} color='white' style={{paddingTop: 40}} onPress={() => this.setState({show: 'settings'})}/>
              </View> 
            </View>
            <Text style={{backgroundColor: '#333333', paddingTop: 12, paddingBottom: 12, color: 'white', fontSize: 18, textAlign: 'center', fontFamily: 'Damascus'}}>{"Tap Your Phone's Settings\n\To Turn On Notificaions For\n\Breaking News And Exclusives."}</Text>
            <AppContainer showStoryDetails={this.showStoryDetails}/>
          </>
        )
    }
  }
  
  render() {

    return (
      <>
        {this.displayHandler()}
      </>
      // <>
      // {
      //   this.state.showFullStory 
      //   ?
      //   <>
            
      //     {/* <SafeAreaView> */}
      //       <View style={{backgroundColor: '181716', paddingTop: 50, paddingBottom: 10}}>
      //         <FontAwesomeIcon icon={ faChevronLeft } size={30} color='#d3d3d3' onPress={() => this.setState({showFullStory: false})} />

      //       </View>
      //         <FullStory article={this.state.article}/>

      //     {/* </SafeAreaView> */}
        
      //   </>
      //   :
      //   <>
      //     {/* <SafeAreaView> */}
      //         <View style={{backgroundColor: '#181716', paddingTop: 50, paddingBottom: 5}}>
      //           {this.state.showSearch 
      //           ? 
      //           <>
      //             <Search closeSearch={this.closeSearch} /> 
      //           </>
      //           :
      //             <View style={{flexDirection: 'row'}}>
      //               <Image source={require('./Forbes_Logo-WhiteOnBlack@png.png')} style={{width: 200, height: 40, marginLeft: 110}}/>
      //               <FontAwesomeIcon icon={ faCog } size={20} color='white' style={{paddingTop: 40}} onPress={() => this.setState({showSettings: true})}/>
      //               <FontAwesomeIcon icon={ faSearch } size={20} color='white' style={{paddingTop: 40}} onPress={() => this.setState({showSearch: true})}/>
      //             </View> 
      //           }
      //         </View>
      //         <Text style={{backgroundColor: '#333333', paddingTop: 12, paddingBottom: 12, color: 'white', fontSize: 18, textAlign: 'center', fontFamily: 'Damascus'}}>{"Tap Your Phone's Settings\n\To Turn On Notificaions For\n\Breaking News And Exclusives."}</Text>
      //     {/* </SafeAreaView> */}
      //     <AppContainer showStoryDetails={this.showStoryDetails}/>
      //   </>


      // }
      // </>
    );
  }

};

// const styles = StyleSheet.create({
  
//   },
// });

export default App;
