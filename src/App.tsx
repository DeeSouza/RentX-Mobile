import React from 'react';
import { SafeAreaView, View, Text, StatusBar } from 'react-native';

const App = () => {
  return (
    <>
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        <View>
          <Text>1 2 3 4 5</Text>
        </View>
      </SafeAreaView>
    </>
  );
};
export default App;
