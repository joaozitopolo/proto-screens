import React from 'react';
import { View } from 'react-native'
import { Icon } from 'react-native-elements';

const ArrowSelector = ({}) => (
    <View flexDirection='row'>
        <Icon name="chevron-left" type="entypo"/>
        <Icon name="chevron-right" type="entypo"/>
    </View>
)

export default ArrowSelector