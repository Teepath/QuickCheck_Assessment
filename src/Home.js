import React, {useEffect, useLayoutEffect, useState} from 'react';
import { TouchableOpacity, ActivityIndicator, StyleSheet, View} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getUserHandle } from "./redux/action/action"
import {handleStoryIds} from "./redux/action/action"
import NewsCard from './NewsItem';

import {
    Card,
    Title,
  Paragraph,
    List
} from 'react-native-paper';

// import {handleStoryIds, handleStory} from "./redux/action/action"


const HomeScreen = ({ navigation }) => {
  const user = useSelector(state => state.userReducer.user);
  const ids = useSelector(state => state.News.storiesIds);
  const [currentPage, setCurrentPage] = useState(10)
 
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(20)
  const [start, setStart] = useState(1)
  const [loading, setLoading] = useState(false)

 
 
  console.log(ids, 'storyids')


  useEffect(()=>{
  //  const subscribe = navigation.addListener('focus', ()=>{
      dispatch(handleStoryIds(currentPage))
  
  //  })
  //  return subscribe;
  },[currentPage])





  return (
    <View
    >
      {/* {!ids ?
        <ActivityIndicator
          style={[styles.centering, styles.gray]}
          color="#ff8179"
          size="large"
        /> : */}
        <Card>
          <Card.Content>
            <Title>Welcome back {user}!</Title>
            <Paragraph>Here is today's trending news</Paragraph>
          </Card.Content>
          <NewsCard currentPage={currentPage} setCurrentPage={setCurrentPage} loading={setLoading}/>
        </Card>
      {/* } */}
     
    </View>
  )
};

var styles = StyleSheet.create({
  container: {
    backgroundColor: "whitesmoke"
  },
  centering: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,

  },


});
  
export default HomeScreen;