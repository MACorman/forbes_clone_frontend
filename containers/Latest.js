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
import { ScrollView } from 'react-native-gesture-handler';


class Latest extends React.Component {

    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                <View>
                    <BreakingNews />
                    <LatestStories />
                    <Features />
                    <MostPopular />
                </View>

                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default Latest