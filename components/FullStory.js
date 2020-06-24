import React from 'react'
import {Text, Image, Button, View} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faShare, faCut } from '@fortawesome/free-solid-svg-icons'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CutStory from './CutStory'
import ShareStory from './ShareStory'

const Tabs = createBottomTabNavigator()

class FullStory extends React.Component {

    render() {
        return(
            <>
                <View style={{height: 700}}>
                    <View style={{marginLeft: 20, marginRight: 20}}>
                        <Text style={{fontSize: 34, fontFamily: 'TimesNewRomanPS-BoldMT', paddingTop: 10, paddingBottom: 20}}>{this.props.article.title.slice(0, this.props.article.title.indexOf(' - '))}</Text>
                        <Text style={{color: 'grey', fontFamily: 'Damascus', fontSize: 18, paddingBottom: 10}}>{this.props.article.author}</Text>
                        {/* <Text>{this.props.article.publishedAT}</Text> */}
                        <Text style={{fontFamily: 'TimesNewRomanPSMT', fontSize: 20, paddingBottom: 12}}>{this.props.article.description}</Text>
                    </View>
                    <Image source={{uri: this.props.article.urlToImage}} style={{width: 450,
            height: 200}}/>
                    <View style={{marginLeft: 20, marginRight: 20}}>
                        <Text style={{fontFamily: 'TimesNewRomanPSMT', fontSize: 20, paddingTop: 12}}>{this.props.article.content.slice(0, this.props.article.content.indexOf('['))}</Text>
                    </View>
                </View>
                {/* <NavigationContainer>
                    <Tabs.Navigator>
                        <Tabs.Sreen name='cut' component={CutStory} />
                        <Tabs.Screen name='share' component={ShareStory} />
                    </Tabs.Navigator>

                </NavigationContainer> */}
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 25, borderTopWidth: 1, borderTopColor: '#d3d3d3'}}>
                    <FontAwesomeIcon icon={ faCut } size={30} color='#d3d3d3' style={{marginRight: 50, marginTop: 15}}/>
                    <FontAwesomeIcon icon={ faShare } size={30} color='#d3d3d3' style={{marginLeft: 50, marginTop: 15}}/>
                </View>
                {/* <Button title='cut'>Cut</Button>
                <Button title='share'>Share</Button> */}
            </>
        )
    }
}

export default FullStory