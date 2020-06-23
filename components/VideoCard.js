import React from 'react'
import { Text, View } from 'react-native'
import YouTube from 'react-native-youtube'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronRight, faShare, faSearch } from '@fortawesome/free-solid-svg-icons'

class VideoCard extends React.Component {

    render() {
        return(
            
            <View style={{flexDirection:'row', paddingBottom: 10}}>
                <YouTube
                    videoId={this.props.id.videoId} // The YouTube video ID
                    play={false}// control playback of video with true/false
                    fullscreen // control whether the video should play in fullscreen or inline
                    loop={false} // control whether the video should loop when ended
                    // onReady={e => this.setState({ isReady: true })}
                    // onChangeState={e => this.setState({ status: e.state })}
                    // onChangeQuality={e => this.setState({ quality: e.quality })}
                    // onError={e => this.setState({ error: e.error })}
                    style={{ width: 200, height: 200 }}
                />
                <View style={{width: 250, backgroundColor: '#FCFCFC'}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{width: 190, paddingTop: 15, paddingLeft: 15, fontSize: 20, fontFamily: 'Damascus', fontWeight: 'bold'}}>{this.props.snippet.title.toUpperCase().slice(0, 60) + '...'}</Text>
                        <FontAwesomeIcon icon={ faChevronRight } size={20} color='#d3d3d3' style={{top: 15}}/>
                    </View>
                </View>
                <FontAwesomeIcon icon={ faShare } size={20} color='#d3d3d3' style={{marginTop: 170, right: 65}}/>
               
            </View>
            

        )
    }
}

export default VideoCard