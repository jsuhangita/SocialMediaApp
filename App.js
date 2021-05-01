import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {stackScreen} from "./App/routes";

const Stack = createStackNavigator();

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state={
      loading:true,
    };

  }
  render() {
    // get Authentication Check and Authentication state from AppReducer.js
    const {
      spinner
    } = this.props;
    return (
        <NavigationContainer>
          <View style={styles.wrapper}>
            <View style={styles.container}>
              <Stack.Navigator
                  headerMode={'none'}
              >
                <Stack.Screen name="App" component={stackScreen}/>
              </Stack.Navigator>
            </View>
          </View>
        </NavigationContainer>
    );
  }

}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  container: {
    flex: 1,
  },
});
