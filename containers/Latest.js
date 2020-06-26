import React from 'react'
import {
    View,
    SafeAreaView
  } from 'react-native';

import BreakingNews from './BreakingNews'
import LatestStories from './LatestStories'
import Features from './Features'
import MostPopular from './MostPopular'
import { ScrollView } from 'react-native-gesture-handler';


class Latest extends React.Component {

    state = {
        showFullStory: false
    }

    render() {
        return (
            <SafeAreaView>
                <View style={{backgroundColor: 'white'}}>
                    <ScrollView>
                        <BreakingNews showStoryDetails={this.props.showStoryDetails} />
                        <LatestStories showStoryDetails={this.props.showStoryDetails}/>
                        <Features showStoryDetails={this.props.showStoryDetails}/>
                        <MostPopular showStoryDetails={this.props.showStoryDetails}/>
                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    }
}

export default Latest