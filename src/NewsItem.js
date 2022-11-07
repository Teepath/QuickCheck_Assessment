import React,{useEffect, useState, memo} from 'react';
import { FlatList, StyleSheet, ActivityIndicator, View, Text } from 'react-native';
import {handleStoryIds, handleStory} from "./redux/action/action"
import {useDispatch, useSelector} from "react-redux";
import Story from "./Story";




const HeaderComponent = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Hacker Daily News!!</Text>
    </View>
  );
};


const SeparatorComponent = () => {
  return <View style={styles.separatorLine} />
}

const NewsCard = ({ currentPage, setCurrentPage}) => {
  const items = useSelector(state => state.News?.storiesIds);
  // const [currentPage, setCurrentPage] = useState(10);
  const [loading, setLoading] =useState(false)

  // const loading= useSelector(state => state.News.loading);
  const dispatch=useDispatch()


  // useEffect(()=>{
   
    
  //      dispatch(handleStoryIds(currentPage))
     
  //  },[currentPage])

  const loadMoreItems=()=>{
   setLoading(true)
    setCurrentPage(()=> currentPage + 10)
    setLoading(false)
  }

  const renderItems = ({ item }) => {
    console.log(item, 'inside')
    return (
      <Story item={item} key={item}/>
    )
  }




  const renderFooter = () => {
    if (!loading) return null;

    return (
      <View
      style={styles.loader}
      >
        <ActivityIndicator animating size="large" color="#aaa"/>
      </View>
    );
  };
  
  if (items?.length > 1) {
    return (      
      <FlatList
      data={items}
      keyExtractor={(item)=> item.toString()}
      contentContainerStyle={{flexGrow: 1, justifyContent: 'center', marginBottom:2}}
        renderItem={renderItems}
        ListFooterComponent={renderFooter}
        onEndReached={()=>loadMoreItems()}
        ItemSeparatorComponent={SeparatorComponent}
        onEndReachedThreshold={0}
        ListHeaderComponent={HeaderComponent}
      refreshing={loading}  
    />
      )
  } else {
    return (
      <View>
        <Text> Loading....</Text>
      </View>
    )
  }
  
}

var styles = StyleSheet.create({
  separatorLine: {
    height: 1,
    backgroundColor: 'plum',
    paddingTop: 2,
  },
  title: {
    fontSize: 20,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  loader:{
    marginVertical:16,
    alignItems:'center',
    marginBottom:10
  }

});

export default memo(NewsCard);
