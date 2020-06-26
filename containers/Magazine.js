import React from 'react'
import {
    View,
    Text,
    SafeAreaView,
    Image,
  } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel'


class Magazine extends React.Component {

    state = {
        data: [],
        activeIndex:0,
        magazine: {},
        pressed: false,
        currentUserMags: []
    }
    
    componentDidMount() {
        fetch('http://localhost:3000/magazines')
        .then(resp => resp.json())
        .then(data => {
            this.setState({ data })
        })
        // this.setState({currentUserMags: this.props.currentUser.magazines})
    }
    
    purchaseHandler = () => {
        let index = parseInt(this.state.activeIndex)
        let magazines = this.state.data
        let magazine = magazines[index]
        this.setState({ magazine })
        this.setState({pressed: true})
        this.props.purchaseMagazine(magazine)
    }

    // purchasedOrNot = () => {
    //     let index = parseInt(this.state.activeIndex)
    //     let magazines = this.state.data
    //     let magazine = magazines[index]
    //     let userMags = this.state.currentUserMags.map(mag => mag.url)

    //     if(userMags.includes(magazine.url)){
    //         return true

    //     } else {
    //         return false
    //     }

    // }

    renderItem({item,index}){
        
        return (
          <View style={{padding: 35, marginLeft: 'auto', marginRight: 'auto',}}>
            <Image source={{uri: item.url}} style={{width: 350, height: 450}} /> 
            <Text style={{color: 'white', fontFamily: 'Damascus', paddingTop: 20, fontSize: 18}}>{item.date}</Text>
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
                        sliderWidth={350}
                        itemWidth={350}
                        renderItem={this.renderItem}
                        
                        onSnapToItem = { index => this.setState({activeIndex:index}) } 
                    />  
                </View>
                {
                    this.state.pressed
                ? 
                    <Text style={{textAlign: 'center', fontSize: 20, paddingBottom: 15, paddingTop: 15, backgroundColor: 'white'}} >Purchased</Text> 
                : 
                    <TouchableHighlight onPress={this.purchaseHandler}><Text style={{textAlign: 'center', paddingBottom: 15, paddingTop: 10, fontSize: 20, backgroundColor: 'white'}}>Purchase Content</Text></TouchableHighlight>
                }
            </SafeAreaView>
        )
    }
}

export default Magazine