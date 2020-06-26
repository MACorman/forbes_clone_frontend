import React from 'react'
import { 
    View, 
    Text, 
    Image 
} from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'

class StoryCard extends React.Component {

    pressHandler = () => {
        let article = this.props.article
        this.props.showStoryDetails(article)
    }

    render() {
        return (
            <View>
                {
                    this.props.article.urlToImage 
                && 
                    <TouchableHighlight underlayColor='white' onPress={this.pressHandler}>
                        <Image source={{uri: this.props.article.urlToImage}} style={{width: 160, height: 200, borderRadius: 10, marginRight: 12, marginTop: 10}}/>
                    </TouchableHighlight>
                }
                <Text style={{fontSize: 18, width: 160}}>{this.props.article.title.slice(0, 30) + '...'}</Text>
            </View>
        )
    }

}

export default StoryCard