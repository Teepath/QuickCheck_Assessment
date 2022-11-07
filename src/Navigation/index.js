

  import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
  import { createStackNavigator } from '@react-navigation/stack';
  import { Platform, Image } from 'react-native';
  import { PreferencesContext } from '../utils/themeContext';
  import { getUserHandle } from "../redux/action/action"
  
  import { purple,white, black } from "../utils/colors";
  
  import { useSelector, useDispatch } from "react-redux";
  
  import  React, {useEffect, useState} from 'react';
import Login from "../Login";
import HomeScreen from "../Home";
import About from '../About';

import { fontConfig } from '../utils/fonts';





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
  <Tab.Screen name="About" component={About} />

</Tab.Navigator>
);


const Stack = createStackNavigator();


const Nav = ()=>{
    const dispatch=useDispatch()
    // const [user, setUser] = useState("")
    const user = useSelector(state => state.userReducer.user);

    useEffect(() => {
        dispatch(getUserHandle())
      },[])

    return(
    <Stack.Navigator>
      {
        !user?
      
    <Stack.Screen name="Login" component={Login} />
    :
    <Stack.Screen name="Home" component={TabNav} />
      }
  </Stack.Navigator>
    )
}


export default Nav;