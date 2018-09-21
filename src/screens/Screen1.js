import React from 'react';

import { View } from 'react-native'
import { Text } from 'react-native-elements';

export const Screen1 = () => (
    <View>
        <Text>Screen 1</Text>
    </View>
)

Screen1.title = "Screen 1"
Screen1.types = [ 'view' ]
