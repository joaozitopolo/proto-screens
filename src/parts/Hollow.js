import React from 'react';
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'

const Hollow = ({width = '80%', height = 50, children}) => (
    <View height={height + 40} style={styles.outer} >
        <View width={width} height={height}>
            {children}
        </View>
    </View>
)

const styles = StyleSheet.create({
    outer: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Hollow