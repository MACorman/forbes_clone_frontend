import React from 'react'
import {
    View,
    Text,
    SafeAreaView
  } from 'react-native';
import VideoCard from '../components/VideoCard'
import { ScrollView } from 'react-native-gesture-handler';


class Video extends React.Component {

    state = {
        videos: []
    }


    componentDidMount() {
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=forbes&key=AIzaSyDLfcRlqeCLUJB0gj4oQbUkqti0zxj3bww`)
        .then(resp => resp.json())
        .then(data => this.setState({videos: data.items}))

    }

    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <View> 
                        {this.state.videos.length > 0 ? this.state.videos.map(video => {
                            return <VideoCard {...video} />
                        }) : <Text>Not working</Text>}
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default Video