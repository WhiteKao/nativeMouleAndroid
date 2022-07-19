/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, View, NativeModules} from 'react-native';

const {CalendarModule} = NativeModules;
console.log(CalendarModule);
CalendarModule.createCalendarEvent(res => console.log(res));

const App = props => {
  return (
    <View style={styles.container}>
      <Text>App </Text>
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
