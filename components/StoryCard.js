import React from 'react'
import { View, Text, Image } from 'react-native'

class StoryCard extends React.Component {

    render() {
        return (
            <View>
                {this.props.article.urlToImage && <Image source={{uri: this.props.article.urlToImage}} style={{width: 200,
    height: 200,}}/>}
                <Text>{this.props.article.title}</Text>
            </View>
        )
    }

}

export default StoryCard