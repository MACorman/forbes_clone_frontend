<script src="http://localhost:8097"></script>
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

   searchTerm = () => {
    fetch(`https://newsapi.org/v2/everything?q=covid&apiKey=4fd592e7770e4ca88f82d9d6adf1f0a6`)
    .then(resp => resp.json)
    .then(data => this.setState({articles: data.status}))
   }

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
                            onSubmitEditing={this.searchTerm}
                        />
                        <TouchableHighlight onPress={this.props.closeModal}><Text style={{marginLeft: 10, fontSize: 20, color: 'white', paddingTop: 4}}>Cancel</Text></TouchableHighlight>
                    </View>

                    
                    
                    {this.state.articles.length > 0 && this.state.articles.map(a => {
                    return <Text style={{paddingTop: 50, color: 'white'}}>{a.title}</Text>}) }

                    </View>
                </Modal>    
            </View>
        )
    }

}

export default Search


