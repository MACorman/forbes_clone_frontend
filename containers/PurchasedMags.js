import React from 'react'
import {Text, Button} from 'react-native'
import MagazineCard from '../components/MagazineCard'
import { ScrollView } from 'react-native-gesture-handler'

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
                <ScrollView>
                    <Text>Purchased Magazines</Text>
                    <Button onPress={this.props.defaultDisplay} title='Back'>Back</Button>
                    {this.state.usersMags.length ? this.state.usersMags.map(mag => <MagazineCard {...mag} />) : <Text>You have not purchased any magazines.</Text>}
                </ScrollView>
            </>
        )
    }
}

export default PurchasedMags