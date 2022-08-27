import React from 'react';
import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InShortTabs from './components/InShortTabs';
import Context from './API/Context';

 function App() {
  return (
    <View style={{...styles.container, backgroundColor: "#282C35"}}>
      <InShortTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});

export default () => {
  return (
    <Context>
    <App/>
  </Context>
  )
}
