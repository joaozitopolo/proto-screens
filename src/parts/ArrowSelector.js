import React from 'react';
import { View, TouchableHighlight } from 'react-native'
import { Icon } from 'react-native-elements';

const ArrowSelector = ({onPress}) => {
    return (
    <View flexDirection='row'>
        <TouchableHighlight onPress={ onPress(-1) }>
            <Icon name="chevron-left" type="entypo"/>
        </TouchableHighlight>
        <TouchableHighlight onPress={ onPress(1) }>
            <Icon name="chevron-right" type="entypo"/>
        </TouchableHighlight>
    </View>
    )
}

export default ArrowSelector