import React, { useEffect, useState, useLayoutEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';;
import { getStory, formatDate } from "./utils/api_data";
import {useNavigation} from "@react-navigation/native"
import {View, Text} from 'react-native'

import {
    Card,
    Title,
  Paragraph,
} from 'react-native-paper';



const StoryNews = ({ item }) => {
    const navigation =useNavigation()
    const [data, setData] = useState({})
  

  const displayStory = ()=>{
    getStory(item).then(res => {
        setData(res)
    })
  }
    


    useLayoutEffect(() => {
        if(item){
            displayStory()
        }
    
    },[item])
   
    console.log(data, 'story')
  
    const { title, by, time, type, url, id } = data;
    const timestamp = formatDate(time)

        return (
            <Card>
                <Card.Content>
                    <Title>Title: {title}</Title>
                    <Paragraph>
                        Author: {by?.toUpperCase()}
                    </Paragraph>
                    <Paragraph>
                        Url: {url}
                    </Paragraph>
                    <Paragraph>
                        Type: {type}
                    </Paragraph>
                    <Paragraph>
                        Date:{timestamp}
                    </Paragraph>
                </Card.Content>
      
            </Card>
        
        )
    
  
   
    
    
   
}

export default StoryNews;