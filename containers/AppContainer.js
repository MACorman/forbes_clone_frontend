import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faNewspaper, faBookOpen, faPlay } from '@fortawesome/free-solid-svg-icons'
import Latest from './Latest';
import Magazine from './Magazine';
import Video from './Video'

const Tabs = createBottomTabNavigator();

class AppContainer extends React.Component {

    render() {
        return (
          <NavigationContainer>
              <Tabs.Navigator
                  screenOptions={({ route }) => ({
                      tabBarIcon: ({ focused }) => {
                        if (route.name === 'Latest') {
                          return (
                            < FontAwesomeIcon 
                              icon={ faNewspaper }
                              size={30}
                              color={focused ? '#181716' : '#d3d3d3'}
                            />
                          );
                        } else if (route.name === 'Magazine') {
                          return (
                            <FontAwesomeIcon
                              icon={ faBookOpen }
                              size={30}
                              color={focused ? '#181716' : '#d3d3d3'}
                            />
                          );
                        } else {
                          return (
                              <FontAwesomeIcon
                                icon={ faPlay }
                                size={30}
                                color={focused ? '#181716' : '#d3d3d3'}
                              />
                            );
                        }
                      },
                    })}
                    tabBarOptions={{
                      activeTintColor: '#181716',
                      inactiveTintColor: 'gray',
                    }}
              >
              <Tabs.Screen name='Latest'>
                  {props => <Latest {...props} showStoryDetails={this.props.showStoryDetails}/>}
              </Tabs.Screen>
              <Tabs.Screen name='Magazine'>
                {props => <Magazine {...props} currentUser={this.props.currentUser} purchaseMagazine={this.props.purchaseMagazine} />}
              </Tabs.Screen>
              <Tabs.Screen name='Video' component={Video} />
              </Tabs.Navigator>
          </NavigationContainer>
        )
    }
}

export default AppContainer