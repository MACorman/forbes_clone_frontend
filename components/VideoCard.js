import React from 'react'
import { 
    Text, 
    View 
} from 'react-native'
import YouTube from 'react-native-youtube'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronRight, faShare } from '@fortawesome/free-solid-svg-icons'

class VideoCard extends React.Component {

    state = {
        play: false
    }

    render() {
        return(   
            <View style={{flexDirection:'row', paddingBottom: 10}}>
                <YouTube
                    videoId={this.props.id.videoId}
                    play={this.state.play? true : false}
                    fullscreen={true}
                    loop={false}
                    style={{ width: 200, height: 200 }}
                />
                <View style={{width: 250, backgroundColor: 'white'}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{width: 190, paddingTop: 15, paddingLeft: 15, fontSize: 20, fontFamily: 'Damascus', fontWeight: 'bold'}}>{this.props.snippet.title.toUpperCase().slice(0, 60) + '...'}</Text>
                        <FontAwesomeIcon onPress={() => this.setState({ play: true })} icon={ faChevronRight } size={20} color='#d3d3d3' style={{top: 15}}/>
                    </View>
                </View>
                <FontAwesomeIcon icon={ faShare } size={20} color='#d3d3d3' style={{marginTop: 170, right: 65}}/>  
            </View>
        )
    }
}

export default VideoCard