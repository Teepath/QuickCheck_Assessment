
import {
  NavigationContainer, DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import SplashScreen from  "react-native-splash-screen";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform, Image } from 'react-native';
import { PreferencesContext } from './utils/themeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { purple,white, black } from "./utils/colors";

import { Provider } from "react-redux";

import  React, {useEffect, useState} from 'react';
import Nav from "./Navigation"

import { store } from "./redux/reducers/store";

import {
  configureFonts, DefaultTheme, 
 
  Provider as PaperProvider,
} from 'react-native-paper';


import Login from "./Login";
import HomeScreen from "./Home";
import About from './About';

import { fontConfig } from './utils/fonts';


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


const Tab = createMaterialTopTabNavigator();

const TabNav = () => (<Tab.Navigator
  backBehavior="initialRoute"
  shifting={true}
  sceneAnimationEnabled={false}
  screenOptions={({ route }) => ({
    tabBarIcon: ({ color, size }) => {
     
        
    },
   
    tabBarActiveTintColor: Platform.OS === 'android'?purple:white,
    style: {
      backgroundColor: purple,white
    },
    indicatorStyle: {
      backgroundColor: 'yellow',
    },
    
  })}

>
  <Tab.Screen name="News" component={HomeScreen}
 
  />
  <Stack.Screen name="About" component={About} />

</Tab.Navigator>
);

const Stack = createStackNavigator();

  function App() {
const [user, setUser] = useState("")


    useEffect(() => {

      SplashScreen.hide();
    
    },[]);

  console.log(user, 'async')
      

    return (
      <Provider store={store}>
    <PaperProvider theme={theme}>
      {/* <NavigationContainer theme={theme}>
          <Stack.Navigator 
            screenOptions={{
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor:'#0080ff'
              },
            }} 
          >

            {
              !user? 
             <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}/>

            :
          
            <Stack.Screen name="Home"  component={TabNav}  options={{ headerTitle: 'Top News' ,  headerTintColor: white, headerStyle: {
              backgroundColor: purple,white
              }
              }} />

            

                      
                        
            }
          
           

           
         
        </Stack.Navigator>
      </NavigationContainer> */}

<NavigationContainer>
    <Nav/>
    </NavigationContainer>
      </PaperProvider>
        </Provider>
      
  );
  }

export default App;
 