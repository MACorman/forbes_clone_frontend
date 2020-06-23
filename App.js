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
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class App extends React.Component {

  state = {
    showFullStory: false,
    article: {},
    showSearch: false
  }

  showStoryDetails = (article) => {
    this.setState({showFullStory: true, article: article})
}

  closeSearch = () => {
    this.setState({showSearch: false})
  }
  
  render() {

    return (
      <>
      {
        this.state.showFullStory 
        ?
        <>
          <SafeAreaView>
            <View>
              <Button title='back' onPress={() => this.setState({showFullStory: false})}>Back</Button>
              <FullStory article={this.state.article}/>

            </View>
          </SafeAreaView>
        </>
        :
        <>
          {/* <SafeAreaView> */}
              <View style={{backgroundColor: '#181716', paddingTop: 50, paddingBottom: 5}}>
                {this.state.showSearch 
                ? 
                <>
                  <Search closeSearch={this.closeSearch} /> 
                </>
                :
                  <View style={{flexDirection: 'row'}}>
                    <Image source={require('./Forbes_Logo-WhiteOnBlack@png.png')} style={{width: 200, height: 40, marginLeft: 110}}/>
                    <Settings />
                    <FontAwesomeIcon icon={ faSearch } size={20} color='white' style={{paddingTop: 40}} onPress={() => this.setState({showSearch: true})}/>
                  </View> 
                }
              </View>
              <Text style={{backgroundColor: '#333333', paddingTop: 12, paddingBottom: 12, color: 'white', fontSize: 18, textAlign: 'center', fontFamily: 'Damascus'}}>{"Tap Your Phone's Settings\n\To Turn On Notificaions For\n\Breaking News And Exclusives."}</Text>
          {/* </SafeAreaView> */}
          <AppContainer showStoryDetails={this.showStoryDetails}/>
        </>


      }
      </>
    );
  }

};

// const styles = StyleSheet.create({
  
//   },
// });

export default App;
