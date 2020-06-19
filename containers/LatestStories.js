import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import StoryCard from '../components/StoryCard'

class LatestStories extends React.Component {

    state = {
        articles: []
    }

    componentDidMount() {
        fetch('http://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=4fd592e7770e4ca88f82d9d6adf1f0a6')
        .then(resp => resp.json())
        .then(data => {
            this.setState({articles: data.articles})
        })
    }

    render() {
        return (
            <View>
                <Text>Latest Stories</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {this.state.articles.length > 0 && this.state.articles.map(article => {
                            return <StoryCard article={article}/>
                        
                        })}
                </ScrollView>
            </View>
        )
    }

}

export default LatestStories