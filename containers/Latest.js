import React from 'react'
import {
    View,
    Text,
    SafeAreaView
  } from 'react-native';

import BreakingNews from './BreakingNews'
import LatestStories from './LatestStories'
import Features from './Features'
import MostPopular from './MostPopular'
// import FullStory from '../components/FullStory'
import { ScrollView } from 'react-native-gesture-handler';


class Latest extends React.Component {

    state = {
        showFullStory: false
    }

    // showStoryDetails = () => {
    //     this.setState({showFullStory: true})
    // }

    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                <View>
                    {/* {
                        this.state.showFullStory
                        ?
                        <FullStory />
                        :
                        <> */}
                            <BreakingNews showStoryDetails={this.props.showStoryDetails} />
                            <LatestStories showStoryDetails={this.props.showStoryDetails}/>
                            <Features showStoryDetails={this.props.showStoryDetails}/>
                            <MostPopular showStoryDetails={this.props.showStoryDetails}/>
                        {/* </>

                    } */}
                </View>

                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default Latest