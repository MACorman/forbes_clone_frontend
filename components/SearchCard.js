import React from 'react'
import { 
    View, 
    Text, 
    Image 
} from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { faShare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

class SearchCard extends React.Component {

    pressHandler = () => {
        let article = this.props.article
        this.props.showStoryDetails(article)
    }

    render() {
        return (
            <View style={{flexDirection: 'row'}}>
                {
                    this.props.article.urlToImage 
                && 
                    <TouchableHighlight underlayColor='#212424' onPress={this.pressHandler}>
                        <Image source={{uri: this.props.article.urlToImage}} style={{width: 170, height: 200}}/>
                    </TouchableHighlight>
                }
                <View style={{backgroundColor: 'white', width: 250, height: 200}}>
                    <Text style={{fontSize: 22, fontWeight: 'bold', width: 170, paddingTop: 15, paddingLeft: 15}}>{this.props.article.title.slice(0, 40).toUpperCase() + '...'}</Text>
                </View>
                <FontAwesomeIcon icon={ faShare } size={20} color='#d3d3d3' style={{marginTop: 170, right: 75}}/>
            </View>
        )
    }

}

export default SearchCard