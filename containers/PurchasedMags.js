import React from 'react'
import {Text, View} from 'react-native'
import MagazineCard from '../components/MagazineCard'
import { ScrollView } from 'react-native-gesture-handler'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'


class PurchasedMags extends React.Component {

    state = {
        usersMags: []
    }

    componentDidMount() {
        this.setState({ usersMags: this.props.currentUser.magazines})
    }

    render() {
        return (
            <>
                <View style={{flexDirection: 'row', backgroundColor: '#212424', paddingTop: 62, paddingBottom: 5}}>
                    <FontAwesomeIcon icon={ faChevronLeft } onPress={this.props.defaultDisplay} size={30} color='white'/>
                    <Text style={{fontSize: 20, fontFamily: 'Damascus', fontWeight: 'bold', color: 'white', marginLeft: 74}}>Purchased Magazines</Text>
                </View>
                <View style={{backgroundColor: '#212424'}}>
                    <ScrollView>
                        <View style={{height: 2500}}>
                            {
                                this.state.usersMags.length 
                            ? 
                                this.state.usersMags.map(mag => <MagazineCard {...mag} />) 
                            : 
                                <Text style={{textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Damascus', paddingTop: 350}}>You have not purchased any magazines.</Text>
                            }
                        </View>
                    </ScrollView>
                </View> 
            </>
        )
    }
}

export default PurchasedMags