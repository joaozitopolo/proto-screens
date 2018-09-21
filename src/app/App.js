import React from 'react';
import { View } from 'react-native'
import { Header } from 'react-native-elements';
import ArrowSelector from '../parts/ArrowSelector'

class App extends React.Component {
  render() {
    return (
      <View>
        <Header
          leftComponent={{ icon: 'menu'}}
          centerComponent={{text: 'Proto-Screens'}}
          rightComponent={<ArrowSelector/>}
          />
        </View>
    )
  }
}

export default App