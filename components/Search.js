import React from 'react'
import { 
    View, 
    Text, 
    TextInput 
} from 'react-native'
import Modal from 'react-native-modal';
import SearchCard from './SearchCard';
import { TouchableHighlight, ScrollView } from 'react-native-gesture-handler';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

class Search extends React.Component {

    state = {
        input: '',
        articles: []
    }

   searchTerm = () => {
    fetch(`https://newsapi.org/v2/everything?q=${this.state.input}&apiKey=4fd592e7770e4ca88f82d9d6adf1f0a6`)
    .then(resp => resp.json())
    .then(data => this.setState({articles: data.articles}))
   }

    render() {
        return (
            <View>
                <Modal isVisible={true}>
                    <View style={{ flex: 1, paddingTop: 20, marginTop: 30, borderRadius: 20, backgroundColor: '#212424'}}>
                        <View style={{flexDirection:'row', paddingBottom: 15}}>
                            <View style={{ height: 35, width: 275, borderRadius: 12, marginLeft: 15, backgroundColor: 'white'}}>
                                <View style={{flexDirection: 'row'}}>
                                    <FontAwesomeIcon icon={faSearch} size={20} color='#d3d3d3' style={{marginTop: 8, marginLeft: 10}}/>
                                    <TextInput 
                                        style={{paddingLeft: 15, paddingTop: 9}}
                                        onChangeText={(text) => this.setState({input: text})}
                                        value={this.state.input}
                                        autoFocus={true}
                                        onSubmitEditing={this.searchTerm}
                                    />
                                </View>
                            </View>
                            <TouchableHighlight underlayColor='#212424' onPress={this.props.closeModal}>
                                <Text style={{marginLeft: 10, fontSize: 20, color: 'white', paddingTop: 4, fontFamily: 'Damascus'}}>Cancel</Text>
                            </TouchableHighlight>
                        </View>
                        <ScrollView>
                            {
                                this.state.articles.length > 0 
                            && 
                                this.state.articles.map(article => {
                                    return (
                                        <View style={{marginLeft: 'auto', marginRight: 'auto', paddingBottom: 15, backgroundColor: '#d3d3d3'}}>
                                            <SearchCard article={article} showStoryDetails={this.props.showStoryDetails}/>
                                        </View>
                                    )
                                })
                            } 
                        </ScrollView>
                    </View>
                </Modal>    
            </View>
        )
    }
}

export default Search


