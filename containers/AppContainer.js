import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import Latest from './Latest';
import Magazine from './Magazine';
import Video from './Video'

const Tabs = createBottomTabNavigator();

class AppContainer extends React.Component {

    render() {
        return (
        <NavigationContainer>
            <Tabs.Navigator>
            <Tabs.Screen name='Latest' component={Latest} />
            <Tabs.Screen name='Magazine' component={Magazine} />
            <Tabs.Screen name='Video' component={Video} />
            </Tabs.Navigator>
        </NavigationContainer>
        )
    }

}

export default AppContainer