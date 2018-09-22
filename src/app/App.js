import React from 'react';
import { View } from 'react-native'
import { Header, Text } from 'react-native-elements';
import ArrowSelector from '../parts/ArrowSelector'
import * as screens from '../screens'
import Stats from './Stats';

class App extends React.Component {

  state = {
    index: null,
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
          rightComponent={<ArrowSelector onPress={this._handlePressArrowSelector}/>}
          />
        <View flex={1}>
          {index === null && <Stats screens={screens}/>}
          {index !== null && new screens[index]}
        </View>
        </View>
    )
  }

  _handlePressArrowSelector = direction => event => {
    let { index, screens } = this.state
    index = ((index || 0) + direction)
    index = (index < 0) ? screens.length - 1 : (index >= screens.length) ? 0 : index
    this.setState({index}) 
  }

}

export default App