import React from 'react'
import {
    View,
    Text,
    SafeAreaView,
    Image
  } from 'react-native';
import covers from '../MagazineData'
import MagazineCard from '../components/MagazineCard'
import { ScrollView } from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel'


class Magazine extends React.Component {

    state = {
        data: [],
        activeIndex:0
    }

    componentDidMount() {
        fetch('http://localhost:3000/magazines')
        .then(resp => resp.json())
        .then(data => {
            this.setState({ data })
        })
    }

    _renderItem({item,index}){
        return (
          <View style={{padding: 40,
            
            marginLeft: 'auto',
            marginRight: 'auto',}}>
            <Image source={{uri: item.url}} style={{width: 350, height: 500}} /> 
            <Text style={{color: 'white'}}>{item.date}</Text>
          </View>

        )
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor:'#212424' }}>
                <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                    <Carousel
                        layout={"default"}
                        loop={true}
                        ref={ref => this.carousel = ref}
                        data={this.state.data}
                        sliderWidth={300}
                        itemWidth={300}
                        renderItem={this._renderItem}
                        onSnapToItem = { index => this.setState({activeIndex:index}) } 
                    />
                </View>
               
                {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> */}
                
                    {/* {this.state.data.map(magazine => {
                        return <MagazineCard {...magazine} />
                    })} */}
                
                {/* </ScrollView> */}
            </SafeAreaView>
        )
    }
}

export default Magazine