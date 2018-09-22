import React from 'react';
import { View } from 'react-native'
import { Text } from 'react-native-elements'

const Stats = ({screens}) => (
    <View>
        <Text h4>Screens</Text>
        {screens.map((screen, idx) => (
            <Text key={idx}>{`[${idx}] ${screen.title}`}</Text>
        ))}
    </View>
)

export default Stats