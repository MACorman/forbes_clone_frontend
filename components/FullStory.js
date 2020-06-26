import React from 'react'
import {
    Text, 
    Image, 
    View
} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faShare, faCut } from '@fortawesome/free-solid-svg-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tabs = createBottomTabNavigator()

function FullStory(props) {

    return(
        <>
            <View style={{height: 700}}>
                <View style={{marginLeft: 20, marginRight: 20}}>
                    <Text style={{fontSize: 34, fontFamily: 'TimesNewRomanPS-BoldMT', paddingTop: 10, paddingBottom: 20}}>{props.article.title.slice(0, props.article.title.indexOf('- '))}</Text>
                    <Text style={{color: 'grey', fontFamily: 'Damascus', fontSize: 18, paddingBottom: 10}}>{props.article.author}</Text>
                    <Text style={{fontFamily: 'TimesNewRomanPSMT', fontSize: 20, paddingBottom: 12}}>{props.article.description}</Text>
                </View>
                <Image source={{uri: props.article.urlToImage}} style={{width: 450, height: 200}}/>
                <View style={{marginLeft: 20, marginRight: 20}}>
                    <Text style={{fontFamily: 'TimesNewRomanPSMT', fontSize: 20, paddingTop: 12}}>{props.article.content.slice(0, props.article.content.indexOf('['))}</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 25, borderTopWidth: 1, borderTopColor: '#d3d3d3'}}>
                <FontAwesomeIcon icon={ faCut } size={30} color='#d3d3d3' style={{marginRight: 50, marginTop: 15}}/>
                <FontAwesomeIcon icon={ faShare } size={30} color='#d3d3d3' style={{marginLeft: 50, marginTop: 15}}/>
            </View>
        </>
    )   
}

export default FullStory