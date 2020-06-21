import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import StoryCard from '../components/StoryCard'

class Features extends React.Component {

    state = {
        articles: []
    }

    componentDidMount() {
        fetch('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4fd592e7770e4ca88f82d9d6adf1f0a6')
        .then(resp => resp.json())
        .then(data => {
            this.setState({articles: data.articles})
        })
    }

    render() {
        return (
            <View>
                <Text>Features</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {this.state.articles.length > 0 && this.state.articles.map(article => {
                            return <StoryCard article={article} showStoryDetails={this.props.showStoryDetails}/>
                        
                        })}
                </ScrollView>
            </View>
        )
    }

}

export default Features