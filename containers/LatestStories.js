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
        .catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
             // ADD THIS THROW error
              throw error;
        });
    }

    render() {
        return (
            <View style={{ paddingTop: 20, paddingLeft: 15}}>
                <Text style={{fontFamily: 'Damascus', fontSize: 22, fontWeight: 'bold'}}>Latest Stories</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                        this.state.articles 
                    ? 
                        this.state.articles.map(article => {
                            return <StoryCard article={article} showStoryDetails={this.props.showStoryDetails}/>
                        }) 
                    : 
                        <Text>Too many api calls</Text>
                    }
                </ScrollView>
            </View>
        )
    }
}

export default LatestStories