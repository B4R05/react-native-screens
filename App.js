import React from 'react';
import { NavigationContainer, useLinkProps } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Posts from './src/components/Posts';
import PostDetails from './src/components/PostDetails';

import { POST_DETAILS_TEXT, POSTS_TEXT } from './src/utils/constants';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={POSTS_TEXT}>
        <Stack.Screen name={POSTS_TEXT} component={Posts} />
        <Stack.Screen name={POST_DETAILS_TEXT} component={PostDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
