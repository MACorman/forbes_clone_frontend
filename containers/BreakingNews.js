import React from 'react'
import { View, Text, Image } from 'react-native'
import StoryCard from '../components/StoryCard'
import { ScrollView } from 'react-native-gesture-handler'

class BreakingNews extends React.Component {

    state = {
        articles: []
    }

    componentDidMount() {
        fetch('http://newsapi.org/v2/top-headlines?country=us&apiKey=4fd592e7770e4ca88f82d9d6adf1f0a6')
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
            <View style={{ paddingTop: 20, paddingLeft: 20, backgroundColor: 'white'}}>
                <Text style={{fontFamily: 'Damascus', fontSize: 22, fontWeight: 'bold'}}>Breaking News</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {this.state.articles ? this.state.articles.map(article => {
                        return <StoryCard article={article} showStoryDetails={this.props.showStoryDetails}/>
                    
                    }) : <Text>Too many api calls</Text>}

                </ScrollView>
                

                
                
            </View>
        )
    }

}

export default BreakingNews