import React from 'react'
import {View, Text, Image} from 'react-native'

class MagazineCard extends React.Component {

    render() {
        return(
           <>
            <Image source={{uri: this.props.url}} style={{width: 200,
            height: 200}}/>
            <Text>{this.props.date}</Text>
           </>
            
        )
    }
}

export default MagazineCard

