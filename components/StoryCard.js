import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'

class StoryCard extends React.Component {

    pressHandler = () => {
        let article = this.props.article
        this.props.showStoryDetails(article)
    }

    render() {
        return (
            <View>
                {this.props.article.urlToImage && <TouchableHighlight onPress={this.pressHandler}><Image source={{uri: this.props.article.urlToImage}} style={{width: 200,
    height: 200,}}/></TouchableHighlight>}
                <Text>{this.props.article.title.slice(0, 25) + '...'}</Text>
            </View>
        )
    }

}

export default StoryCard