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
} from 'react-native';
import 'react-native-gesture-handler';
import AppContainer from './containers/AppContainer'
import Settings from './containers/Settings'
import SearchBar from './components/SearchBar'
import { ScrollView } from 'react-native-gesture-handler';


function App() {
  return (
    <>
      <SafeAreaView>
          <View>
            <Text>Forbes</Text>
            <SearchBar />
            <Settings />
          </View>
      </SafeAreaView>
      <AppContainer />
    </>
  );
};

// const styles = StyleSheet.create({
  
//   },
// });

export default App;
