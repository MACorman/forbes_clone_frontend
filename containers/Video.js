import React from 'react'
import {
    View,
    SafeAreaView,
    ActivityIndicator
  } from 'react-native';
import VideoCard from '../components/VideoCard'
import { ScrollView } from 'react-native-gesture-handler';


class Video extends React.Component {

    state = {
        videos: []
    }

    componentDidMount() {
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=forbes_investigates&regionCode=US&key=[APIKEY]`)
        .then(resp => resp.json())
        .then(data => {   
            this.setState({videos: data.items})
        })
        .catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
             // ADD THIS THROW error
              throw error;
        });

    }

    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <View> 
                        {
                            this.state.videos.length > 0 
                        ? 
                            this.state.videos.map(video => {
                                return <VideoCard {...video} />
                            }) 
                        : 
                            <ActivityIndicator size="large" color="#d3d3d3" style={{paddingTop: 30}}/>
                        }
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default Video