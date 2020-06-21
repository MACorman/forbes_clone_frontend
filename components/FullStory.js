import React from 'react'
import {Text, Image, Button} from 'react-native'

class FullStory extends React.Component {

    render() {
        return(
            <>
                <Text>{this.props.article.title.slice(0, this.props.article.title.indexOf(' - '))}</Text>
                <Text>{this.props.article.author}</Text>
                {/* <Text>{this.props.article.publishedAT}</Text> */}
                <Text>{this.props.article.description}</Text>
                <Image source={{uri: this.props.article.urlToImage}} style={{width: 400,
    height: 200,}}/>
                <Text>{this.props.article.content.slice(0, this.props.article.content.indexOf('['))}</Text>
                <Button title='cut'>Cut</Button>
                <Button title='share'>Share</Button>
            </>
        )
    }
}

export default FullStory