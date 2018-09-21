import React from 'react';
import { View } from 'react-native'
import { Header, Text } from 'react-native-elements';
import ArrowSelector from '../parts/ArrowSelector'
import * as screens from '../screens'

class App extends React.Component {

  state = {
    index: 0,
    screens: [],
  }

  componentDidMount() {
    this.setState({ screens: Object.values(screens)})
  }

  render() {
    let { index, screens } = this.state
    return (
      <View>
        <Header
          leftComponent={{ icon: 'menu'}}
          centerComponent={{text: 'Proto-Screens'}}
          rightComponent={<ArrowSelector/>}
          />
        <View flex={1}>
          {index < screens.length && new screens[index]}
        </View>
        </View>
    )
  }
}

export default App