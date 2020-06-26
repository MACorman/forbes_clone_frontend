import React from 'react'
import {View, Text, Image} from 'react-native'

function MagazineCard(props) {

    return(
        <View style={{marginLeft: 'auto', marginRight: 'auto', paddingTop: 30}}>
            <Image source={{uri: props.url}} style={{width: 350, height: 450}}/>
            <Text style={{fontFamily: 'Damascus', fontSize: 20, color: 'white', paddingTop: 10}}>{props.date}</Text>
        </View>
        
    )
}

export default MagazineCard

