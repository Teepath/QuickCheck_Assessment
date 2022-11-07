/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 * 
 */

import React from 'react';
 import {
  NavigationContainer, DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
// import RNBootSplash from "react-native-bootsplash";
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack'
import { Platform, Image } from 'react-native';
// import { PreferencesContext } from './utils/themeContext';
import { purple, white, black } from "./src/utils/colors";

import {
  configureFonts, DefaultTheme, 
  // DarkTheme as PaperDarkTheme,
  // DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';


import Login from "./src/Login";
import HomeScreen from "./src/Home";
import About from './src/About';

import { fontConfig } from './src/utils/fonts';


/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
// import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./src/redux/reducers/store";
import {View, Text} from "react-native"



// const Login = ()=>{
//   return(
//     <View>
//     <Text>Login here</Text>
//   </View>
//   )

// }




// const About= ()=>{
//   return(
//     <View>
//     <Text>About</Text>
//   </View>
//   )

// }

// const HomeScreen = ()=>{
//   return(
//     <View>
//     <Text>HomeScreen</Text>
//   </View>
//   )

// }


// const News = ()=>{
//   return(
//     <View>
//     <Text>News</Text>
//   </View>
//   )

// }

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
  colors: {
    ...DefaultTheme.colors,
    primary: '#fff',
    accent: '#bada55',
    background: "tomato"
    
  },
};


// const Tab = createMaterialTopTabNavigator();

// const TabNav = () => (<Tab.Navigator
//   backBehavior="initialRoute"
//   shifting={true}
//   sceneAnimationEnabled={false}
//   screenOptions={({ route }) => ({
//     tabBarIcon: ({ color, size }) => {
     
        
//     },
   
//     tabBarActiveTintColor: Platform.OS === 'android' || Platform.OS === 'web'? purple : purple,
//     style: {
//       backgroundColor: purple,
//     },
//     indicatorStyle: {
//       backgroundColor: 'yellow',
//     },
    
//   })}

// >
//   <Tab.Screen name="News" component={HomeScreen}
 
//   />
//   <Stack.Screen name="About" component={About} />

// </Tab.Navigator>
// );

const Stack = createStackNavigator();

function App (){
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <Provider store={store}>
      {/* <HomeScreen/> */}
 
      {/* <Login/> */}
      <PaperProvider theme={theme}>
     <NavigationContainer theme={theme}>
     <Stack.Navigator>
     <Stack.Screen name="Home" component={HomeScreen} />
      {/* <Stack.Navigator initialRouteName="Login"
            screenOptions={{
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor:'#0080ff'
              },
            }} 
          > */}
    {/* <About/> */}

    <Stack.Screen name="About" component={About} />
          {/* <Stack.Screen name="Home"  component={TabNav}  options={{ headerTitle: 'Top News' ,  headerTintColor: white, headerStyle: {
            backgroundColor: purple,
            }
            }} /> */}
            </Stack.Navigator>
      </NavigationContainer>
      {/* <NavigationContainer theme={theme}>
          <Stack.Navigator initialRouteName="Login"
            screenOptions={{
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor:'#0080ff'
              },
            }} 
          >
             <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}/>
          <Stack.Screen name="Home"  component={TabNav}  options={{ headerTitle: 'Top News' ,  headerTintColor: white, headerStyle: {
            backgroundColor: purple,
            }
            }} />
             <Tab.Screen name="News" component={HomeScreen}
 options={{ headerTitle: 'News' ,  headerTintColor: white, headerStyle: {
  backgroundColor: purple,
}
}} 
            />
 <Tab.Screen name="About" component={HomeScreen}
 options={{ headerTitle: 'About' ,  headerTintColor: white, headerStyle: {
  backgroundColor: purple,
}
}} 
 />
           
         
        </Stack.Navigator>
      </NavigationContainer> */}
      </PaperProvider>
  </Provider>

  );
};

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
