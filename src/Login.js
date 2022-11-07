import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView, View, StyleSheet, Text, StatusBar, TouchableOpacity, KeyboardAvoidingView, TextInput, Platform, Alert } from 'react-native';
import { white, red, } from './utils/colors';
import { Image } from 'react-native';
import {useNavigation} from "@react-navigation/native"
import { Button, Title, useTheme } from 'react-native-paper';
import { createTable, db, getUserData } from './utils/api_data';
import { setUserActionCreator, getUserHandle} from "./redux/action/action"
import { Headline, withTheme  } from 'react-native-paper';


// const db = openDatabase(
    
//     {
//         name: 'MainDb',
//         location:"default"
//     },
//     () => { },
//     (error) => {
//         console.log(error)
//     }
// )

function Login ({navigation}) {
    const [name, setName] = useState("");
    const userName = useSelector((state)=> state?.user?.user)
    // const navigation = useNavigation()
    const dispatch = useDispatch()

    //create Taber
    
    // const { dispatch, navigation, deckId } = props;
   

    useEffect(() => {
    createTable();
        getUserData()
    // if(userName){
    //     navigation.navigate('Home')
    // }  
    }, [])

    const handleSubmit = () => {
        if (name.length == 0) {
            
                Alert.alert("Warning!", 'Please write your your name')  
            

        } else {
         
               dispatch(setUserActionCreator(name))
            //    navigation.navigate('Home')
              
            
         
        }
        
       
    }

    // const isDisable =()=>{
    //     return name == ""
    // }

    console.log(name)

    const { colors, fonts } = useTheme();
  
    return (
        <View style={styles.container}>
            <Text style={{ color: colors.accent, fontSize: 40, margin:10}}> Daily News  </Text>
            <Image source={require('./assets/home.png')} style={styles.img} />
            
            <KeyboardAvoidingView style={styles.inputWraper} behavior="padding">
                <TextInput placeholder="Enter your Name" style={styles.input}
                   onChangeText={(text)=>  setName(text)} 

                />
               
                   </KeyboardAvoidingView>
                   
             <TouchableOpacity style={styles.btn} onPress={()=> handleSubmit()} >
            <Text style={{fontSize: 30, color:'white'}}> Login </Text>
    </TouchableOpacity>
                        
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#00008b',
        justifyContent: 'center',
        alignItems: "center",
        width: "100%",
    },


    img: {
        width: "30%",
        height:"10%"
    },

    inputWraper:{
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 20,
        borderColor: '#007FFF',
        borderWidth: 1,
    },
    input: {
        borderRadius: 10,
        borderWidth: 1,
        width: "100%",
        backgroundColor: "#fff",
        fontSize: 20,
        padding: 10
    },

    btn:{
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        width:150,
        height:60
    }
});


export default Login;