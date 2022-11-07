import { openDatabase } from 'react-native-sqlite-storage';
import { Alert, Platform } from "react-native";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0';
export const topStories = `${baseUrl}/topstories.json`; 
export const itemUrl = `${baseUrl}/item/`;
//https://hacker-news.firebaseio.com/v0/item/28836903.json?print=pretty

export const db = openDatabase(
    
    {
        name: 'MainDb',
        location:"default"
    },
    () => { },
    (error) => {
        console.log(error)
    }
)

export const createTable = () => {
       
    db.transaction(tx => {
        tx.executeSql(
            "CREATE TABLE IF NOT EXISTS "
            + "Users "
            + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT);"
         
        )
    })
}


export const getUserData = () => {
    return new Promise((res, rej) => {
        try {
           db.transaction((tx) => {
              tx.executeSql(
                    "SELECT Name FROM Users",
                    [],
                    (tx, results) => {
                        let len = results.rows.length;
                       
                        if (len > 0) {
                            // console.log(len)
                            let username = results.rows.item(len-1).Name;
                            console.log('Adding name to db', username)
                            res(username);
                        }
                    }
                )
            })
      
        } catch (error) {
            console.log(error)
        }
    })
    
}
  
  

export const setUserData = async (user) => {
  
        try {
           await db.transaction((tx) => {
                tx.executeSql(
                    "INSERT INTO Users (Name) VALUES('" + user + "')",
                //    "INSERT INTO Users (Name) VALUES(?)",
                   [],

                (tx, results) => {
                   if(results.rowsAffected > 0){
                   AsyncStorage.setItem("@username", JSON.stringify(user))
                    console.log('user added')
                   }
                    
                }
              
                )
           })
           
            return user;
    
        } catch (error){
    console.log(error)
        }
    
}


    export const getStoriesIds = async (st, limit) => {
        try {
            const res = await axios.get(topStories).then(({ data }) => data)
            return res.slice(st, limit);
        } catch (err) {
            console.log(err)
        }
    }

    export const getStory = async (storyId) => {
        try {
            const res = await axios.get(`${itemUrl+storyId}.json`).then(({ data }) => data)
        
            return res;
        } catch (err) {
            console.error(err, 'this');
        }
    }



    export function formatDate(timestamp) {
        const d = new Date(timestamp);
        const time = d.toLocaleTimeString("en-US");
        return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
      }


