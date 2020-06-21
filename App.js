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
  Button
} from 'react-native';
import 'react-native-gesture-handler';
import AppContainer from './containers/AppContainer'
import Settings from './containers/Settings'
import Search from './components/Search'
import { ScrollView } from 'react-native-gesture-handler';
import FullStory from './components/FullStory'

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
          <SafeAreaView>
              <View>
                {this.state.showSearch 
                ? 
                <>
                  <Search closeSearch={this.closeSearch} /> 
                </>
                :
                <>
                <Text>Forbes</Text>
                <Settings />
                <Button onPress={() => this.setState({showSearch: true})}title='search'>Search</Button>
                </> 
                }
              </View>
          </SafeAreaView>
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
