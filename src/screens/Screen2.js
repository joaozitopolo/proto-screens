import React from 'react';

import { View } from 'react-native'
import { Text } from 'react-native-elements';
import Hollow from '../parts/Hollow';

export const Screen2 = () => (
    <View>
        <Hollow>
            <Text>Screen 2</Text>
        </Hollow>
    </View>
)

Screen2.title = "Screen 2"
Screen2.types = [ 'view' ]
