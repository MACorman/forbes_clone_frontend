import React from 'react'
import { View, Text, Button, TextInput } from 'react-native'
// import SearchBar from 'react-native-dynamic-search-bar'
import Modal from 'react-native-modal';
import StoryCard from './StoryCard';
import { TouchableHighlight } from 'react-native-gesture-handler';


 
class Search extends React.Component {

    state = {
        input: '',
        articles: []
    }

//    componentDidMount = () => {
//     fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=4fd592e7770e4ca88f82d9d6adf1f0a6`)
//     .then(resp => resp.json)
//     .then(data => this.setState({articles: data.articles}))
//    }

    render() {
        return (
            <View>
                <Modal isVisible={true}>
                    <View style={{ flex: 1, paddingTop: 20, marginTop: 30, borderRadius: 20, backgroundColor: '#181716'}}>
                    <View style={{flexDirection:'row'}}>
                        <TextInput 
                            style={{ height: 35, width: 275, borderRadius: 12, marginLeft: 15, backgroundColor: 'white'}}
                            onChangeText={(text) => this.setState({input: text})}
                            value={this.state.input}
                            autoFocus={true}
                            // onSubmit={this.searchTerm()}
                        />
                        <TouchableHighlight onPress={this.props.closeSearch}><Text style={{marginLeft: 10, fontSize: 20, color: 'white', paddingTop: 4}}>Cancel</Text></TouchableHighlight>
                    </View>
                    
                    <Text style={{paddingTop: 100, color: 'white'}}>{'API not working'}</Text>

                    </View>
                </Modal>    
            </View>
        )
    }

}

export default Search